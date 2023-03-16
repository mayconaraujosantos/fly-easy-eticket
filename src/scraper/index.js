import logger from '../utils/helpers/logger';
import scraperPassengers from './collector/passenger';

// const code = '7d000a04ab62ef2b889e10a3bf8c7001885ec3db';
// const code = '1e2fb6f9e8675942486afa91bd077995f6f72865';
// const code = '5234d58f01c19ba0493cf0cae054e91cc1a2681d';
// const code = '1c43b11b1f64ab0da62af030f55777f8db3295e7';
// const code = 'af621d48b49128a772294999ba29a513afbe7fd6';
// const code = '3c85ef36a32e3826603f6d41d6d8e776dacc2857';
// const code = 'b66de41b325468c402ee34bb1617db80f5b50832';
const code = '3c85ef36a32e3826603f6d41d6d8e776dacc2857';

scraperPassengers(code)
	.then((data) => {
		// Object.values(data).forEach((value) => {
		// 	const connections = value.connection;
		// 	const arrival = value.arrivals;
		// 	console.log(connections, arrival);
		// });
		console.log(data);
	})
	.catch((error) => logger.error(error));
