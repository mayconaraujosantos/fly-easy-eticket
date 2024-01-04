import logger from '@common/index';
import { ScraperUtils } from './scraper-utils';
import { PASSENGER, TRIPS } from '@common/constant/selectors';
import InvalidParamError from '../../utils/errors/invalid-param-error';

export class TripScraper {
	static async collectTripData(page) {
		return await page.evaluate(
			(TRIPS, PASSENGER) => {
				const getInnerTextOrNullOrUndefined = (element, selector) => {
					const selectedElement = element.querySelector(selector);
					return selectedElement ? selectedElement.innerText : null;
				};

				const extractPassengerData = (passenger) => {
					const departure = [
						{
							dateOutBound: getInnerTextOrNullOrUndefined(
								passenger,
								TRIPS.DATE_OUT_BOUND,
							),
							departureTime: getInnerTextOrNullOrUndefined(
								passenger,
								TRIPS.TIME,
							)?.replace(':', ''),
							departureCity: getInnerTextOrNullOrUndefined(
								passenger,
								TRIPS.CITY,
							),
							departureAirport: getInnerTextOrNullOrUndefined(
								passenger,
								TRIPS.AIRPORT,
							),
						},
					];

					const airlineTicket = [
						{
							airlineCia: getInnerTextOrNullOrUndefined(
								passenger,
								TRIPS.AIRLINE_CIA,
							),
							flightNumber: getInnerTextOrNullOrUndefined(
								passenger,
								TRIPS.FLIGHT_NUMBER,
							)
								?.replace('voo', '')
								.trim(),
							classService: getInnerTextOrNullOrUndefined(
								passenger,
								TRIPS.CLASS_SERVICE,
							),
							flightDuration: getInnerTextOrNullOrUndefined(
								passenger,
								TRIPS.FLIGHT_DURATION,
							)
								?.replace(/duração/g, '')
								.replace(/\D/g, '')
								.trim(),
						},
					];

					const arrival = [
						{
							arrivalTime: getInnerTextOrNullOrUndefined(
								passenger,
								TRIPS.ARRIVAL_TIME,
							),
							arrivalLocation: getInnerTextOrNullOrUndefined(
								passenger,
								TRIPS.ARRIVAL_LOCATION,
							),
							arrivalAirport: getInnerTextOrNullOrUndefined(
								passenger,
								TRIPS.ARRIVAL_AIRPORT,
							),
						},
					];

					const connection = [
						...passenger.querySelectorAll('div.eticket__stop-body'),
					]
						.flatMap((interruption, index) => {
							if (index === 1 || index === 2) {
								return [
									{
										date: getInnerTextOrNullOrUndefined(
											interruption,
											TRIPS.DATE_OUT_BOUND,
										),
										time: getInnerTextOrNullOrUndefined(
											interruption,
											TRIPS.TIME,
										),
										city: getInnerTextOrNullOrUndefined(
											interruption,
											TRIPS.CITY,
										),
										airport: getInnerTextOrNullOrUndefined(
											interruption,
											TRIPS.AIRPORT,
										),
										airlineCia: getInnerTextOrNullOrUndefined(
											interruption,
											TRIPS.AIRLINE_CIA,
										),
										flightNumber: getInnerTextOrNullOrUndefined(
											interruption,
											TRIPS.FLIGHT_NUMBER,
										),
										classService: getInnerTextOrNullOrUndefined(
											interruption,
											TRIPS.CLASS_SERVICE,
										),
										flightDuration: getInnerTextOrNullOrUndefined(
											interruption,
											TRIPS.FLIGHT_DURATION,
										),
										arrivalCity: getInnerTextOrNullOrUndefined(
											interruption,
											TRIPS.ARRIVAL_LOCATION,
										),
										arrivalTime: getInnerTextOrNullOrUndefined(
											interruption,
											TRIPS.ARRIVAL_TIME,
										),
									},
								];
							}
						})
						.filter((elements) => elements != null);

					const passengers = [
						...passenger.querySelectorAll(TRIPS.ARRIVAL_PASSENGER),
					].map((p) => ({
						firstName: getInnerTextOrNullOrUndefined(p, PASSENGER.FIRST_NAME),
						lastName: getInnerTextOrNullOrUndefined(p, PASSENGER.LAST_NAME),
						pnr: getInnerTextOrNullOrUndefined(p, PASSENGER.PNR),
						eticket: getInnerTextOrNullOrUndefined(p, PASSENGER.ETICKET),
						buyer: getInnerTextOrNullOrUndefined(p, PASSENGER.BUYER),
					}));

					return {
						trips: getInnerTextOrNullOrUndefined(passenger, TRIPS.TRIP),
						passengers: Array.from(new Set(passengers.map(JSON.stringify))).map(
							JSON.parse,
						),
						departures: departure,
						airlineTickets: airlineTicket,
						arrivals: arrival,
						connections: connection,
						totalFlightDuration: getInnerTextOrNullOrUndefined(
							passenger,
							TRIPS.TOTAL_FLIGHT_DURATION,
						),
					};
				};

				const passengerData = [
					...document.querySelectorAll(TRIPS.ETICKET_CARD_BODY),
				].map((passenger) => extractPassengerData(passenger));

				return passengerData;
			},
			TRIPS,
			PASSENGER,
		);
	}

	static async scrapeTripData(code) {
		let page, browser;
		try {
			({ page, browser } = await ScraperUtils.initializeBrowser(code));
			return await this.collectTripData(page);
		} catch (error) {
			logger.error(error);
			throw new InvalidParamError('Failed to scrape travel data.');
		} finally {
			if (page) {
				await ScraperUtils.closeBrowser(page, browser);
			}
		}
	}
}
