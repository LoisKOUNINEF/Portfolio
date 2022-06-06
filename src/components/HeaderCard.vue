<template>
<div class="container">
    <button id="toggle" @click="darkThemeSwitch" aria-label="Toggle themes">

      <span> Switch Theme</span>
    </button>
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

</style>
