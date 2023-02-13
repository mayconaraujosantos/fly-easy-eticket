import logger from '../../utils/logger';
import {
	launchBrowser,
	pageBrowserClosed,
} from '../../utils/page-browser-utils';
import SELECTORS from '../properties/selectors';

const removeDuplicate = (array) => {
	return array.filter(
		(item, index, self) =>
			index ===
			self.findIndex(
				(t) =>
					t.firstName === item.firstName &&
					t.lastName === item.lastName &&
					t.code === item.code &&
					t.codeReservation === item.codeReservation,
			),
	);
};

const scraperPassenger = async (URL) => {
	const { page, browser } = await launchBrowser(URL);
	await page.exposeFunction('removeDuplicate', removeDuplicate);
	try {
		/* istanbul ignore next */
		return await page.evaluate((SELECTORS) => {
			const grabPassenger = [
				...document.querySelectorAll(SELECTORS.NG_SCOPE),
			].map((passenger) => {
				return {
					firstName: passenger.querySelector(SELECTORS.FIRST_NAME).innerText,
					lastName: passenger.querySelector(SELECTORS.LAST_NAME).innerText,
					code: passenger.querySelector(SELECTORS.CODE).innerText,
					codeReservation:
						passenger.querySelector(SELECTORS.CODE_RESERVATION)?.innerText ||
						null,
				};
			});
			return removeDuplicate(grabPassenger);
		}, SELECTORS);
	} catch (error) {
		/* istanbul ignore next */
		logger.error(error);
	}
	/* istanbul ignore next */
	await pageBrowserClosed(page, browser);
};
export default scraperPassenger;
