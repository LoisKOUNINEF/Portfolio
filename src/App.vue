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
    --background-color: linear-gradient(#e8e8e8, #b7b7b7);
    --background-color-hover: linear-gradient(to top, #525252, #8c8c8c);
    --text-color: #000000;
    --text-color-hover: #e8e8e8;
    --transition: 1s all ease;
    --box-shadow-dark: rgba(0, 0, 0, 0.24);
    --box-shadow-light: rgba(255, 255, 255, 0.5);
    --box-shadow-small: 0px 3px 8px;
    --box-shadow-large: 0 0 2em 1em;
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
      opacity: .2;
    }
    70% {
      transform: translateY(10%);
      opacity: 1;
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes slideInBot {
    0% {
      transform: translateY(100%);
      opacity: .2;
    }
    70% {
      transform: translateY(-10%);
      opacity: 1;
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes slideInLeft {
    0% {
      transform: translateX(-100%);
      opacity: .5;
    }
    70% {
      transform: translateX(10%);
      opacity: 1;
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    70% {
      transform: translateX(-10%);
      opacity: .5;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideInBotBase {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideInLeftBase {
    0% {
      transform: translateX(-100%);
      opacity: .5;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

</style>
