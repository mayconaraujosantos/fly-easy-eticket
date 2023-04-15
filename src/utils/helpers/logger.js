const { format, createLogger, transports } = require('winston');
const appRoot = require('app-root-path');
const { combine, timestamp, label, printf } = format;
const CATEGORY = 'Logger';

/* istanbul ignore next */
const options = {
	file: {
		level: 'info',
		filename: `${appRoot}/logs/app.log`,
		handleExceptions: true,
		json: true,
		maxsize: 5242880, // 5MB
		maxFiles: 5,
		colorize: false,
	},
	console: {
		level: 'debug',
		handleExceptions: true,
		json: true,
		colorize: true,
	},
};

/* istanbul ignore next */
const customFormat = printf(({ level, message, label, timestamp }) => {
	return `${timestamp} [${label}] ${level}: ${message}`;
});

/* istanbul ignore next */
const logger = createLogger({
	level: 'debug',
	format: combine(label({ label: CATEGORY }), timestamp(), customFormat),
	transports: [
		new transports.File(options.file),
		new transports.Console(options.file),
	],
});

/* istanbul ignore next */
logger.stream = {
	write: function (message) {
		logger.info(message);
	},
};

module.exports = logger;
