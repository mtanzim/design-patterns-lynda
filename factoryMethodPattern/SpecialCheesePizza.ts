import Pizza from "./Pizza";

export default class SpecialCheesePizza extends Pizza {
  constructor() {
    super();
    this.name = "TANZIM's SUPER Cheeseeeeeeeeesy";
    this.dough = "Deep Dish Crust";
    this.sauce = "Marinara";
    this.toppings = ["Parmagianina", "Mozzarella", "Camemberet", 'CHEDDAR', 'CHEDDAR', 'CHEDDAR', 'CHEDDAR', 'CHEDDAR', 'CHEDDAR'];
    // ["Parmagianina", "Mozzarella", "Camemberet"].forEach( t => this.addTopping(t));
  }

  // overload default method
  box():void {
    console.log(`Boxing ${this.name}, enjoy a heart attack :D`);
  }

}