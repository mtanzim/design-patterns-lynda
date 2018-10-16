import WeatherData from "./WeatherData";
import IObserver from "./interfaces/IObserver";
import IDisplay from "./interfaces/IDisplay";
import ISubject from "./interfaces/ISubject";

export default class CurrentConditionsDisplay implements IObserver, IDisplay {
  private temperature: number;
  private humidity: number;
  private weatherData: ISubject;

  constructor(weatherData: ISubject) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  };

  display(): void {
    console.log(`Current Temperature: ${this.temperature}\nCurrent Humidity: ${this.humidity}\n`);
  }
}