<template>
  <div class="wrapper">
    <div class="main-container" id="project">
      <div class="project-card" v-for="(items, index) in projectData.ProjectsArray" v-bind:key="items">
        <h2> {{ projectData.ProjectsArray[index].Title }} </h2>
        <img :src="projectData.ProjectsArray[index].Image" :alt="projectData.ProjectsArray[index].Title">
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
    justify-content: center;
    align-items: center;
    margin-bottom: 1em;
  }

  .project-card {
    width: 40%;
    margin: 1em;
    padding: 1em;
    flex-wrap: 0 0 40%;
    background-color: ;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .project-card img {
    height: 10rem;
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

  @media only screen and (max-width: 950px) {
    .main-container {
      width: 95%;
      flex-wrap: wrap;
    }

    .project-card {
      width: 80%;
    }
}

</style>
