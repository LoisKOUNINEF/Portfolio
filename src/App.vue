<template>
  <img alt="Vue logo" src="./assets/logo.png">
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
  body {
    margin: 0;
    background-color: #ccc;
  }
#app {
  font-family: Helvetica, Avenir, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ccc;
}
</style>
