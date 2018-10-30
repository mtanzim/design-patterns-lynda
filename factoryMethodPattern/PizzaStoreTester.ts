import JoePizza from "./JoePizza";
import TanzimPizza from "./TanzimPizza";

function driver() {
  // let factory = new SimplePizzaFactory();
  let joeStore = new JoePizza();

  let cheesePizza = joeStore.orderPizza('Cheese');
  let pepPizza = joeStore.orderPizza('pepperoni');
  console.log(cheesePizza.showPizza());
  console.log(pepPizza.showPizza());

  let tmStore = new TanzimPizza();

  let tmCheesePizza = tmStore.orderPizza('Cheese');
  let tmPepPizza = tmStore.orderPizza('pepperoni');
  console.log(tmCheesePizza.showPizza());
  console.log(tmPepPizza.showPizza());
}

driver();