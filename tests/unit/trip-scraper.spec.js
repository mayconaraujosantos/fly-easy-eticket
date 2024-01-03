import { TripScraper } from '@infra/puppeteer/trip-scraper';
import { mockTicketData } from '../mock/ticket-mock';

describe('TripScraper', () => {
	it('should scrape trip data for a given ticket code', async () => {
		const ticketCode = '1cffdeb03abff1346e6148c6d46376c8e0eb9d6e';
		const scrapedTripData = await TripScraper.scrapeTripData(ticketCode);
		expect(scrapedTripData).toEqual(mockTicketData);
	});
});
