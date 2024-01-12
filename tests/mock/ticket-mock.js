export const mockTicketData = [
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
				airlineCia: 'AZUL',
				flightNumber: 'Cia de embarque: AZUL -  6023',
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
		connections: [
			{
				date: 'sex, 31 mar',
				time: '10:35',
				city: 'Curitiba (CWB)',
				airport: '',
				airlineCia: null,
				flightNumber: null,
				classService: 'econômica',
				flightDuration: 'duração 1h 5m',
				arrivalCity: 'São Paulo',
				arrivalTime: '11:40',
			},
		],
		totalFlightDuration: '1h 5m',
	},
];
