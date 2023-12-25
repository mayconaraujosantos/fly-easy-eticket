import logger from '@common/index';
import { Browser } from './browser';
import randomUserAgent from 'random-useragent';

export class ScraperUtils {
	static async initializeBrowser(code) {
		const browser = await Browser.launch();
		const page = await browser.newPage();
		const pageURL = 'https://voarfacil.net/eticket/';

		try {
			const headers = {
				'User-Agent': randomUserAgent.getRandom(),
				'Accept-Language': 'en-US,en;q=0.9',
			};

			await page.setExtraHTTPHeaders(headers);
			await page.setCacheEnabled(true);

			await page.goto(pageURL + code, { waitUntil: 'networkidle2' });

			return { browser, page };
		} catch (error) {
			logger.error(error);
		}
	}

	static async closeBrowser(page, browser) {
		if (page && browser) {
			try {
				logger.info('Closing the page...');
				await page.close();
				logger.info('Closing the browser...');
				await browser.close();
			} catch (e) {
				logger.error('Error occurred when closing chromium:', e);
			}
		}
	}
}
