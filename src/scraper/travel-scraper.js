import logger from '@common/index';
import { ScraperUtils } from './scraper-utils';
import { PASSENGER, TRIPS } from '@common/constant/selectors';

export class TravelScraper {
	static async collectTravelData(page) {
		return await page.evaluate(
			(TRIPS, PASSENGER) => {
				return [...document.querySelectorAll(TRIPS.ETICKET_CARD_BODY)].flatMap(
					(passenger) => {
						const departure = [
							{
								dateOutBound: passenger.querySelector(TRIPS.DATE_OUT_BOUND)
									.innerText,
								departureTime: passenger
									.querySelector(TRIPS.TIME)
									.innerText.replace(':', ''),
								departureCity: passenger.querySelector(TRIPS.CITY).innerText,
								departureAirport:
									passenger.querySelector(TRIPS.AIRPORT)?.innerText || null,
							},
						];
						const airlineTicket = [
							{
								airlineCia: passenger.querySelector(TRIPS.AIRLINE_CIA)
									.innerText,
								flightNumber: passenger
									.querySelector(TRIPS.FLIGHT_NUMBER)
									.innerText.replace('voo', '')
									.trim(),
								classService: passenger.querySelector(TRIPS.CLASS_SERVICE)
									.innerText,
								flightDuration: passenger
									.querySelector(TRIPS.FLIGHT_DURATION)
									.innerText.replace(/duração/g, '')
									.replace(/\D/g, '')
									.trim(),
							},
						];
						const arrival = [
							{
								arrivalTime: passenger.querySelector(TRIPS.ARRIVAL_TIME)
									.innerText,
								arrivalLocation: passenger.querySelector(TRIPS.ARRIVAL_LOCATION)
									.innerText,
								arrivalAirport: passenger.querySelector(TRIPS.ARRIVAL_AIRPORT)
									.innerText,
							},
						];
						// get flight connection selectors if exists
						const connection = [
							...passenger.querySelectorAll('div.eticket__stop-body'),
						]
							.flatMap((interruption, index) => {
								if (index === 1 || index === 2) {
									return [
										{
											date: interruption.querySelector(TRIPS.DATE_OUT_BOUND)
												.innerText,
											time: interruption.querySelector(TRIPS.TIME).innerText,
											city: interruption.querySelector(TRIPS.CITY).innerText,
											airport: interruption.querySelector(TRIPS.AIRPORT)
												.innerText,
											airlineCia: interruption.querySelector(TRIPS.AIRLINE_CIA)
												.innerText,
											flightNumber: interruption.querySelector(
												TRIPS.FLIGHT_NUMBER,
											).innerText,
											classService: interruption.querySelector(
												TRIPS.CLASS_SERVICE,
											).innerText,
											flightDuration: interruption.querySelector(
												TRIPS.FLIGHT_DURATION,
											).innerText,
											arrivalCity: interruption.querySelector(
												TRIPS.ARRIVAL_LOCATION,
											).innerText,
											arrivalTime: interruption.querySelector(
												TRIPS.ARRIVAL_TIME,
											).innerText,
										},
									];
								}
							})
							.filter((elements) => {
								return elements != null;
							});
						const passengerList = [
							...passenger.querySelectorAll(TRIPS.ARRIVAL_PASSENGER),
						].flatMap((p) => {
							const passengers = [
								{
									firstName: p.querySelector(PASSENGER.FIRST_NAME).innerText,
									lastName: p.querySelector(PASSENGER.LAST_NAME).innerText,
									pnr: p.querySelector(PASSENGER.PNR).innerText,
									eticket:
										p.querySelector(PASSENGER.ETICKET)?.innerText || null,
									buyer: p.querySelector(PASSENGER.BUYER)?.innerText || null,
								},
							];
							return {
								trips: passenger.querySelector(TRIPS.TRIP).innerText,
								passengers: passengers,
								departures: departure,
								airlineTickets: airlineTicket,
								arrivals: arrival,
								connections: connection,
								totalFlightDuration: passenger
									.querySelector(TRIPS.TOTAL_FLIGHT_DURATION)
									.innerText.replace(/\D/g, ''),
							};
						});
						return passengerList.filter(
							(thing, index, self) =>
								index ===
								self.findIndex(
									(t) => JSON.stringify(t) === JSON.stringify(thing),
								),
						);
					},
				);
			},
			TRIPS,
			PASSENGER,
		);
	}

	static async scrapeTravelData(code) {
		const { page, browser } = ScraperUtils.initializeBrowser(code);
		try {
			return await this.collectTravelData(page);
		} catch (error) {
			logger.error(error);
		} finally {
			await ScraperUtils.closeBrowser(page, browser);
		}
	}
}
