// eslint-disable-next-line no-unused-vars
class WeatherData {
  _descr;

  _icon;

  _city;

  _country;

  _Kelvin;

  _feelsLike;

  _wind;

  _humidity;

  _timezone;

  get time() {
    return this._time;
  }

  set time(value) {
    this._time = value;
  }

  constructor(
    descr,
    icon,
    city,
    country,
    kelvin,
    feels,
    wind,
    humidity,
    timezone
  ) {
    this._descr = descr;
    this._icon = icon;
    this._city = city;
    this._country = country;
    this._Kelvin = kelvin;
    this._feelsLike = feels;
    this._wind = wind;
    this._humidity = humidity;
    this._timezone = timezone;
  }
}

export default WeatherData;
