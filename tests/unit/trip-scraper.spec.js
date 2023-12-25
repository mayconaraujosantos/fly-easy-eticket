import { TravelScraper } from '@infra/puppeteer/trip-scraper';

const mockTicketData = [
	{
		trips: 'IDA',
		passengers: [
			{
				firstName: 'MAYCON SANTOS',
				lastName: 'SANTOS',
				pnr: 'MFI3HS',
				eticket: null,
				buyer: '',
			},
		],
		departures: [
			{
				dateOutBound: 'sex, 31 mar',
				departureTime: '1035',
				departureCity: 'Curitiba (CWB)',
				departureAirport: '',
			},
		],
		airlineTickets: [
			{
				airlineCia: null,
				classService: 'econômica',
				flightDuration: '15',
			},
		],
		arrivals: [
			{
				arrivalTime: '11:40',
				arrivalLocation: 'São Paulo',
				arrivalAirport: 'Congonhas (CGH)',
			},
		],
		connections: [],
		totalFlightDuration: '1h 5m',
	},
];

describe('TripScraper', () => {
	it('should collect travel data', async () => {
		const ticketCode = '1cffdeb03abff1346e6148c6d46376c8e0eb9d6e';
		const travelData = await TravelScraper.scrapeTravelData(ticketCode);
		expect(travelData).toEqual(mockTicketData);
	});
});
