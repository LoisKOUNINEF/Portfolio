<template>
  <div class="container">
    <div class="pdf-container">
      <iframe class="pdf" :src="$t('resumepdf')" type="application/pdf" frameborder="0" scrolling="auto"></iframe>
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

  .container {    
    overflow-y: hidden;
  }

  .pdf-container {
    margin-top: 7em;
    height: 50em;
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-name: slideInBotBase;
  }

  .pdf {
    width: 80%;
    height: 100%;
  }

  @media only screen and (max-width: 900px) {

    .pdf-container {
      height: 30em;
    }

    .pdf {
      width: 100%;
      height: 100%;
    }
  }
</style>
