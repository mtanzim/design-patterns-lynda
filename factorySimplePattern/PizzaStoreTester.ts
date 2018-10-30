import SimplePizzaFactory from "./SimplePizzaFactory";
import PizzaStore from "./PizzaStore";

function driver() {
  let factory = new SimplePizzaFactory();
  let store = new PizzaStore(factory);

  let cheesePizza = store.orderPizza('Cheese');
  let pepPizza = store.orderPizza('pepperoni');
  console.log(cheesePizza.showPizza());
  console.log(pepPizza.showPizza());
}

driver();