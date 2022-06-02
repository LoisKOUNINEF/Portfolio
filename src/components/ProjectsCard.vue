<template>
  <div class="wrapper">
    <div class="main-container">
      <div class="project-card" v-for="(items, index) in projectData.ProjectsArray" v-bind:key="items">
        <h2> {{ projectData.ProjectsArray[index].Title }} </h2>
        <img :src="projectData.ProjectsArray[index].Image" alt="">
        <p>{{ projectData.ProjectsArray[index].About }}</p>
        <div class="links">
          <a :href="projectData.ProjectsArray[index].GHLink" target="_blank"><img src="" alt="GitHub"></a>
          <a :href="projectData.ProjectsArray[index].LiveLink" target="_blank"><img src="" alt="Live"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import jsonData from "/projects.json"
  export default {
    data() {
      return {
        projectData: jsonData
      }
    }
  }
</script>

<style scoped>

  .wrapper {
    display: flex;
    justify-content: center;
  }

  a {
    text-decoration: none;
  }

  .main-container {
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    justify-content: center;
    align-items: center;
  }

  .project-card {
    flex-wrap: 0 0 40%;
    background-color: ;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .project-card img {
    height: ;
  }

  .links {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .links img {
    height: ;
    margin: ;
  }

</style>
