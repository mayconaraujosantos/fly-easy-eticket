import { TRIP } from '../fixture/passergers';
import startBrowser from '../../src/scraper/config/browser';
import { grabPassenger } from '../../src/scraper/collector/passenger';
import { closedBrowser } from '../../src/utils/helpers/page-browser-utils';

let page, browser, passenger;

const CODE = 'af621d48b49128a772294999ba29a513afbe7fd6';

beforeAll(async () => {
	browser = await startBrowser();
	page = await browser.newPage();
	await page.setRequestInterception(true);
	page.on('request', (request) => {
		if (
			request.resourceType() === 'image' ||
			request.resourceType() === 'stylesheet'
		)
			request.abort();
		else request.continue();
	});
	await page.goto('https://voarfacil.net/eticket/' + CODE, {
		waitUntil: 'networkidle2',
	});

	passenger = await grabPassenger(page);
});

afterAll(async () => {
	await closedBrowser(page, browser);
});

describe('Get details ticket', () => {
	// positive scenario
	// Must return a ticket with the departure flight information
	it('Must return a ticket with the departure flight information', async () => {
		expect(passenger[0]).toStrictEqual(TRIP[0]);
	});
	it('Must return a ticket with the arrival flight information', async () => {
		expect(passenger[1]).toStrictEqual(TRIP[1]);
	});
	it('Should contain flight number values in ticket', async () => {
		expect(passenger[0].airlines).toEqual(
			expect.objectContaining(['TAM', 'LA3403', 'econômica', '115']),
		);
	});
});
