<template>
  <div class="wrapper">
    <div class="main-container" id="project">
      <div class="project-card reveal active" v-for="(items, index) in projectData.ProjectsArray" v-bind:key="items">
        <div class="about">
          <h2> {{ projectData.ProjectsArray[index].Title }} </h2>
          <img :src="projectData.ProjectsArray[index].Image" :alt="projectData.ProjectsArray[index].Title">
        </div>
        <p>{{ projectData.ProjectsArray[index].About }}</p>
        <div class="links">
          <a :href="projectData.ProjectsArray[index].GHLink" target="_blank"><img src="../assets/logos/github.png" alt="GitHub"></a>
          <a :href="projectData.ProjectsArray[index].LiveLink" target="_blank"><img src="../assets/logos/www.png" alt="Live"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

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

  *, *::before, *::after {
    box-sizing: border-box;
  }

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
    width: 90%;
    justify-content: center;
    margin-bottom: 1em;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-name: fadeInBase;
  }

  .project-card {
    width: 40%;
    margin: 1em;
    padding: 1em;
    flex-wrap: 0 0 40%;
    background: linear-gradient(to bottom right, #5B82DE, #849FDE);
    border-radius: 1em;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .about img {
    height: 10rem;
  }

  .links {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }

  .links img {
    height: 3em;
    margin-top: 1em;
  }

  .reveal{
    position: relative;
    transform: translateY(150px);
    opacity: 0;
    transition: 1s all ease;
  }

  .reveal.active{
    transform: translateY(0);
    opacity: 1;
  }

  @media only screen and (max-width: 900px) {
    .main-container {
      width: 100%;
    }

    .project-card {
      width: 90%;
    }

  }

</style>
