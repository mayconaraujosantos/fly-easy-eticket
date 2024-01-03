import { MissingParamError } from '../errors/missing-param-error';
import * as validator from './validator';

class TicketValidator {
	isValid(code) {
		if (!code) {
			throw new MissingParamError('code');
		}
		return validator.isTicket(code);
	}
}
export { TicketValidator };
