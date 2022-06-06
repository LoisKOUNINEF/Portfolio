<template>
  <div class="container">
    <div class="button-container">
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
    justify-content: flex-end;
  }

  .button-container {
    margin-right: 1em;
    margin-top: 1em;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-name: slideInRight;
  }

  button {
    display: flex;
    align-items: center;
    background-color: var(--background-color);
    color: var(--text-color);
    padding: 1em;
    font-weight: 600;
    border-radius: 100px;
  }

  button:hover {
    opacity: .75;
    cursor: pointer;
  }


</style>
