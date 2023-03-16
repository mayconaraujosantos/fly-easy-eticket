import puppeteer from 'puppeteer';
import logger from '../../utils/helpers/logger';

export const startBrowser = async () => {
	let browser;
	try {
		logger.info('Opening the browser......');
		browser = await puppeteer.launch({
			headless: true,
			args: [
				'--no-sandbox',
				'--disable-setuid-sandbox',
				'--disable-dev-shm-usage',
				'--disable-accelerated-2d-canvas',
				'--no-first-run',
				'--no-zygote',
				'--disable-gpu',
			],
			ignoreHTTPSErrors: true,
		});
	} catch (error) {
		/* istanbul ignore next */
		logger.error(error);
	}
	return browser;
};

export default startBrowser;
