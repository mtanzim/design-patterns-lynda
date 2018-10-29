import IMenu from "./interfaces/IMenu";
import IIterator from "./interfaces/IIterator";
import { DinerMenuIterator } from "./DinerMenuIterator";

export default class DinerMenu implements IMenu {
  
  menuItems: string[];
  numItems: number;
  static MAX_ITEMS: number = 10;

  constructor() {
    this.menuItems = [];
    this.numItems = 0;

    this.addItem("Vegetarian BLT");
    this.addItem("BLT");
    this.addItem("Soup of the day");
    this.addItem("Hotdog");
    this.addItem("Steamed Veggies and Brown Rice");
    this.addItem("Pasta");
  }

  addItem(item:string): void {
    if (this.numItems < DinerMenu.MAX_ITEMS) {
      this.menuItems.push(item);
      this.numItems ++;
    } else {
      console.log('Menu full!');
    }
  }

  menuToString() : string {
    return this.menuItems.toString();
  }

  createIterator():IIterator {
    return new DinerMenuIterator(this.menuItems);
  }


}


// tester code
function driver() {
  let dinerMenu = new DinerMenu();
  console.log(dinerMenu.menuToString());
  let dinerMenuIterator = dinerMenu.createIterator();
  while (dinerMenuIterator.hasNext()) {
    console.log(dinerMenuIterator.next());
  }

}

driver();