import IIterator from "./interfaces/IIterator";
import LinkedList from "../../../JSalgorithms/linkedLists/LinkedList";


export default class CafeMenuIterator implements IIterator {

  items: LinkedList;
  position: object;

  constructor (items) {
    this.items = items;
    this.position = items.head;
  }

  hasNext(): boolean {
    return Boolean(this.position.next);
  }

  next():LinkedList {
    let curNode = this.position.data;
    this.position = this.position.next;
    return curNode;
  }
}