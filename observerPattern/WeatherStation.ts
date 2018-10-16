import WeatherData from "./WeatherData";
import CurrentConditionsDisplay from "./CurrentConditions";
import ForecastedConditions from "./ForecastedConditions";

export default class WeatherStation {
  static main(): void {

    let weatherData: WeatherData = new WeatherData;

    // each new observer call registers a new observer; thus these declarations are required
    let currentCond: CurrentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
    let forecastedCond: ForecastedConditions = new ForecastedConditions(weatherData);

    //simulating new weather data
    weatherData.setMeasurements(1, 10, 4);
    weatherData.setMeasurements(100, 56, 5);
    weatherData.setMeasurements(30, 45, 7);
    
    //remove an observer
    // weatherData.removerObserver(forecastedCond);
    forecastedCond.removeSelf();
    console.log('Removed forecast!\n');
    weatherData.setMeasurements(102, 105, 7);
    weatherData.setMeasurements(1020, 1050, 7);


  }
}


function driver() {
  // let weatherStation: WeatherStation = new WeatherStation;
  WeatherStation.main();
}

driver();