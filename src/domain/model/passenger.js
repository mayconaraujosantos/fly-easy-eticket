class PassengerModel {
	constructor(data) {
		this.firstName = data.firstName || '';
		this.lastName = data.lastName || '';
		this.pnr = data.pnr || '';
		this.eticket = data.eticket || null;
		this.buyer = data.buyer || '';
	}
}
export default PassengerModel;
