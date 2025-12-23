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

  return await response.json();
}

async function displayWeatherInfo(data) {
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;

  card.textContent = "";
  card.style.display = "flex";

  const citydisplay = document.createElement("h1");
  const tempdisplay = document.createElement("p");
  const humiditydisplay = document.createElement("p");
  const descdisplay = document.createElement("p");
  const weatheremoji = document.createElement("p");

  citydisplay.textContent = city;
  tempdisplay.textContent = `${temp}K`;
  humiditydisplay.textContent = `Humidity : ${humidity}%`;
  descdisplay.textContent = description;
  weatheremoji.textContent = GetWeatherEmoji(id);

  citydisplay.classList.add("citydisplay");
  tempdisplay.classList.add("tempdisplay");
  humiditydisplay.classList.add("humiditydisplay");
  descdisplay.classList.add("descdisplay");
  weatheremoji.classList.add("weatherEmoji");

  card.appendChild(citydisplay);
  card.appendChild(tempdisplay);
  card.appendChild(humiditydisplay);
  card.appendChild(descdisplay);
  card.appendChild(weatheremoji);
}

async function GetWeatherEmoji(weatherId) {
  switch (true) {
    case weatherId >= 200 && weatherId < 300:
      return "⛈️";
    case weatherId >= 300 && weatherId < 400:
      return "⛈️";
    case weatherId >= 500 && weatherId < 600:
      return "⛈️";
    case weatherId >= 600 && weatherId < 700:
      return "⛈️";
    case weatherId >= 700 && weatherId < 800:
      return "⛈️";
    case weatherId === 800:
      return "☀️";
  }
}

async function displayError(message) {
  const errordisplay = document.createElement("p");
  errordisplay.textContent = message;
  errordisplay.classList.add("errordisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errordisplay);
}
