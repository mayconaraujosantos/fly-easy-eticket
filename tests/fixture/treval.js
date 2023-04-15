export const TRIP_DEPARTURE = {
	trips: 'IDA',
	passengers: [
		{
			firstName: 'Tatiana Regina Pelizzari',
			lastName: 'PELIZZARI',
			pnr: 'DRJDEV',
			eticket: '9572146179496',
			buyer: 'BRUNO PESSOA',
		},
	],
	departures: [
		{
			dateOutBound: '09/05/2021',
			departureTime: '0930',
			departureCity: 'Porto Alegre (POA)',
			departureAirport: null,
		},
	],
	airlineTickets: [
		{
			airlineCia: 'TAM',
			flightNumber: 'LA4665',
			classService: 'econômica',
			flightDuration: '135',
		},
	],
	arrivals: [
		{
			arrivalTime: '11:05',
			arrivalLocation: 'São Paulo',
			arrivalAirport: 'Congonhas (CGH)',
		},
	],
	connections: [
		{
			date: '09/05/2021',
			time: '16:20',
			city: 'São Paulo',
			airport: 'Guarulhos (GRU)',
			airlineCia: 'TAM',
			flightNumber: 'voo LA4607',
			classService: 'econômica',
			flightDuration: 'duração 1h 40m',
			arrivalCity: 'Brasília (BSB)',
			arrivalTime: '18:00',
		},
	],
	totalFlightDuration: '830',
};

export const TRIP_ARRIVAL = {
	trips: 'VOLTA',
	passengers: [
		{
			firstName: 'Tatiana Regina Pelizzari',
			lastName: 'Pelizzari',
			pnr: 'GIS9NQ',
			eticket: null,
			buyer: null,
		},
	],
	departures: [
		{
			dateOutBound: '13/05/2021',
			departureTime: '1045',
			departureCity: 'Brasília (BSB)',
			departureAirport: null,
		},
	],
	airlineTickets: [
		{
			airlineCia: 'AZUL',
			flightNumber: '4395',
			classService: 'econômica',
			flightDuration: '135',
		},
	],
	arrivals: [
		{
			arrivalTime: '12:20',
			arrivalLocation: 'Campinas',
			arrivalAirport: 'Viracopos (VCP)',
		},
	],
	connections: [
		{
			date: '13/05/2021',
			time: '16:30',
			city: 'Campinas',
			airport: 'Viracopos (VCP)',
			airlineCia: 'AZUL',
			flightNumber: 'voo 4848',
			classService: 'econômica',
			flightDuration: 'duração 1h 45m',
			arrivalCity: 'Porto Alegre (POA)',
			arrivalTime: '18:15',
		},
	],
	totalFlightDuration: '730',
};
