import URL from '../utils/code-url-list';
import scraperPassenger from './collector/scraper-passenger';

export * from './collector/scraper-passenger';

scraperPassenger(URL[0]).then(console.log).catch(console.error);
