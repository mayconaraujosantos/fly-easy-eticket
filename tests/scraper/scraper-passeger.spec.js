import scraperPassenger from '../../src/scraper/collector/scraper-passenger';
import startBrowser from '../../src/scraper/config/browser';
import CODE from '../../src/utils/code-url-list';
import { pageBrowserClosed } from '../../src/utils/page-browser-utils';
import fakePassenger from '../fixture';

let page, browser, passenger;

beforeAll(async () => {
	browser = await startBrowser();
	page = await browser.newPage();
	passenger = await scraperPassenger(CODE[0]);
});

afterAll(async () => {
	await pageBrowserClosed(page, browser);
});

describe('Passenger information', () => {
	it('Should be return a passenger with code reservation and board code', async () => {
		expect(passenger[0].code).toBe(fakePassenger[0].code);
		expect(passenger[0].codeReservation).toBe(fakePassenger[0].codeReservation);
	});
});
