import { afterAll, beforeAll, describe, expect, it } from '@jest/globals';

import { TRIP_ARRIVAL, TRIP_DEPARTURE } from '../fixture/travel';
import { collectTravel } from '@scraper/travel';
import { startBrowser } from '@scraper/browser';
import { closedBrowser } from '@scraper/scraper-utils';

let page, browser, passenger;

const CODE = '329e5890ef8603ae36e50e1e1a09a0bc42d6133f';

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

	passenger = await collectTravel(page);
});

afterAll(async () => {
	await closedBrowser(page, browser);
});

describe('Get departure ticket details', () => {
	// positive scenario
	// Must return a ticket with the departure flight information
	it('Must return a ticket with the departure flight information', async () => {
		expect(passenger[0]).toStrictEqual(TRIP_DEPARTURE);
	});
	it('Must return a passenger ticket with the departure flight information', async () => {
		expect(passenger[0].passengers).toStrictEqual(TRIP_DEPARTURE.passengers);
	});
	it('Should must contain the departure flight number values on the ticket', async () => {
		expect(passenger[0].airlineTickets).toEqual(
			expect.objectContaining([
				{
					airlineCia: 'TAM',
					flightNumber: 'LA4665',
					classService: 'econômica',
					flightDuration: '135',
				},
			]),
		);
	});
});

describe('Get arrival ticket details', () => {
	it('Must return a ticket with the arrival flight information', async () => {
		expect(passenger[1]).toStrictEqual(TRIP_ARRIVAL);
	});
	it('Must return a passenger ticket with the arrival flight information', async () => {
		expect(passenger[1].passengers).toStrictEqual(TRIP_ARRIVAL.passengers);
	});
	it('Should must contain the arrival flight number values on the ticket', async () => {
		expect(passenger[1].airlineTickets).toEqual(
			expect.objectContaining([
				{
					airlineCia: 'AZUL',
					flightNumber: '4395',
					classService: 'econômica',
					flightDuration: '135',
				},
			]),
		);
	});
});
