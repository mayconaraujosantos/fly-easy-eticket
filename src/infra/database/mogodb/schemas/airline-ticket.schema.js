const mongoose = require('mongoose');

const AirlinesTicket = mongoose.model(
	'AirlinesTickets',
	new mongoose.Schema({
		airlineCia: { type: String },
		flightNumber: { type: String },
		classService: { type: String },
		flightDuration: { type: String },
	}),
);
module.exports = AirlinesTicket;
