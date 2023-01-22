import puppeteer from 'puppeteer';
import startBrowser from './browser';
import SELECTORS from './selectors';

const baseURL = 'https://voarfacil.net/eticket/';

export const removeDuplicates = (array) => {
	return array.filter((item, index) => item.indexOf(item) === index);
};

const airlinesScraper = async (code) => {
	const browser = await startBrowser();

	const page = await browser.newPage();
	page.waitForSelector('.ng-scope');

	let dataObj = {};

	try {
		await page.goto(baseURL + code, { waitUntil: 'networkidle2' });
		const airlineInformation = await page.evaluate((SELECTORS) => {
			const tripPassenger = document.querySelectorAll(SELECTORS.NG_SCOPE);

			let newList = [];

			tripPassenger.forEach((trip) => {
				const passenger = trip.querySelectorAll(SELECTORS.ETICKET_HEADER);
				passenger.forEach((airlines) => {
					let firstname = airlines
						.querySelector(SELECTORS.FIRST_NAME)
						.innerHTML.trim();

					let lastName = airlines
						.querySelector(SELECTORS.LAST_NAME)
						.innerHTML.trim();

					let code = airlines.querySelector(SELECTORS.CODE).innerHTML.trim();
					newList.push({
						firstname: firstname,
						lastName: lastName,
						code: code,
					});
				});
			});
			return newList;
		}, SELECTORS);
		dataObj = {
			airlines: airlineInformation,
		};
	} catch (error) {
		console.log(error);
	}
	console.log(dataObj);
	await browser.close();
	return dataObj;
};

export default airlinesScraper;
