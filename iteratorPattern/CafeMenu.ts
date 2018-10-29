import IMenu from "./interfaces/IMenu";
import IIterator from "./interfaces/IIterator";
// import * as LinkedList from module("../../../JSalgorithms/linkedLists/LinkedList");
// import CafeMenuIterator from "./CafeMenuIterator";



export default class CafeMenu {
  menuItems: any;
  
  constructor() {
    console.log(LinkedList);
    // let menuLinkedList = new LinkedList();
    this.menuItems = new LinkedList();
    this.addItems('Filter Coffee');
    this.addItems('Espresso');
    this.addItems('Cappucino');
    
  }

  addItems(item: string) : void {
    this.menuItems.addToHead(item);
  }

  menuToString(): string {
    return this.menuItems.linkedListToString();
  }

  // createIterator(): IIterator {
  //   return new CafeMenuIterator(this.menuItems);
  // }

}


function driver() {
  let cafeMenu = new CafeMenu();
  console.log(cafeMenu.menuToString());
  // let cafeMenuIter = cafeMenu.createIterator();

  // while (cafeMenuIter.hasNext()) {
  //   console.log(cafeMenuIter.next());
  // }
}

driver();