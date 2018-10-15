export default interface ISubject {
  update(temp: number, humidity: number, pressure: number): void;
}