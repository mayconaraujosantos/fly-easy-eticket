const mongoose = require('mongoose');

const Departure = mongoose.model(
	'Departures',
	new mongoose.Schema({
		dateOutBound: { type: String },
		departureTime: { type: String },
		departureCity: { type: String },
		departureAirport: { type: String },
	}),
);
module.exports = Departure;
