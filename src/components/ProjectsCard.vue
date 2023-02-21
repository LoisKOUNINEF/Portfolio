<template>
  <div class="wrapper">
    <div class="main-container" id="project">
      <div class="project-card reveal active" v-for="(items, index) in projectData" v-bind:key="items">
        <div class="about">
          <h2> {{ projectData[index].Title }} </h2>
          <img :src="projectData[index].Image" :alt="projectData[index].Title" :title="projectData[index].Title">
        </div>
        <p>
          {{ 
          this.$i18n.locale === "fr" ? 
          projectData[index].About.fr : 
          projectData[index].About.en 
          }}
        </p>
        <div class="links">
          <a :href="projectData[index].GHLink" target="_blank"><img src="../assets/logos/github.png" :alt='$t("imagesAlt.githublink")'></a>
          <a :href="projectData[index].LiveLink" target="_blank"><img src="../assets/logos/www.png" :alt='$t("imagesAlt.livelink")'></a>
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
  const orderedJson = jsonData.ProjectsArray.reverse()
  export default {
    data() {
      const locale = this.$i18n.locale;
      console.log(locale)
      return {
        projectData: orderedJson,
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
    width: 100%;
    justify-content: space-evenly;
    margin-top: 7em;
    margin-bottom: 1em;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-name: slideInLeftBase;
  }

  .project-card {
    width: 45%;
    margin: 1em;
    padding: 1em;
    flex-wrap: 0 0 40%;
    background-color: var(--background-color);
    color: var(--text-color);
    border-radius: 1em;
    box-shadow: var(--box-shadow-light);
    transition: 1s all ease;
  }

  .project-card:hover {
   background-color: var(--text-color);
   color: var(--background-color);
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

  .links img:hover {
    cursor: pointer;
  }

  .links img {
    height: 3em;
    margin-top: 1em;
    background-color: white;
    border-radius: 50%;
    border: 1px solid black;
  }

  .reveal{
    position: relative;
    transform: translateY(100px);
    opacity: 0;
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
      width: 100%;
    }

    .project-card:hover {
      width: 100%;
    }
  }

</style>
