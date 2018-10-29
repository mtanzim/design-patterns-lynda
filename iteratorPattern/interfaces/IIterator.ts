export default interface IIterator {
  hasNext(): boolean;
  next(): object | string;
  // object is a type that represents the non-primitive type, i.e. any thing that is not number, string, boolean, symbol, null, or undefined.
}