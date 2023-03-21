import { connection } from 'mongoose';
import scraperPassengers from '../scraper/collector/passenger';
import express from 'express';

const crypto = require('crypto');
const code = '329e5890ef8603ae36e50e1e1a09a0bc42d6133f';
// const code = '3c85ef36a32e3826603f6d41d6d8e776dacc2857';

async function main() {
	try {
		const response = await scraperPassengers(code);
		// .then((data) => {
		Object.values(response)
			.filter((fil) => fil.trips === 'IDA')
			.forEach((value) => {
				// const departure = value.departures;
				// const connection = value.connections;
				// const arrival = value.arrivals;
				// console.log(departure, connection, arrival);
				console.log(value);
			});
		// console.log(data);
		// });
		// console.log(response);
	} catch (error) {
		console.error(error);
	}
}
main();
