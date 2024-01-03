import logger from '@common/index';
import { TripScraper } from '@infra/puppeteer/trip-scraper';

const ticketCode = '1cffdeb03abff1346e6148c6d46376c8e0eb9d6e';
async function main() {
	try {
		const travelData = await TripScraper.scrapeTripData(ticketCode);

		const printTravelData = JSON.stringify(travelData, null, 2);
		console.log(printTravelData);
	} catch (error) {
		logger.error(error);
	}
}

main();
