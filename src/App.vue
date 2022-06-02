<template>
  <MainCard />
  <ProjectsCard />
</template>

<script>
  import MainCard from './components/MainCard.vue'
  import ProjectsCard from './components/ProjectsCard.vue'

  export default {
    name: 'App',
    components: {
      MainCard,
      ProjectsCard
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');
  body {
    margin: 0;
  }
  #app {
    font-family: "Roboto", Helvetica, Avenir, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #111213;
    background-color: #BBCDF5;
  }
</style>
