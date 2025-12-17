// weather app

const weatherform = document.querySelector(".weatherform");
const cityinput = document.querySelector(".cityinput");
const card = document.querySelector(".card");
const apiKey = "79b2d3fc51e0e8b12a6db2ec2b8c0ff5";

weatherform.addEventListener("submit", async (event) => {
  event.preventDefault();

  const city = cityinput.value;

  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData);
    } catch (error) {
      console.error(error);
      displayError(error);
    }
  } else {
    displayError("please enter city");
  }
});

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const response = await fetch(apiUrl);

  // console.log(response);
  if (!response.ok) {
    throw new Error("could not fetch weather data");
  }

  retrun await response.json();
}

async function displayWeatherInfo(data) {}

async function GetWeatherEmoji(weatherId) {}

async function displayError(message) {
  const errordisplay = document.createElement("p");
  errordisplay.textContent = message;
  errordisplay.classList.add("errordisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errordisplay);
}
