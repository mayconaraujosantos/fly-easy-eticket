import config from './jest.config';

config.collectCoverageFrom = ['<rootDir>/src/main/**/*.ts'];
config.testMatch = ['**/*.test.ts'];

export default config;
