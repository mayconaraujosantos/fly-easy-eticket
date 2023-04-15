import logger from './../../../utils/helpers/logger';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

export default class Database {
	constructor(uri) {
		this.uri = uri;
	}
	async connect() {
		try {
			await mongoose.connect(this.uri, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			});
			logger.info('Connected to MONGODB');
		} catch (error) {
			logger.error(`Failed to connect to MongoDB: ${error}`);
			process.exit(1);
		}
	}
	async disconnect() {
		try {
			await mongoose.disconnect();
			logger.info('Disconnected from MongoDB');
		} catch (error) {
			logger.error(`Failed to disconnect from MongoDB: ${error}`);
			process.exit(1);
		}
	}
}
