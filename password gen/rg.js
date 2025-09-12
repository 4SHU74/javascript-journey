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
const strengthBar = document.getElementById(`strength-bar`);
const strengthText = document.getElementById(`strength-container p`);

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
