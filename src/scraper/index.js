import logger from '../utils/logger';
import scraperPassengers from './collector/passenger';

// const code = '7d000a04ab62ef2b889e10a3bf8c7001885ec3db';
// const code = '1e2fb6f9e8675942486afa91bd077995f6f72865';
// const code = '5234d58f01c19ba0493cf0cae054e91cc1a2681d';
const code = '5c79b9fa2334f476f6147457a34357efc3fa31db';

scraperPassengers(code)
	.then((data) => {
		console.log(data);
	})
	.catch((error) => logger.error(error));
