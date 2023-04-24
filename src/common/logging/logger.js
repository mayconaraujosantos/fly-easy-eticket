import appRoot from 'app-root-path';
import { createLogger, format, transports } from 'winston';

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
export const logger = createLogger({
	level: 'debug',
	format: combine(label({ label: CATEGORY }), timestamp(), customFormat),
	transports: [
		new transports.File(options.file),
		new transports.Console(options.file),
	],
	exitOnError: false,
});

logger.stream = {
	write: (message) => {
		logger.info(message);
	},
};
