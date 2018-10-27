
abstract class Beverage {

  description: string = "Unknown Beverage";
  price: number;

  constructor() {
  }

  getDesc(): string {
    return this.description;
  }

  abstract cost(): number;

}

export default Beverage;