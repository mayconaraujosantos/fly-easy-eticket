import { MissingParamError } from '../errors/missing-param-error';

class MissingParamHandler {
	handle(code) {
		if (!code) {
			throw new MissingParamError('code');
		}
	}
}

export { MissingParamHandler };
