// weather app

const weatherform = document.querySelector(".weatherform");
const cityinput = document.querySelector(".cityinput");
const card = document.querySelector(".card");
const apiKey = "79b2d3fc51e0e8b12a6db2ec2b8c0ff5";

weatherform.addEventListener("submit", (event) => {
  event.preventDefault();

  const city = cityinput.value;

  if (city) {
  } else {
    displayError("please enter city");
  }
});

async function GetWeatherdata(city) {}

async function DisplayWeatherInfo(data) {}

async function GetWeatherEmoji(weatherId) {}

async function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
}
