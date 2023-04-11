const mongoose = require('mongoose');
const Schema = require('mongoose');
const Travel = mongoose.model(
	'Travels',
	new mongoose.Schema({
		trips: { type: String },
		passengers: {
			type: Schema.Types.ObjectId,
			ref: 'Passengers',
		},
		departures: {
			type: Schema.Types.ObjectId,
			ref: 'Departures',
		},
		airlineTickets: {
			type: Schema.Types.ObjectId,
			ref: 'AirlineTickets',
		},
		arrivals: {
			type: Schema.Types.ObjectId,
			ref: 'Arrivals',
		},
		connections: {
			type: Schema.Types.ObjectId,
			ref: 'Connections',
		},
		totalFlightDuration: {
			type: Number,
		},
	}),
);
module.exports = Travel;
