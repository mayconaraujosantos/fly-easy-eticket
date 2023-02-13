const fakePassenger = [
	{
		firstName: 'Frank André Maia men Menescal',
		lastName: 'Menescal',
		code: 'TCNRAR',
		codeReservation: '9572181561280',
	},
	{
		firstName: 'Waldemarina Magalhãe Menescal',
		lastName: 'Menescal',
		code: 'TCNRAR',
		codeReservation: '9572181561279',
	},
];

const fakePassengerNegative = [
	{
		firstName: 'Frank André Maia men Menescal',
		lastName: 'Menescal',
		code: 'ZJVJWD',
		codeReservation: '9572146183005',
	},
	{
		firstName: 'Waldemarina Magalhãe Menescal',
		lastName: 'Menescal',
		code: 'TCNRAR',
		codeReservation: '9572181561279',
	},
];

const fakePassengerNullable = [
	{
		firstName: 'Jairo Antônio Corso',
		lastName: 'CORSO',
		code: 'CBFDYL',
		codeReservation: '9572146183005',
	},
	{
		firstName: 'Jairo Antônio Corso',
		lastName: 'Corso',
		code: 'FYJ92Y',
		codeReservation: null,
	},
];

export { fakePassenger, fakePassengerNegative, fakePassengerNullable };
