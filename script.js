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
    hint.textContent = "Perfect!";
  } else if (userValue < randomNum) {
    hint.textContent = "Too low! Please Try Again!";
  } else {
    hint.textContent = "Too high! Please Try Again";
  }

  attemptsText.textContent = "Attempts: " + attempts;
}