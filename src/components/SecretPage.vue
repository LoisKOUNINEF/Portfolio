<template>
  <div class="container">
    <img src="../assets/rules.png">
    <div class="info">
      
      <h2>{{ $t("secret.computerchoice") }} : <span id="computer-choice"></span></h2>
      <h2>{{ $t("secret.userchoice") }} : <span id="user-choice"></span></h2>
      <h2>&nbsp;<span id="result"></span></h2>
    </div>

    <div class="button-container">
      <button v-on:click="userChoice($event)" value="👊">👊 {{ $t("secret.choices.rock") }} 👊</button>
      <button v-on:click="userChoice($event)" value="✋">✋ {{ $t("secret.choices.paper") }} ✋</button>
      <button v-on:click="userChoice($event)" value="✌️">✌️ {{ $t("secret.choices.scissors") }} ✌️</button>
      <button v-on:click="userChoice($event)" value="🤏">🤏 {{ $t("secret.choices.lizard") }} 🤏</button>
      <button v-on:click="userChoice($event)" value="🖖">🖖 {{ $t("secret.choices.spock") }} 🖖</button>
    </div>
  </div>
</template>

<script>

let userChoice;
let computerChoice;
let result;

export default {
  methods: {
    userChoice(e) {
      const userChoiceDisplay = document.getElementById('user-choice')
      userChoice = e.target.value;
      userChoiceDisplay.textContent = userChoice;
      this.generateComputerChoice();
      this.getResult();
      return userChoice = ''
    },

    randomRange(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    },

    generateComputerChoice() {
      const computerChoiceDisplay = document.getElementById('computer-choice')
      const randomNumber = this.randomRange(1, 5);

      switch (randomNumber) {
        case 1: computerChoice = '👊';
        break;
        case 2: computerChoice = '✋';
        break;
        case 3: computerChoice = '✌️';
        break;
        case 4: computerChoice = '🤏';
        break;
        case 5: computerChoice = '🖖';
        break;
      }
      computerChoiceDisplay.textContent = computerChoice;
    },

    getResult() {
      const resultDisplay = document.getElementById('result')

      if (computerChoice === userChoice) {
        result = '👉👈'
      }
      if (computerChoice === '✋' && (userChoice === '✌️' || userChoice === '🤏')) {
        result = '👍'
      }
      if (computerChoice === '✋' && (userChoice === '👊' || userChoice === '🖖')) {
        result =  '👎'
      }
      if (computerChoice === '✌️' && (userChoice === '✋' || userChoice === '🤏')) {
        result =  '👎'
      }
      if (computerChoice === '✌️' && (userChoice === '👊' || userChoice === '🖖')) {
        result = '👍'
      }
      if (computerChoice === '👊' && (userChoice === '✌️' || userChoice === '🤏')) {
        result =  '👎'
      }
      if (computerChoice === '👊' && (userChoice === '✋' || userChoice === '🖖')) {
        result = '👍'
      }
      if (computerChoice === '🤏' && (userChoice === '👊' || userChoice === '✌️')) {
        result = '👍'
      }
      if (computerChoice === '🤏' && (userChoice === '✋' || userChoice === '🖖')) {
        result =  '👎'
      }
      if (computerChoice === '🖖' && (userChoice === '🤏' || userChoice === '✋')) {
        result = '👍'
      }
      if (computerChoice === '🖖' && (userChoice === '👊' || userChoice === '✌️')) {
        result =  '👎'
      }

      resultDisplay.textContent = result;
    }
    
  }
}

</script>

<style scoped>

  *, *::before, *::after {
      box-sizing: border-box;
    }

    .container {    
      padding-top: 7em;
      padding-bottom: 2em;
    }

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

  #result {
    font-size: 2em;
  }

  @media only screen and (max-width: 900px) {

    .container{
      padding-bottom: 0;
      margin-bottom: 3em;
    }

    button {
      height: 3em;
      margin-bottom: 2em;
    }

    .button-container {
      justify-content: space-evenly;
    }

    button+button {
      margin-left: 0;
    }
  }

</style>
