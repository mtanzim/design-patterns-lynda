import Beverage from './Beverage';

export default class Espresso extends Beverage {

  constructor() {
    super();
    this.description = "Espresso";
    this.price = 4.99;
  }

  cost() {
    return this.price;
  }

}