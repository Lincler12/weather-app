// eslint-disable-next-line no-unused-vars
class WeatherData {
  _descr;

  _city;

  _country;

  _Fahrenheit;

  _Celsius;

  _feelsLike;

  _wind;

  _humidity;

  _time;

  get time() {
    return this._time;
  }

  set time(value) {
    this._time = value;
  }

  constructor(descr, city, country, fahren, cels, feels, wind, humidity, time) {
    this._descr = descr;
    this._city = city;
    this._country = country;
    this._Fahrenheit = fahren;
    this._Celsius = cels;
    this._feelsLike = feels;
    this._wind = wind;
    this._humidity = humidity;
    this._time = time;
  }
}

export default WeatherData;
