<template>
  <div class="container">
    <div class="button-container links">
      <router-link to ="/projects">
        <div class="button">
          Mes projets
        </div>
      </router-link>
      <router-link to="/resume">
        <div class="button">
          Mon CV
        </div>
      </router-link>
      <router-link to="/">
        <div class="button">
          A propos
        </div>
      </router-link>
    </div>
    <div class="button-container toggle">
      <button id="toggle" @click="darkThemeSwitch" aria-label="Toggle themes">

        <span> Switch Theme</span>
      </button>
    </div>
  </div>
</template>

<script>
  import themeChanger from "../theme.js";
  export default {

    data() {
      return {
        themeChanger: null,
      };
    },

    methods: {
      darkThemeSwitch() {
        this.themeChanger._darkThemeSwitch();
      },
    },

    created() {
      this.themeChanger = new themeChanger();
    },

  }
</script>

<style scoped>

  *, *::before, *::after {
    box-sizing: border-box;
  }

  .container {
    display: flex;
    justify-content: space-between;
  }

  .button-container {
    display: flex;
    margin-top: 1em;
  }

  button, .button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--background-color);
    color: var(--text-color);
    height: 50%;
    padding: .75em;
    margin-left: 1em;
    font-weight: 600;
    border-radius: 100px;
    transition: var(--transition);
    box-shadow: var(--box-shadow-light);
  }

  button {
    width: 50%;
    padding-top: 2em;
    padding-bottom: 2em;
  }

  .toggle {
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-name: slideInRight;
  }

  .links {
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-name: slideInLeft;
  }

  .button:hover, button:hover {
    background-color: var(--text-color);
    color: var(--background-color);
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

</style>
