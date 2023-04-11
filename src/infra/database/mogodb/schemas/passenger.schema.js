const mongoose = require('mongoose');
const Schema = require('mongoose');

const Passenger = mongoose.model(
	'Passengers',
	new mongoose.Schema({
		firstName: { type: String },
		lastName: { type: String },
		pnr: { type: String },
		eticket: { type: String },
		buyer: { type: String },
	}),
);
module.exports = Passenger;
