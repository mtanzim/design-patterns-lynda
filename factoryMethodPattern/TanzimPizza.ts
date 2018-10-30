import PizzaStore from "./PizzaStore";
import Pizza from "./Pizza";
import SpecialPepperoniPizza from "./SpecialPepperoniPizza";
import SpecialCheesePizza from "./SpecialCheesePizza";

// Joe makes regular pizzas
export default class TanzimPizza extends PizzaStore {

  createPizza(type: string): Pizza {


    type = type.toLowerCase();
    let pizza: Pizza = undefined;

    switch (type) {
      case "cheese":
        pizza = new SpecialCheesePizza();
        break;
      case "pepperoni":
        pizza = new SpecialPepperoniPizza();
        break;
      default:
        throw "Please define valid pizza type!";
        break;
    }

    return pizza;
  }

}