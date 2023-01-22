module.exports = {
	roots: ['<rootDir>/tests'],
	transform: {
		'^.+\\.js$': 'babel-jest',
	},
	testPathIgnorePatterns: ['dist/'],
	coverageDirectory: 'coverage',
	testEnvironment: 'node',
	collectCoverageFrom: ['**/src/**/*.js', '!**/src/main/**'],
};
