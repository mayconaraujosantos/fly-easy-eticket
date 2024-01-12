import { TripScraper } from './infra/puppeteer/trip-scraper';

const code = '1cffdeb03abff1346e6148c6d46376c8e0eb9d6e';

async function main() {
	try {
		const travelData = await TripScraper.scrapeTripData(code);

		return JSON.stringify(travelData, null, 2);
	} catch (error) {
		console.log(error);
	}
}

main()
	.then((result) => console.log(result))
	.catch((error) => console.error(error.message));
