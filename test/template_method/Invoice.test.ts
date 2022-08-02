import Beer from "../../src/template_method/Beer";
import Gin from "../../src/template_method/Gin";
import Invoice from "../../src/template_method/Invoice";
import Water from "../../src/template_method/Water";
import Whisky from "../../src/template_method/Whisky";

test("Deve criar uma fatura de compra", function () {
	const invoice = new Invoice();
	invoice.addItem(new Beer("Heineken 600ml", 10)); // 10% = 1
	invoice.addItem(new Whisky("Jack Daniels", 100)); // 20% = 20
	invoice.addItem(new Water("VOSS", 5)); // 0% = 0
	// invoice.addItem(new Wine("Campolargo", 10)); // 0,5%
	// invoice.addItem(new Juice("Laranja", 10));
	invoice.addItem(new Gin("Shapire", 100)); // 120% 120
	const taxes = invoice.calculateTaxes();
	expect(taxes).toBe(21.5);
});