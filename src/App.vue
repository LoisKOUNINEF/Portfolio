<template>
  <router-view/>
</template>

<style>

  body {
    margin: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #111213;
    background-color: #BBCDF5;
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

  @keyframes fadeInBase {
    0% {
      transform: scale(.5);
    }
    100% {
      transform: scale(1);
    }
  }

</style>
