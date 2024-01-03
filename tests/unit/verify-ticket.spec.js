import { TicketValidator } from '../../src/utils/helpers/ticket-validator';

describe('TicketValidator', () => {
	it('should return true for a valid ticket code', () => {
		const ticketValidator = new TicketValidator();
		const validCode = '1cffdeb03abff1346e6148c6d46376c8e0eb9d6e';
		const isValid = ticketValidator.isValid(validCode);
		expect(isValid).toBe(true);
	});
});
