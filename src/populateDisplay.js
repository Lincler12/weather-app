function populateDisplay(
  descr,
  icon,
  city,
  country,
  temp,
  feels,
  wind,
  humidity,
  timezone,
  celsius,
  feelsLikeCelsius
) {
  const cityElement = document.getElementById("city");
  const countryElement = document.getElementById("country");
  const temperatureElement = document.getElementById("temperature");
  const weatherImgElement = document.getElementById("weather-img");
  const feelsLikeElement = document.getElementById("feels-like");
  const windElement = document.getElementById("wind");
  const humidityElement = document.getElementById("humidity");

  cityElement.textContent = city;
  countryElement.textContent = `  ${country}`;
  temperatureElement.textContent = `${temp}`;
  weatherImgElement.src = icon;
  weatherImgElement.style.width = "100px";
  weatherImgElement.style.height = "100px";
  feelsLikeElement.textContent = `${feels}`;
  windElement.textContent = wind;
  humidityElement.textContent = humidity;
}

export default populateDisplay;
