import "core-js/stable";
import "regenerator-runtime/runtime";
import fetchData from "./fetchData";
import populate from "./populateDisplay";

const form = document.querySelector("form");
const input = document.querySelector('input[type="text"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    !document
      .getElementById("error-message")
      .classList.contains("error-message-off")
  ) {
    document.getElementById("error-message").classList.add("error-message-off");
  }
  fetchData(input.value)
    .then((resolve) => {
      const weatherData = resolve;
      populate(
        weatherData.descr,
        weatherData.getIconUrl(),
        weatherData.city,
        weatherData.country,
        weatherData.Celsius,
        weatherData.feelsLikeCelsius,
        weatherData.wind,
        weatherData.humidity,
        weatherData.time,
        weatherData.Celsius,
        weatherData.feelsLikeCelsius
      );
    })
    .catch(() => {
      if (
        document
          .getElementById("error-message")
          .classList.contains("error-message-off")
      ) {
        document
          .getElementById("error-message")
          .classList.remove("error-message-off");
      }
    });
});
