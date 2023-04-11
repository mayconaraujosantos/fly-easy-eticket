const mongoose = require('mongoose');
const Schema = require('mongoose');

const Arrival = mongoose.model(
	'Arrivals',
	new mongoose.Schema({
		dateOutBound: { type: String },
		departureTime: { type: String },
		departureCity: { type: String },
		departureAirport: { type: String },
	}),
);
module.exports = Arrival;
