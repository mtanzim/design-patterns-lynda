import IMenu from "./interfaces/IMenu";
import IIterator from "./interfaces/IIterator";
// import * as LinkedList from module("../../../JSalgorithms/linkedLists/LinkedList");
import CafeMenuIterator from "./CafeMenuIterator";



export default class CafeMenu {
  private menuItems: object;
  private menuCount: number;

  constructor() {
    // let menuLinkedList = new LinkedList();
    this.menuItems = {};
    this.menuCount = 0;
    this.addItems('Filter Coffee');
    this.addItems('Espresso');
    this.addItems('Cappucino');

  }

  addItems(item: string): void {
    this.menuItems[this.menuCount] = item;
    this.menuCount++;
  }

  getMenuItems(): object {
    return this.menuItems;
  }

  createIterator(): IIterator {
    return new CafeMenuIterator(this.menuItems);
  }

}


function driver() {
  let cafeMenu = new CafeMenu();
  console.log(cafeMenu.getMenuItems());
  let cafeMenuIter = cafeMenu.createIterator();

  while (cafeMenuIter.hasNext()) {
    console.log(cafeMenuIter.next());
  }
}

// driver();