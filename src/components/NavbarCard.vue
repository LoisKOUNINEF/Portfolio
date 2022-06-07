<template>
  <div class="container">
    <div class="button-container">
      <router-link to ="/projects">
        <div class="button project">
          Mes projets
        </div>
      </router-link>
      <router-link to="/resume">
        <div class="button resume">
          Mon CV
        </div>
      </router-link>
      <router-link to="/">
        <div class="button about">
          A propos
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

  *, *::before, *::after {
    box-sizing: border-box;
  }

  .button-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 4em;
    margin-bottom: 3em;
  }

  .button {
    background-color: var(--background-color);
    color: var(--text-color);
    padding: 1em;
    font-weight: 600;
    margin-top: 1em;
    border-radius: 100px;
    transition: var(--transition);
  }

  .button:hover {
    opacity: .75;
    cursor: pointer;
  }

  .project {
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-name: slideInLeft;
  }

  .resume {
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-name: slideInTop;
  }

  .about {
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-name: slideInRight;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

</style>
