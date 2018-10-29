import IIterator from "./IIterator";

export default interface IMenu {
  createIterator(): IIterator;
}