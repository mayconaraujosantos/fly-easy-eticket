export const isTicket = (code) => {
	const ticketCodePattern = /^[0-9a-fA-F]{40}$/;
	return ticketCodePattern.test(code);
};
