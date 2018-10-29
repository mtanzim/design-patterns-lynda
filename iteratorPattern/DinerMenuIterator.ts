import IIterator from "./interfaces/IIterator";

export class DinerMenuIterator implements IIterator {

  items: string[];
  position: number;

  constructor(items: string[]) {
    this.items = [].concat(items);
    this.position = 0;
  }

  hasNext(): boolean {
    return Boolean(this.items[this.position] !== undefined);
  }

  next(): object | string {
    let menuItem: string = this.items[this.position];
    this.position ++;
    return menuItem;
  }
}