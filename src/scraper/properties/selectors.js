const SELECTORS = {
	ETICKET_CARD_BODY: 'div.eticket__card.ng-scope > div.eticket__card-body',
	NG_SCOPE: 'div.ng-scope > .eticket__stop > .eticket__stop-header',
	ETICKET_HEADER: 'div.eticket__stop',
	FIRST_NAME:
		'div.eticket__stop-header-firstname > span.eticket__stop-header-title',
	LAST_NAME:
		'div.eticket__stop-header-group > span.eticket__stop-header-title.ng-binding',
	CODE: 'div.eticket__stop-header-subtitle.eticket__stop-header-codes > div > span.eticket__stop-header-title--upper.ng-binding',
	CODE_RESERVATION:
		'.eticket__stop-header-code.ng-scope > span.eticket__stop-header-title.eticket__stop-header-title--upper.ng-binding.ng-scope',
};
export default SELECTORS;
