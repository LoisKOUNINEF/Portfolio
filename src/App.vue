<template>

  <NavBar v-if="!$route.meta.hideNavbar" />

  <router-view/>

</template>

<script>
import NavBar from '@/components/NavBar.vue'
  export default {
    components: {NavBar}
};
</script>

<style>

  :root {
    --background-color: white;
    --text-color: black;
    --transition: 1s all ease;
    --box-shadow-dark: rgba(0, 0, 0, 0.24);
    --box-shadow-light: rgba(255, 255, 255, 0.5);
    --box-shadow-small: 0px 3px 8px;
    --box-shadow-large: .5em .5em 2em 1em;
    background-color: var(--text-color);
    transition: var(--transition);
  }

  body {
    margin: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    cursor: default;
  }

  @keyframes slideInTop {
    0% {
      transform: translateY(-100%);
    }
    70% {
      transform: translateY(10%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes slideInBot {
    0% {
      transform: translateY(100%);
    }
    70% {
      transform: translateY(-10%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes slideInLeft {
    0% {
      transform: translateX(-100%);
    }
    70% {
      transform: translateX(10%);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    0% {
      transform: translateX(100%);
    }
    70% {
      transform: translateX(-10%);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes slideInBotBase {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes slideInLeftBase {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }

</style>
