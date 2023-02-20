<template>
  <div class="container" align="center" width="100%">
  <h1>Rules :</h1>
  <img src="../assets/rock_papers_scissors_lizard_spock.png">
  <h2 class="info">{{ $t("secret.computerchoice") }} : <span id="computer-choice"></span></h2>
  <h2 class="info">{{ $t("secret.userchoice") }} : <span id="user-choice"></span></h2>
  <h2 class="info">{{ $t("secret.result") }} : <span id="result"></span></h2>

  <div class="button-container">
    <button id="Rock">{{ $t("secret.choices.rock") }}</button>
    <button id="Paper">{{ $t("secret.choices.paper") }}</button>
    <button id="Scissors">{{ $t("secret.choices.scissors") }}</button>
    <button id="Lizard">{{ $t("secret.choices.lizard") }}</button>
    <button id="Spock">{{ $t("secret.choices.spock") }}</button>
  </div>
</div>
</template>

<script>
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.textContent = userChoice
  generateComputerChoice()
  getResult()
  resultDisplay.textContent = result
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1)
  switch (randomNumber) {
    case 0: computerChoice = 'Rock';
    break;
    case 1: computerChoice = 'Paper';
    break;
    case 2: computerChoice = 'Scissors';
    break;
    case 3: computerChoice = 'Lizard';
    break;
    case 4: computerChoice = 'Spock';
    break;
  }
  computerChoiceDisplay.textContent = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'Draw !'
  }
  if (computerChoice === 'Paper' && (userChoice === 'Scissors' || userChoice === 'Lizard')) {
    result = 'Win !'
  }
  if (computerChoice === 'Paper' && (userChoice === 'Rock' || userChoice === 'Spock')) {
    result = 'Lose !'
  }
  if (computerChoice === 'Scissors' && (userChoice === 'Paper' || userChoice === 'Lizard')) {
    result = 'Lose !'
  }
  if (computerChoice === 'Scissors' && (userChoice === 'Rock' || userChoice === 'Spock')) {
    result = 'Win !'
  }
  if (computerChoice === 'Rock' && (userChoice === 'Scissors' || userChoice === 'Lizard')) {
    result = 'Lose !'
  }
  if (computerChoice === 'Rock' && (userChoice === 'Paper' || userChoice === 'Spock')) {
    result = 'Win !'
  }
  if (computerChoice === 'Lizard' && (userChoice === 'Rock' || userChoice === 'Scissors')) {
    result = 'Win !'
  }
  if (computerChoice === 'Lizard' && (userChoice === 'Paper' || userChoice === 'Spock')) {
    result = 'Lose !'
  }
  if (computerChoice === 'Spock' && (userChoice === 'Lizard' || userChoice === 'Paper')) {
    result = 'Win !'
  }
  if (computerChoice === 'Spock' && (userChoice === 'Rock' || userChoice === 'Scissors')) {
    result = 'Lose !'
  }

  resultDisplay.textContent = result
}

export default {}

</script>

<style scoped>

img {
  margin-top: 2em;
  margin-bottom: 2em;
  border-radius: 40%;
  transition: var(--transition);
  box-shadow: var(--box-shadow-light) 1em;
}

h2 {
  color: var(--background-color);
}

.button-container {
  margin-top: 2em;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

button {
    height: 60%;
    background-color: var(--text-color);
    color: var(--background-color);
    border-radius: 6em;
    transition: var(--transition);
    box-shadow: var(--box-shadow-light);
}

button+button {
  margin-left: 2em;
}

button:hover {
  background-color: var(--background-color);
  color: var(--text-color);
}

</style>
