import "core-js/stable";
import "regenerator-runtime/runtime";
import fetchData from "./fetchData";

const form = document.querySelector("form");
const input = document.querySelector('input[type="text"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchData(input.value).then((resolve) => {
    const weatherData = resolve;
    console.table(weatherData);
  });
});
