import IObserver from './IObserver';

export default interface ISubject {
  registerObserver(o: IObserver): void;
  removerObserver(o: IObserver): void;
  notifyObserver(): void;
}