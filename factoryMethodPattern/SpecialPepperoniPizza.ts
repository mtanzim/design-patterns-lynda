import Pizza from "./Pizza";

export default class PepperoniPizza extends Pizza {
  constructor() {
    super();
    this.name = "Tanzim's PepPep x 10";
    this.dough = "Super Duper Thick Crust";
    this.sauce = "Marinara";
    this.toppings = [];
    this.addTopping('Pepperoni');
    for (let i =0; i < 10; i++){
      this.addTopping('Pepperoni');
    }
    this.addTopping('Mozzarella');
    this.addTopping('Pepperoni again');
    // ["Parmagianina", "Mozzarella", "Camemberet"].forEach( t => this.addTopping(t));
  }

  // overload bake
  bake (){
    console.log(`Baking ${this.name} Oh shit that is a LOT OF PEPPERONI!!!`);
  }

}