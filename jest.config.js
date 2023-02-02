module.exports = {
	roots: ['<rootDir>/__tests__'],
	collectCoverage: true,
	coverageThreshold: {
		'**/*': {
			branches: 90,
			functions: 90,
			lines: 90,
			statements: 90,
		},
	},
	silent: true,
	coverageDirectory: 'coverage',
	collectCoverageFrom: ['**/src/**/*.js', '!**/src/main/**'],
	transform: {
		'^.+\\.js$': 'babel-jest',
		'\\.[jt]sx?$': 'babel-jest',
	},
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	testPathIgnorePatterns: ['dist/'],
	testEnvironment: 'node',
	// testMatch: ['**/*.spec.js'],
	testMatch: [
		'**/*.spec.js',
		'<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
		'<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
	],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	testTimeout: 30000,
	setupFilesAfterEnv: ['./jest.setup.js'],
	// fakeTimers: {
	// 	enableGlobally: true,
	// 	legacyFakeTimers: true,
	// },
};
