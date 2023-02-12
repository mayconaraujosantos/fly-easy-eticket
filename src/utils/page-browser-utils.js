import startBrowser from '../scraper/config/browser';

export const pageBrowserInit = async (URL) => {
	const browser = await startBrowser();
	const page = await browser.newPage();
	await page.goto(URL, { waitUntil: 'networkidle2' });
	return { browser, page };
};

export const pageBrowserClosed = async (page, browser) => {
	/* istanbul ignore next */
	await page.close();
	/* istanbul ignore next */
	await browser.close();
};
