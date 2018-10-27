import Beverage from './Beverage';

export default class HouseBlend extends Beverage {

  constructor() {
    super();
    this.description = "House Blend Coffee";
    this.price = 2.99;
  }

  cost() {
    return this.price;
  }

}