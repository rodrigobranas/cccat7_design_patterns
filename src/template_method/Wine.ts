import TaxItem from "./TaxItem";

export default class Wine extends TaxItem {

	constructor (description: string, price: number) {
		super("Whisky", description, price);
	}
	
	getTax() {
		if (this.price < 100) throw new Error("Cannot calculate taxes");
		return 0.05;
	}
}
