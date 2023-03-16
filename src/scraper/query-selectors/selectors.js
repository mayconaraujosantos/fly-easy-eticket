export const PASSENGER = {
	FIRST_NAME:
		'div.eticket__stop-header-firstname > span.eticket__stop-header-title',
	LAST_NAME:
		'div.eticket__stop-header-group > span.eticket__stop-header-title.ng-binding',
	PNR: 'div.eticket__stop-header-subtitle.eticket__stop-header-codes > div > span.eticket__stop-header-title--upper.ng-binding',
	ETICKET:
		'.eticket__stop-header-code.ng-scope > span.eticket__stop-header-title.eticket__stop-header-title--upper.ng-binding.ng-scope',
	BUYER:
		'div.eticket__stop-header-item--large > span.eticket__stop-header-title.ng-binding',
};
export const TRIPS = {
	DATE_OUT_BOUND:
		'div.eticket__stop-body-column > span.eticket__stop-body-item.eticket__stop-body-date.ng-binding',
	TIME: 'span.eticket__stop-body-item.eticket__stop-body-time.ng-binding',
	CITY: 'span.eticket__stop-body-item.eticket__stop-body-city.ng-binding',
	AIRPORT: 'span.eticket__stop-body-item.eticket__stop-body-airport.ng-binding',
	AIRLINE_CIA:
		'div.eticket__stop-body-column.eticket__stop-body-column--company > span.eticket__stop-body-item.eticket__stop-body-company.ng-binding',
	ETICKET_CARD_BODY:
		'div.eticket__card.ng-scope > div.eticket__card-body > div.ng-scope',
	TRIP: 'div.eticket__stop-holder-title > span.ng-binding',
	ARRIVAL_PASSENGER: '.eticket__stop > .eticket__stop-header.ng-scope',
	ARRIVAL_LOCATION:
		'.eticket__stop-body-column.eticket_column-whitout-date > .eticket__stop-body-item.eticket__stop-body-city.ng-binding',
	ARRIVAL_AIRPORT:
		'.eticket__stop-body-column.eticket_column-whitout-date > .eticket__stop-body-item.eticket__stop-body-airport.ng-binding',
	ARRIVAL_TIME:
		'.eticket__stop-body-column.eticket_column-whitout-date > .eticket__stop-body-item.eticket__stop-body-time.ng-binding',
	DEPARTURE: '.eticket__stop-body-column.eticket_column-whitout-date',
	DEPARTURE_LOCATION: '',
	DEPARTURE_LOCATION_TEXT: '',
	DEPARTURE_TIME: '',
	SCALE: '',
	FLIGHT_NUMBER:
		'span.eticket__stop-body-item.eticket__stop-body-flight-number.ng-binding',
	FLIGHT_DURATION:
		'span.eticket__stop-body-item.eticket__stop-body-duration.ng-binding',
	OPERATION_COMPANY: '',
	QNT_STOP: '',
	TOTAL_FLIGHT_DURATION:
		'div.rounded-section.eticket__stop-time-travel-resume  > b.ng-binding',
	CLASS_SERVICE:
		'span.eticket__stop-body-item.eticket__stop-body-class > span.md-visible.ng-binding',
	BAGGAGE_COMPANY_LINK:
		'https://www.latam.com/pt_br/informacao-para-sua-viagem/bagagem/bagagem-despachada/',
};
export const CONNECTION = {
	ARRIVAL_LOCATION:
		'.eticket__stop-time-scale-holder.ng-scope > .rounded-section.eticket__stop-time-scale-resume',
	ARRIVAL_LOCATION_TEXT: '',
	ARRIVAL_TIME: '',
	CLASS_SERVICE: '',
	DATE: '',
	DEPARTURE_DATE: '',
	DEPARTURE_LOCATION: '',
	DEPARTURE_LOCATION_TEXT: '',
	DEPARTURE_TIME: '',
	FLIGHT_DURATION: '',
	FLIGHT_NUMBER: '',
	OPERATION_COMPANY: '',
	QNT_SCALE: '',
	TIME_WAITING: '',
	INTERRUPTION: {
		DEPARTURE_LOCATION_TEXT: '',
		TIME_WAITING: '',
		TYPE: '',
	},
};
