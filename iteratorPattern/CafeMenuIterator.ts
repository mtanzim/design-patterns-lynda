import IIterator from "./interfaces/IIterator";
import LinkedList from "../../../JSalgorithms/linkedLists/LinkedList";


export default class CafeMenuIterator implements IIterator {

  items: object;
  position: number;

  constructor (items) {
    this.items = items;
    this.position = 0;
  }

  hasNext(): boolean {
    return Boolean(this.items[this.position]);
  }

  next():string {
    let curItem = this.items[String(this.position)];
    this.position ++;
    return curItem;
  }
}