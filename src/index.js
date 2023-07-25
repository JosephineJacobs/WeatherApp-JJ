let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

let currentTime = document.querySelector("#date");
currentTime.innerHTML = `${day} ${hours}:${minutes}`;

// add search engine
function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#search-input");
  cityElement.innerHTML = cityInput.value;
  changeCity(cityInput.value);
}
let searchCity = document.querySelector("#search-form");
searchCity.addEventListener("submit", search);

// convert from celcius to fahrenheit

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 72;
}
function convertToCelcius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 22;
}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celciusLink = document.querySelector("#celsius-link");
celciusLink.addEventListener("click", convertToCelcius);

// search engine

function changeTemp(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  let temp = Math.round(response.data.main.temp);
  let tempElement = document.querySelector("#temperature");
  tempElement.innerHTML = temp;
}

function changeCity(city) {
  let apiKey = "a01bb04ab349056c08f42c7764ed45a0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(changeTemp);
}
