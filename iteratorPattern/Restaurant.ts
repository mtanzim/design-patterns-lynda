import IIterator from "./interfaces/IIterator";
import DinerMenu from "./DinerMenu";
import CafeMenu from "./CafeMenu";

export default class Restaturant {
  constructor() {
    console.log('Restaurant');
  }

  static main():void {
    let dinerMenu = new DinerMenu();
    let cafeMenu = new CafeMenu();

    let dinerIter =  dinerMenu.createIterator();
    let cafeIter = cafeMenu.createIterator();

    console.log('\nFor lunch, we have:\n');
    Restaturant.printMenu(dinerIter);
    console.log('\nFor drinks, we have:\n');
    Restaturant.printMenu(cafeIter);

  }

  private static printMenu(iterator : IIterator): void {
    while (iterator.hasNext()){
      console.log(iterator.next())
    }
  }


}

Restaturant.main();