import { TRIPS } from '@common/constant/selectors';
import logger from '@common/index';
import { ScraperUtils } from '../../utils/helpers/scraper-utils';

class TripDataExtractor {
	static getInnerTextOrNullOrUndefined(element, selector) {
		const selectedElement = element.querySelector(selector);
		return selectedElement ? selectedElement.innerText : null;
	}

	static extractDeparture(passenger, TRIPS) {
		const departure = [
			{
				dateOutBound: TripDataExtractor.getInnerTextOrNullOrUndefined(
					passenger,
					TRIPS.DATE_OUT_BOUND,
				),
				departureTime: TripDataExtractor.getInnerTextOrNullOrUndefined(
					passenger,
					TRIPS.TIME,
				)?.replace(':', ''),
				departureCity: TripDataExtractor.getInnerTextOrNullOrUndefined(
					passenger,
					TRIPS.CITY,
				),
				departureAirport: TripDataExtractor.getInnerTextOrNullOrUndefined(
					passenger,
					TRIPS.AIRPORT,
				),
			},
		];
		return departure;
	}

	static extractAirlinesTicket(passenger, TRIPS) {
		const airlineTicket = [
			{
				airlineCia: TripDataExtractor.getInnerTextOrNullOrUndefined(
					passenger,
					TRIPS.OPERATION_COMPANY,
				),
				flightNumber: TripDataExtractor.getInnerTextOrNullOrUndefined(
					passenger,
					TRIPS.FLIGHT_NUMBER,
				)
					?.replace('voo', '')
					.trim(),
				classService: TripDataExtractor.getInnerTextOrNullOrUndefined(
					passenger,
					TRIPS.CLASS_SERVICE,
				),
				flightDuration: TripDataExtractor.getInnerTextOrNullOrUndefined(
					passenger,
					TRIPS.FLIGHT_DURATION,
				)
					?.replace(/duração/g, '')
					.replace(/\D/g, '')
					.trim(),
			},
		];
		return airlineTicket;
	}

	static extractArrival(passenger, TRIPS) {
		return [
			{
				arrivalTime: TripDataExtractor.getInnerTextOrNullOrUndefined(
					passenger,
					TRIPS.ARRIVAL_TIME,
				),
				arrivalLocation: TripDataExtractor.getInnerTextOrNullOrUndefined(
					passenger,
					TRIPS.ARRIVAL_LOCATION,
				),
				arrivalAirport: TripDataExtractor.getInnerTextOrNullOrUndefined(
					passenger,
					TRIPS.ARRIVAL_AIRPORT,
				),
			},
		];
	}

	static extractPassengers(passenger, TRIPS) {
		return [...passenger.querySelectorAll(TRIPS.ARRIVAL_PASSENGER)].map(
			(p) => ({
				firstName: TripDataExtractor.getInnerTextOrNullOrUndefined(
					p,
					TRIPS.PASSENGER.FIRST_NAME,
				),
				lastName: TripDataExtractor.getInnerTextOrNullOrUndefined(
					p,
					TRIPS.PASSENGER.LAST_NAME,
				),
				pnr: TripDataExtractor.getInnerTextOrNullOrUndefined(
					p,
					TRIPS.PASSENGER.PNR,
				),
				eticket: TripDataExtractor.getInnerTextOrNullOrUndefined(
					p,
					TRIPS.PASSENGER.ETICKET,
				),
				buyer: TripDataExtractor.getInnerTextOrNullOrUndefined(
					p,
					TRIPS.PASSENGER.BUYER,
				),
			}),
		);
	}

	static extractConnectionData(interruption, TRIPS) {
		return {
			date: TripDataExtractor.getInnerTextOrNullOrUndefined(
				interruption,
				TRIPS.DATE_OUT_BOUND,
			),
			time: TripDataExtractor.getInnerTextOrNullOrUndefined(
				interruption,
				TRIPS.TIME,
			),
			city: TripDataExtractor.getInnerTextOrNullOrUndefined(
				interruption,
				TRIPS.CITY,
			),
			airport: TripDataExtractor.getInnerTextOrNullOrUndefined(
				interruption,
				TRIPS.AIRPORT,
			),
			airlineCia: TripDataExtractor.getInnerTextOrNullOrUndefined(
				interruption,
				TRIPS.AIRLINE_CIA,
			),
			flightNumber: TripDataExtractor.getInnerTextOrNullOrUndefined(
				interruption,
				TRIPS.FLIGHT_NUMBER,
			),
			classService: TripDataExtractor.getInnerTextOrNullOrUndefined(
				interruption,
				TRIPS.CLASS_SERVICE,
			),
			flightDuration: TripDataExtractor.getInnerTextOrNullOrUndefined(
				interruption,
				TRIPS.FLIGHT_DURATION,
			),
			arrivalCity: TripDataExtractor.getInnerTextOrNullOrUndefined(
				interruption,
				TRIPS.ARRIVAL_LOCATION,
			),
			arrivalTime: TripDataExtractor.getInnerTextOrNullOrUndefined(
				interruption,
				TRIPS.ARRIVAL_TIME,
			),
		};
	}
}

export class TripScraper {
	static async collectTripData(page) {
		await page.addScriptTag({ content: TripDataExtractor.toString() });

		return await page.evaluate((TRIPS) => {
			const extractPassengerData = (passenger) => {
				const departure = TripDataExtractor.extractDeparture(passenger, TRIPS);

				const airlineTicket = TripDataExtractor.extractAirlinesTicket(
					passenger,
					TRIPS,
				);

				const arrival = TripDataExtractor.extractArrival(passenger, TRIPS);

				const connection = [
					...passenger.querySelectorAll(TRIPS.ETICKET_STOP_BODY),
				]
					.flatMap((interruption, index) => {
						if (index <= 2) {
							return [
								TripDataExtractor.extractConnectionData(interruption, TRIPS),
							];
						}
					})
					.filter((elements) => elements != null);

				const passengers = TripDataExtractor.extractPassengers(
					passenger,
					TRIPS,
				);

				return {
					trips: TripDataExtractor.getInnerTextOrNullOrUndefined(
						passenger,
						TRIPS.TRIP,
					),
					passengers: Array.from(new Set(passengers.map(JSON.stringify))).map(
						JSON.parse,
					),
					departures: departure,
					airlineTickets: airlineTicket,
					arrivals: arrival,
					connections: connection,
					totalFlightDuration: TripDataExtractor.getInnerTextOrNullOrUndefined(
						passenger,
						TRIPS.TOTAL_FLIGHT_DURATION,
					),
				};
			};

			return [...document.querySelectorAll(TRIPS.ETICKET_CARD_BODY)].map(
				(passenger) => extractPassengerData(passenger),
			);
		}, TRIPS);
	}

	static async scrapeTripData(code) {
		let page, browser;
		try {
			({ page, browser } = await ScraperUtils.initializeBrowser(code));
			return await this.collectTripData(page);
		} catch (error) {
			logger.error(error);
			throw new Error(error);
		} finally {
			if (page) {
				await ScraperUtils.closeBrowser(page, browser);
			}
		}
	}
}
