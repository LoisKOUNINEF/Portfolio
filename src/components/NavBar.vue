<template>
  <div class="container">
    <div class="button-container links">
      <router-link to ="/projects">
        <div class="button">
          {{ $t("navbar.projects") }}
        </div>
      </router-link>
      <router-link to="/resume">
        <div class="button">
          {{ $t("navbar.resume") }}
        </div>
      </router-link>
      <router-link to="/">
        <div class="button">
          {{ $t("navbar.about") }}
        </div>
      </router-link>
    </div>
    <div class="button-container toggle">
      <LocaleSwitcher />
      <button @click="darkThemeSwitch" aria-label="Toggle themes">
        <span>{{ $t("navbar.switchtheme") }}</span>
      </button>
    </div>
  </div>
</template>

<script>
  import themeChanger from "../theme.js";
  import LocaleSwitcher from './LocaleSwitcher'
  export default {
    components: {LocaleSwitcher},
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
    margin-bottom: 2em;
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
    padding: .75em;
    margin-left: 1em;
    font-weight: 600;
    border-radius: 6em;
    transition: var(--transition);
    box-shadow: var(--box-shadow-light);
  }

  button {
    height: 60%;
    background-color: var(--text-color);
    color: var(--background-color);
  }

  .toggle {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
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

  .button:hover {
    background-color: var(--text-color);
    color: var(--background-color);
    cursor: pointer;
  }

  button:hover {
    background-color: var(--background-color);
    color: var(--text-color);
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  @media only screen and (max-width: 900px) {
    .toggle {
      flex-wrap: wrap-reverse;
    }
  }

</style>
