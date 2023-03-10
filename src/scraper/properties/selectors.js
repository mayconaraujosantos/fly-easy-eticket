const SELECTORS = {
	ETICKET_CARD_BODY:
		'div.eticket__card.ng-scope > div.eticket__card-body > div.ng-scope',
	NG_SCOPE: 'div.ng-scope > div.ng-scope',
	TRIP: 'div.eticket__stop-holder-title > span.ng-binding',
	FIRST_NAME:
		'div.eticket__stop-header-firstname > span.eticket__stop-header-title',
	LAST_NAME:
		'div.eticket__stop-header-group > span.eticket__stop-header-title.ng-binding',
	PNR_CODE:
		'div.eticket__stop-header-subtitle.eticket__stop-header-codes > div > span.eticket__stop-header-title--upper.ng-binding',
	BOARDING_CODE:
		'.eticket__stop-header-code.ng-scope > span.eticket__stop-header-title.eticket__stop-header-title--upper.ng-binding.ng-scope',
	MILES_PROVIDER:
		'div.eticket__stop-header-item--large > span.eticket__stop-header-title.ng-binding',
	// ARRIVAL
	ARRIVAL_PASSENGER: '.eticket__stop > .eticket__stop-header.ng-scope',
	ARRIVAL:
		'div.eticket__stop > div.eticket__stop-body > div.eticket__stop-body-column > span.eticket__stop-body-item.eticket__stop-body-date.ng-binding',
	DEPARTURE_TIME:
		'div.eticket__stop > div.eticket__stop-body > div.eticket__stop-body-column > span.eticket__stop-body-item.eticket__stop-body-date.ng-binding',
	FLIGHT_NUMBER: '',
	FLIGHT_DURATION: '',
	ARRIVAL_LOCATION_TEXT: '',
	DEPARTURE_DATE:
		'div.eticket__stop-body-column > span.eticket__stop-body-item.eticket__stop-body-date.ng-binding',
	DEPARTURE_LOCATION_TEXT:
		'span.eticket__stop-body-item.eticket__stop-body-city.ng-binding',
};
export default SELECTORS;
