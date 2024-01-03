module.exports = {
	roots: ['<rootDir>/tests'],
	silent: true,
	coverageDirectory: 'coverage',
	// collectCoverageFrom: ['**/src/**/*.js', '!**/src/main/**'],
	transform: {
		'^.+\\.js$': 'babel-jest',
		'\\.[jt]sx?$': 'babel-jest',
	},
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	testPathIgnorePatterns: ['dist/'],
	testEnvironment: 'node',
	testMatch: [
		'**/*.spec.js',
		'<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
		'<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
	],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
};
