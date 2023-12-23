import logger from '@common/index';
import { TravelScraper } from '@scraper/travel-scraper';

const eticketCode = '329e5890ef8603ae36e50e1e1a09a0bc42d6133f';

async function main() {
	try {
		const travelData = await TravelScraper.scrapeTravelData(eticketCode);
		console.log(travelData);
	} catch (error) {
		logger.error(error);
	}
}

main();
