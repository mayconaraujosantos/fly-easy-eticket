import logger from '../../utils/logger';
import {
	launchBrowser,
	pageBrowserClosed,
} from '../../utils/page-browser-utils';
import SELECTORS from '../properties/selectors';

/* istanbul ignore next */
export const grabPassenger = async (page) => {
	return await page.evaluate((SELECTORS) => {
		return [...document.querySelectorAll(SELECTORS.ETICKET_CARD_BODY)].flatMap(
			(passenger) => {
				const passengerList = [
					...passenger.querySelectorAll(SELECTORS.ARRIVAL_PASSENGER),
				].flatMap((p) => {
					return {
						trips: passenger.querySelector(SELECTORS.TRIP).innerText,
						firstName: p.querySelector(SELECTORS.FIRST_NAME).innerText,
						lastName: p.querySelector(SELECTORS.LAST_NAME).innerText,
						pnr: p.querySelector(SELECTORS.PNR_CODE).innerText,
						boardingCode:
							p.querySelector(SELECTORS.BOARDING_CODE)?.innerText || null,
						milesProvider:
							p.querySelector(SELECTORS.MILES_PROVIDER)?.innerText || null,
						arrivals: passenger.querySelector(SELECTORS.ARRIVAL).innerText,
						departure: passenger.querySelector(SELECTORS.DEPARTURE_TIME)
							.innerText,
					};
				});

				return passengerList.filter(
					(thing, index, self) =>
						index ===
						self.findIndex((t) => JSON.stringify(t) === JSON.stringify(thing)),
				);
			},
		);
	}, SELECTORS);
};

/* istanbul ignore next */
const scraperPassengers = async (code) => {
	const { page, browser } = await launchBrowser(code);
	try {
		/* istanbul ignore next */
		return await grabPassenger(page);
	} catch (error) {
		/* istanbul ignore next */
		logger.error(error);
	}
	/* istanbul ignore next */
	await pageBrowserClosed(page, browser);
};
export default scraperPassengers;
