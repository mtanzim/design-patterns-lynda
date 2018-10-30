import Pizza from "./Pizza";

export default class CheesePizza extends Pizza {
  constructor() {
    super();
    this.name = "Cheeseeeeeeeeesy";
    this.dough = "Thin Crust";
    this.sauce = "Marinara";
    this.toppings = ["Parmagianina", "Mozzarella", "Camemberet"];
    // ["Parmagianina", "Mozzarella", "Camemberet"].forEach( t => this.addTopping(t));
  }
}