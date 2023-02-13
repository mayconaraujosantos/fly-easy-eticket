import startBrowser from '../scraper/config/browser';
import logger from './logger';

export const launchBrowser = async (URL) => {
	const browser = await startBrowser();
	const page = await browser.newPage();
	await page.goto(URL, { waitUntil: 'networkidle2' });
	return { browser, page };
};

export const pageBrowserClosed = async (page, browser) => {
	/* istanbul ignore else */
	if (page && browser) {
		try {
			logger.info('close page');
			await page.close();
			logger.info('close browser');
			await browser.close();
		} catch (e) {
			/* istanbul ignore next */
			logger.error('Error ocurred when close chromium:', e);
		}
	}
};
