export class MissingParamError extends Error {
	constructor(paramName) {
		super(`Missing para: ${paramName}`);
		this.name = 'MissingParamError';
	}
}
