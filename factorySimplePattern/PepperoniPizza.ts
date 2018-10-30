import Pizza from "./Pizza";

export default class PepperoniPizza extends Pizza {
  constructor() {
    super();
    this.name = "PepPep";
    this.dough = "Regular Crust";
    this.sauce = "Marinara";
    this.toppings = [];
    this.addTopping('Pepperoni');
    this.addTopping('Mozzarella');
    this.addTopping('Pepperoni');
    this.addTopping('Pepperoni again');
    // ["Parmagianina", "Mozzarella", "Camemberet"].forEach( t => this.addTopping(t));
  }
}