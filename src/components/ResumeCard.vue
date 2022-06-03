<template>
  <div class="container">
    <div class="button-container">
      <div class="project-button">
        <router-link to ="/">Retourner à l'accueil</router-link>
      </div>
      <div class="project-button">
        <router-link to ="/projects">Voir les projets</router-link>
      </div>
    </div>
    <div class="pdf-container">
      <iframe class="pdf" src="resume.pdf#navpanes=0&scrollbar=0&view=fitH" type="application/pdf" frameborder="0" scrolling="auto"></iframe>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

  .container {
    background: linear-gradient( #849FDE, #5B82DE);
  }

  .pdf-container {
    height: 50em;
  }

  .pdf {
    width: 90%;
    height: 100%;
  }

  .button-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 4em;
    margin-bottom: 3em;
  }

  .project-button {
    background: linear-gradient(30deg, #00319C, #0050FF);
    padding: 1em;
    font-weight: 600;
    margin-top: 1em;
    border-radius: 100px;
  }

  .project-button a {
    text-decoration: none;
    color: #fff;
  }

  @media only screen and (max-width: 900px) {

    .pdf-container {
      height: 30em;
    }

    .pdf {
      width: 100%;
    }
  }
</style>
