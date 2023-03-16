import logger from '../../utils/helpers/logger';
import {
	closedBrowser,
	initBrowser,
} from '../../utils/helpers/page-browser-utils';
import { PASSENGER, TRIPS } from '../query-selectors/selectors';

/* istanbul ignore next */
export const grabPassenger = async (page) => {
	return await page.evaluate(
		(TRIPS, PASSENGER) => {
			return [...document.querySelectorAll(TRIPS.ETICKET_CARD_BODY)].flatMap(
				(passenger) => {
					const departure = [
						passenger.querySelector(TRIPS.DATE_OUT_BOUND).innerText,
						passenger.querySelector(TRIPS.TIME).innerText.replace(':', ''),
						passenger.querySelector(TRIPS.CITY).innerText,
						passenger.querySelector(TRIPS.AIRPORT).innerText,
					];
					const airline = [
						passenger.querySelector(TRIPS.AIRLINE_CIA).innerText,
						passenger
							.querySelector(TRIPS.FLIGHT_NUMBER)
							.innerText.replace('voo', '')
							.trim(),
						passenger.querySelector(TRIPS.CLASS_SERVICE).innerText,
						passenger
							.querySelector(TRIPS.FLIGHT_DURATION)
							.innerText.replace(/duração/g, '')
							.replace(/\D/g, '')
							.trim(),
					];
					const arrival = [
						passenger.querySelector(TRIPS.ARRIVAL_TIME).innerText,
						passenger.querySelector(TRIPS.ARRIVAL_LOCATION).innerText,
						passenger.querySelector(TRIPS.ARRIVAL_AIRPORT).innerText,
					];
					// get flight connection selectors if exists
					const connection = [
						...passenger.querySelectorAll('div.eticket__stop-body'),
					].flatMap((interruption, index) => {
						if (index === 1) {
							return [
								interruption.querySelector(TRIPS.DATE_OUT_BOUND).innerText,
								interruption.querySelector(TRIPS.TIME).innerText,
								interruption.querySelector(TRIPS.CITY).innerText,
								interruption.querySelector(TRIPS.AIRPORT).innerText,
								interruption.querySelector(TRIPS.AIRLINE_CIA).innerText,
								interruption.querySelector(TRIPS.FLIGHT_NUMBER).innerText,
								interruption.querySelector(TRIPS.CLASS_SERVICE).innerText,
								interruption.querySelector(TRIPS.FLIGHT_DURATION).innerText,
								interruption.querySelector(TRIPS.ARRIVAL_TIME).innerText,
								interruption.querySelector(TRIPS.ARRIVAL_LOCATION).innerText,
							];
						}
					});
					const passengerList = [
						...passenger.querySelectorAll(TRIPS.ARRIVAL_PASSENGER),
					].flatMap((p) => {
						return {
							trips: passenger.querySelector(TRIPS.TRIP).innerText,
							firstName: p.querySelector(PASSENGER.FIRST_NAME).innerText,
							lastName: p.querySelector(PASSENGER.LAST_NAME).innerText,
							pnr: p.querySelector(PASSENGER.PNR).innerText,
							eticket: p.querySelector(PASSENGER.ETICKET)?.innerText || null,
							buyer: p.querySelector(PASSENGER.BUYER)?.innerText || null,
							departures: departure,
							airlines: airline,
							arrivals: arrival,
							connections: connection,
							totalFlightDuration: passenger.querySelector(
								TRIPS.TOTAL_FLIGHT_DURATION,
							).innerText,
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
};

/* istanbul ignore next */
const scraperPassengers = async (code) => {
	const { page, browser } = await initBrowser(code);
	try {
		/* istanbul ignore next */
		return await grabPassenger(page);
	} catch (error) {
		/* istanbul ignore next */
		logger.error(error);
	}
	/* istanbul ignore next */
	await closedBrowser(page, browser);
};
export default scraperPassengers;
