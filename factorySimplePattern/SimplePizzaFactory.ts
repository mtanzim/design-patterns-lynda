import Pizza from "./Pizza";
import CheesePizza from "./CheesePizza";
import PepperoniPizza from "./PepperoniPizza";


export default class SimplePizzaFactory {
  createPizza(type: string) : Pizza {


    type = type.toLowerCase();
    let pizza: Pizza = undefined;

    switch (type) {
      case "cheese":
        pizza = new CheesePizza();
        break;
      case "pepperoni":
        pizza = new PepperoniPizza();
        break;
      default:
        throw "Please define valid pizza type!";
        break;
    }

    return pizza;
  }
}
