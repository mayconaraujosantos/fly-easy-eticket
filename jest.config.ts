import { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src', '<rootDir>/mocks', '<rootDir>/tests'],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  coverageDirectory: '.tmp/coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/**/index.ts'],
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts', '**/*.test.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    'package.json': '<rootDir>/package.json',
    'mocks/(.*)': '<rootDir>/mocks/$1',
    '[$]/(.*)': '<rootDir>/src/$1',
    'tests/(.*)': '<rootDir>/tests/$1'
  }
};

export default config;
