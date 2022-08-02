import TaxItem from "./TaxItem";

export default class Whisky extends TaxItem {

	constructor (description: string, price: number) {
		super("Whisky", description, price);
	}

	getTax() {
		return 0.2;
	}
}
