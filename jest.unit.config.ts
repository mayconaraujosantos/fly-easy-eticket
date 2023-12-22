import config from './jest.config';

config.collectCoverageFrom = ['!<rootDir>/src/main/**/*.ts'];
config.testMatch = ['**/*.spec.ts'];

export default config;
