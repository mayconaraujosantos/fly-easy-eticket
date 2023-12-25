import logger from '@common/index';
import { TravelScraper } from '@infra/puppeteer/trip-scraper';

// const eticketCode = '7d000a04ab62ef2b889e10a3bf8c7001885ec3db'; //7 passageiros
const eticketCode = '1cffdeb03abff1346e6148c6d46376c8e0eb9d6e'; // somente ida
// const eticketCode = '5d99e08e8564df60d862b85174455acc7c8ff0f8'; // somente ida

async function main() {
	try {
		const travelData = await TravelScraper.scrapeTravelData(eticketCode);

		const printTravelData = JSON.stringify(travelData, null, 2);
		console.log(printTravelData);
	} catch (error) {
		logger.error(error);
	}
}

main();
