<template>
  <div class="container">
    <div class="button-container">
      <div class="button">
        <router-link to ="/projects">Mes projets</router-link>
      </div>
      <div class="button">
        <router-link to="/">A propos</router-link>
      </div>
      <div class="button">
        <router-link to="/resume">Mon CV</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

  @keyframes slideInTop {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  .button-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 4em;
    margin-bottom: 3em;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-name: slideInTop;
  }

  .button {
    background: linear-gradient(30deg, #00319C, #0050FF);
    padding: 1em;
    font-weight: 600;
    margin-top: 1em;
    border-radius: 100px;
  }

  .button a {
    text-decoration: none;
    color: #fff;
  }
</style>
