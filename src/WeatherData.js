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

  getIconUrl() {
    return `http://openweathermap.org/img/w/${this._icon}.png`;
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

  get Fahreneit() {
    return this._Fahreneit;
  }

  get Celsius() {
    return this._Celsius;
  }

  _feelsLikeKelvin;

  get feelsLikeKelvin() {
    return this._feelsLike;
  }

  get feelsLikeCelsius() {
    return this._feelsLikeCelsius;
  }

  get feelsLikeFahreneit() {
    return this._feelsLikeFahreneit;
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

  static kelvinToCelsius(value) {
    return Math.ceil(value - 273);
  }

  static kelvinToFahreneit(value) {
    return Math.ceil((9 / 5) * (value - 273) + 32);
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
    this._Fahreneit = WeatherData.kelvinToFahreneit(this._Kelvin);
    this._Celsius = WeatherData.kelvinToCelsius(this._Kelvin);
    this._feelsLikeKelvin = feels;
    this._feelsLikeFahreneit = WeatherData.kelvinToFahreneit(
      this._feelsLikeKelvin
    );
    this._feelsLikeCelsius = WeatherData.kelvinToCelsius(this._feelsLikeKelvin);
    this._wind = wind;
    this._humidity = humidity;
    this._timezone = timezone;
  }
}

export default WeatherData;
