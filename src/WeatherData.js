// eslint-disable-next-line no-unused-vars
class WeatherData {
  _descr;

  get descr() {
    return this._descr;
  }

  _icon;

  get icon() {
    return this._icon;
  }

  _city;

  get city() {
    return this._city;
  }

  _country;

  get country() {
    return this._country;
  }

  _Kelvin;

  get Kelvin() {
    return this._Kelvin;
  }

  _feelsLike;

  get feelsLike() {
    return this._feelsLike;
  }

  _wind;

  get wind() {
    return this._wind;
  }

  _humidity;

  get humidity() {
    return this._humidity;
  }

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
