import Pizza from "./Pizza";

export default abstract class PizzaStore {
  // factory: SimplePizzaFactory;

/*   constructor(factory: SimplePizzaFactory) {
    this.factory = factory;
  }
 */

  abstract createPizza(type: string):Pizza;

  orderPizza(type: string) : Pizza {
    let pizza : Pizza = this.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }

}


