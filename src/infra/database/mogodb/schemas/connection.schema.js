const mongoose = require('mongoose');
const Schema = require('mongoose');

const Connection = mongoose.model(
	'Connections',
	new mongoose.Schema({
		date: { type: String },
		time: { type: String },
		city: { type: String },
		airport: { type: String },
		airlineCia: { type: String },
		flightNumber: { type: String },
		classService: { type: String },
		flightDuration: { type: String },
		arrivalCity: { type: String },
		arrivalTime: { type: String },
	}),
);
module.exports = Connection;
