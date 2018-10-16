import ISubject from "./interfaces/ISubject";
import IObserver from "./interfaces/IObserver";

export default class WeatherData implements ISubject {

  private observers: IObserver[];
  private temperature: number;
  private humidity: number;
  private pressure: number;

  constructor() {
    this.observers = [];
  }

  registerObserver(o: IObserver): void {
    this.observers.push(o);
  };
  removerObserver(o: IObserver): void {
    let oIndex: number = this.observers.indexOf(o);
    if (oIndex > -1) this.observers.splice(oIndex, 1);

  };
  notifyObserver(): void {
    for (let observer of this.observers) {
      observer.update(this.temperature, this.humidity, this.pressure);
    }
  };

  measurementsChanged(): void {
    this.notifyObserver();
  }

  setMeasurements(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }

  getemperature(): number {
    return this.temperature;
  }

  getumidity(): number {
    return this.humidity;
  }
  
  getressure(): number {
    return this.pressure;
  }


}