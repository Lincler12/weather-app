import WeatherData from "./WeatherData";
// api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}
async function fetchData(city) {
  let Data;
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=868f093f0f773b1bdc7f546a82c01464`,
      {
        method: "GET",
        mode: "cors",
      }
    );
    const json = await response.json();
    Data = new WeatherData(
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
    return Promise.reject(new Error(e));
  }
  return Data;
}

export default fetchData;
