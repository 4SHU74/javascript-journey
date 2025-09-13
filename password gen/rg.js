// DOM elements - all the elements we need from html
const passwordInput = document.getElementById(`password`);
const lengthSlider = document.getElementById(`length`);
const lengthDisplay = document.getElementById(`length-value`);
const uppercaseCheckbox = document.getElementById(`uppercase`);
const lowercaseCheckbox = document.getElementById(`lowercase`);
const numbersCheckbox = document.getElementById(`numbers`);
const symbolsCheckbox = document.getElementById(`symbols`);
const generateButton = document.getElementById(`generate-btn`);
const copyButton = document.getElementById(`copy-btn`);
const strengthBar = document.querySelector(`.strength-bar`);
const strengthText = document.querySelector(`.strength-container p`);
const strengthLabel = document.getElementById(`strength-label`);

// character sets
const uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
const numbersCharacters = "0123456789";
const symbolsCharacters = "!@#$%^&*()_+-=";

// password length silder
lengthSlider.addEventListener("input", () => {
  lengthDisplay.textContent = lengthSlider.value;
});

// this is for checking if u clicked or choose at least one checkbox or not
generateButton.addEventListener(`click`, makePassword);

function makePassword() {
  const length = Number(lengthSlider.value);
  const includeUppercase = uppercaseCheckbox.checked;
  const includeLowercase = lowercaseCheckbox.checked;
  const includeNumbers = numbersCheckbox.checked;
  const includeSymbols = symbolsCheckbox.checked;

  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumbers &&
    !includeSymbols
  ) {
    alert(`please select at least one character set`);
    return;
  }

  const newPassword = createRandomPassword(
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols
  );

  passwordInput.value = newPassword;
  //   start to work on the strength meter for the password
  updateStrengthmeter(newPassword);
}

// function to update strength meter

function updateStrengthmeter(password) {
  const passwordLength = password.length;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSymbols = /[!@#$%^&*()_+-=]/.test(password);

  let strengthScore = 0;

  //   here the .min will get the minimum value
  // but this would make sure "at maximum" you would get 40 points
  strengthScore += Math.min(passwordLength * 2, 40);
  if (hasUppercase) strengthScore += 15;
  if (hasLowercase) strengthScore += 15;
  if (hasNumbers) strengthScore += 15;
  if (hasSymbols) strengthScore += 15;

  //   enforce minimum score for every short  password
  if (passwordLength < 8) {
    strengthScore = Math.min(strengthScore, 40);
  }

  //   ensure the width strength bar is a  valid percentage
  const safeScore = Math.max(5, Math.min(100, strengthScore));
  strengthBar.style.width = safeScore + "%";

  let strengthLabelText = ``;
  let BarColor = ``;

  if (safeScore < 40) {
    // weak password
    BarColor = `#fc8181`; // red
    strengthLabelText = `weak`;
  } else if (safeScore < 70) {
    // medium password
    BarColor = `#f6e05e`; // yellow
    strengthLabelText = `medium`;
  } else {
    // strong password
    BarColor = `#68d391`;
    strengthLabelText = `strong`;
  }

  strengthBar.style.backgroundColor = BarColor;
  strengthLabel.textContent = strengthLabelText;
}

// function to create random password
function createRandomPassword(
  length,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols
) {
  let allCharacters = "";

  if (includeUppercase) allCharacters += uppercaseletters;
  if (includeLowercase) allCharacters += lowercaseletters;
  if (includeNumbers) allCharacters += numbersCharacters;
  if (includeSymbols) allCharacters += symbolsCharacters;

  let password = ``;
  //    this is what makes it work
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }
  return password;
}

// Copy password to clipboard
copyButton.addEventListener("click", () => {
  const password = passwordInput.value;

  if (!password) {
    alert("No password to copy!");
    return;
  }

  // Use Clipboard API
  navigator.clipboard
    .writeText(password)
    .then(() => {
      alert("Password copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy password: ", err);
    });
});

// shows success message when copied
// function showCopySuccess() {
//   copyButton.classList.remove("far", "fa-copy");
//   copyButton.classList.add("fas", "fa-check");
//   copyButton.style.color = "#48bb78";

//   setTimeout(() => {
//     copyButton.classList.remove("fas", "fa-check");
//     copyButton.classList.add("far", "fa-copy");
//     copyButton.style.color = "";
//   }, 1500);
// }

//  to create password each time refresh broweser
window.addEventListener(`DOMContentLoaded`, makePassword);
