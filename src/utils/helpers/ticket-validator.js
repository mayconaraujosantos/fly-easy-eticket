import InvalidParamError from '../errors/invalid-param-error';
import * as validator from './validator';

class TicketValidator {
	isValid(code) {
		if (!code || !validator.isTicket(code)) {
			throw new InvalidParamError('code');
		}
		return true;
	}
}
export { TicketValidator };
