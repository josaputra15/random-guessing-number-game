let randomNum = Math.floor(Math.random() * 100) + 1;
let attempts = 0;


const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const attemptsText = document.getElementById("attempts");


submit.addEventListener("click", checkGuess);


function checkGuess() {
  const userValue = Number(guess.value);
  attempts++;


  if (userValue === randomNum) {
    hint.textContent = "Aight cool";
  } else if (userValue < randomNum) {
    hint.textContent = "Too low! Dumbass.";
  } else {
    hint.textContent = "Too high! Retard.";
  }

  attemptsText.textContent = "Attempts: " + attempts;
}