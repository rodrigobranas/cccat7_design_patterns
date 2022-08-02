import TaxItem from "./TaxItem";

export default class Beer extends TaxItem {

	constructor (description: string, price: number) {
		super("Beer", description, price);
	}

	getTax() {
		return 0.1;
	}
}
