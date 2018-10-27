import Beverage from './Beverage';

export default class DarkRoast extends Beverage {

  constructor() {
    super();
    this.description = "Dark Roast Coffee";
    this.price = 1.99;
  }

  cost() {
    return this.price;
  }

}