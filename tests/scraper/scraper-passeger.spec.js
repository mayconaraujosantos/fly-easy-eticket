import { grabPassenger } from '../../src/scraper/collector/passenger';
import startBrowser from '../../src/scraper/config/browser';
import { pageBrowserClosed } from '../../src/utils/page-browser-utils';
import { PASSENGERS } from '../fixture/passergers';

let page, browser, passenger;

const CODE_RIDPUU = '5c79b9fa2334f476f6147457a34357efc3fa31db';

beforeAll(async () => {
	browser = await startBrowser();
	page = await browser.newPage();
	await page.goto('https://voarfacil.net/eticket/' + CODE_RIDPUU, {
		waitUntil: 'networkidle2',
	});

	passenger = await grabPassenger(page);
});

afterAll(async () => {
	await pageBrowserClosed(page, browser);
});

describe('Get information abount issuing your ticket', () => {
	// positive scenario
	// Must return a ticket with the departure flight information
	it('Must return a ticket with the departure flight information', async () => {
		expect(passenger).toStrictEqual(PASSENGERS);
	});
	// it('Must return a ticket with the arrival flight information', async () => {
	// 	expect(passenger).toStrictEqual(PASSENGERS);
	// });
	// it('Must return a ticket with the connection flight information', async () => {
	// 	expect(passenger).toStrictEqual(PASSENGERS);
	// });
});
