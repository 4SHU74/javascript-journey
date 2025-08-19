// dice roller project

function rolldice() {
  const numOfdice = document.getElementById(`numofdice`).value;
  const diceresult = document.getElementById(`diceresult`);
  const diceimages = document.getElementById(`diceimages`);

  const values = [];
  const images = [];

  for (let i = 0; i < numOfdice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;

    values.push(value);
    images.push(
      `<img src="dice_images/${value}.png" alt="dice ${value}" width="150" height="150">`
    );
  }

  diceresult.textContent = `You rolled: ${values.join(`, `)}`;
  diceimages.innerHTML = images.join(` `);
}
