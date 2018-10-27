import DarkRoast from "./DarkRoast";
import Espresso from "./Espresso";
import HouseBlend from "./HouseBlend";
import Milk from "./Milk";
import Sugar from "./Sugar";

function TimGordons(): void {

  /*   let myCoffee = new DarkRoast();
    console.log(myCoffee.getDesc());
    console.log(myCoffee.cost());
  
    let momCoffee = new Espresso();
    console.log(momCoffee.getDesc());
    console.log(momCoffee.cost()); */

  let dadCoffee = new HouseBlend();
  // console.log(dadCoffee.getDesc());
  // console.log(dadCoffee.cost());

  dadCoffee = new Milk(dadCoffee);
  dadCoffee = new Milk(dadCoffee);
  dadCoffee = new Sugar(dadCoffee);
  dadCoffee = new Sugar(dadCoffee);
  dadCoffee = new Sugar(dadCoffee);
  dadCoffee = new Sugar(dadCoffee);

  console.log(dadCoffee.getDesc());
  console.log(dadCoffee.cost());

  /*   let milk = new Milk(dadCoffee);
    console.log(milk.getDesc());
    console.log(milk.cost()); */
}

TimGordons();
