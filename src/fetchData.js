import WeatherData from "./WeatherData";
// api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}
async function fetchData(city, state, country) {
  try {
    const response = await fetch(
      `api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=868f093f0f773b1bdc7f546a82c01464`,
      {
        mode: "cors",
      }
    );
    const json = await response.json();
    const Data = new WeatherData(
      json.weather[0].description,
      json.weather[0].icon,
      json.name,
      json.sys.country,
      json.main.temp,
      json.main.feels_like,
      json.wind.speed,
      json.main.humidity,
      json.timezone
    );
  } catch (e) {
    Promise.reject(new Error(e));
  }
}
