import InvalidParamError from '../../src/utils/errors/invalid-param-error';
import { TicketValidator } from '../../src/utils/helpers/ticket-validator';

describe('TicketValidator', () => {
	const ticketValidator = new TicketValidator();

	it('should return true for a valid ticket code', () => {
		const validCode = '1cffdeb03abff1346e6148c6d46376c8e0eb9d6e';
		const isValid = ticketValidator.isValid(validCode);
		expect(isValid).toBe(true);
	});

	it('should throw InvalidParamError for falsy ticket code', () => {
		const falsyCodes = [null, undefined, '', 0];
		falsyCodes.forEach((code) => {
			expect(() => ticketValidator.isValid(code)).toThrow(InvalidParamError);
		});
	});
});
