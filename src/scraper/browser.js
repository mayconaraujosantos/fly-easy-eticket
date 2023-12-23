import puppeteer from 'puppeteer';
import logger from '@common/index';

export class Browser {
	static async launch() {
		try {
			logger.info('Opening the browser......');
			const browser = await puppeteer.launch({
				headless: true,
				args: [
					'--no-sandbox',
					'--disable-setuid-sandbox',
					'--disable-dev-shm-usage',
					'--disable-accelerated-2d-canvas',
					'--no-first-run',
					'--no-zygote',
					'--disable-gpu',
					'--headless',
				],
				ignoreHTTPSErrors: true,
			});
			return browser;
		} catch (error) {
			logger.error(error);
		}
	}
}
