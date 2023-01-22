import puppeteer from 'puppeteer';

export const startBrowser = async () => {
	let browser;
	try {
		console.info('Opening the browser......');
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
		console.error(error);
	}
	return browser;
};

export default startBrowser;
