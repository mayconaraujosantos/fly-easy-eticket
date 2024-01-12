class InvalidParamError extends Error {
	constructor(paramName) {
		super(`Invalid param: ${paramName}`);
		this.name = 'invalidParamError';
	}
}
export default InvalidParamError;
