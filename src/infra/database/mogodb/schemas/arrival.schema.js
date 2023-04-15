const mongoose = require('mongoose');

const Arrival = mongoose.model(
	'Arrivals',
	new mongoose.Schema({
		arrivalTime: { type: String },
		arrivalLocation: { type: String },
		arrivalAirport: { type: String },
	}),
);
module.exports = Arrival;
