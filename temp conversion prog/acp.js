// temprature conversion program

const textbox = document.getElementById("textbox");
const tofahrenheit = document.getElementById("tofahrenheit");
const tocelsius = document.getElementById("tocelsius");
const result = document.getElementById("result");
let temp;

function convert() {
  if (tofahrenheit.checked) {
    temp = Number(textbox.value);
    temp = (temp * 9) / 5 + 32; // Convert to Fahrenheit
    result.textContent = `${temp}°F`;
  } else if (tocelsius.checked) {
    temp = Number(textbox.value);
    temp = ((temp - 32) * 5) / 9; // Convert to Celsius
    result.textContent = `${temp}°C`;
  } else {
    result.textContent = `Select a unit`;
  }
}
