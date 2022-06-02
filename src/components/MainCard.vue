<template>
  <div class="wrapper">
    <div class="main-container">
      <div class="first-container">
        <div class="profile">
          <img src="" alt="profile picture">
          <h1>Loïs Kouninef</h1>
          <h4>Web Developper</h4>
        </div>
        <div class="social-links">
          <div class="link">
            <a href="">
              <img src="../assets/logos/github.png" alt="github">
              <h3>GitHub</h3>
            </a>
          </div>
        </div>
        <div class="social-links">
          <div class="link">
            <a href="">
              <img src="../assets/logos/linkedin.png" alt="linkedin">
              <h3>LinkedIn</h3>
            </a>
          </div>
        </div>
        <div class="social-links">
          <div class="link">
            <a href="">
              <img src="../assets/logos/medium.png" alt="">
              <h3>Medium? Email?</h3>
            </a>
          </div>
        </div>
      </div>
      <div class="second-container">
        <div class="about-me">
          <h2>A Propos</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, eum? Ipsam iure similique esse dignissimos rerum quia sed, debitis sint Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, quasi deserunt est id asperiores repudiandae Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Provident iusto quaerat voluptates tenetur pariatur? Consequuntur non, facilis voluptates. Sequi, nisi.</p>
        </div>
        <div class="technologies">
          <h2>Technologies</h2>
          <div class="logos">
            <img src="../assets/logos/git.png" alt="git" width="40%" height="40">
            <img src="../assets/logos/github.png" alt="github">
            <img src="../assets/logos/heroku.png" alt="heroku">
            <img src="../assets/logos/html5.png" alt="html5">
            <img src="../assets/logos/css3.png" alt="css3">
            <img src="../assets/logos/javascript.png" alt="javascript">
            <img src="../assets/logos/react.png" alt="react">
            <img src="../assets/logos/vue.png" alt="vue">
            <img src="../assets/logos/ruby.png" alt="ruby">
            <img src="../assets/logos/rails.png" alt="rails">
            <img src="../assets/logos/postgresql.png" alt="postgreSQL">
          </div>
        </div>
        <div class="button-container">
          <div class="project-button">
            <a href="#project">Mes projets</a>
          </div>
          <div class="project-button">
            <a href="">Mon CV</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

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
    justify-content: center;
    width: 60%;
    margin-bottom: 1em;
    margin-top: 1em;
  }

  .first-container {
    background-color: #0A47D3;
    color: #BBCDF5;
    width: 30%;
    padding: 1em;
    border-radius: 1.5em;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .first-container a {
    color: #BBCDF5;
  }

  .second-container {
    background: linear-gradient(#5B82DE, #849FDE);
    width: 70%;
    padding: 3em;
    border-radius: 1.5em;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .profile img {
    height: ;
    border-radius: 50%;
  }

  .link img {
    height: 4em;
  }

  .logos img {
    height: 3em;
    width: 3em;
  }

  .button-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 2em;
  }

  .project-button {
    background-color: #fff;
    padding: 1em;
    font-weight: 600;
    margin-top: 1em;
    border-radius: 100px;
  }

  .project-button + .project-button {
    margin-left: 1em;
  }

  .project-button a {
    color: black;
  }

  @media only screen and (max-width: 950px) {
    .main-container {
      width: 95%;
      flex-wrap: wrap;
    }

    .first-container {
      width: 50%;
      margin-bottom: 1em;
    }

    .second-container {
      width: 70%;
    }

    .button-container {
      flex-wrap: wrap;
    }

    .project-button + .project-button {
      margin-left: 0;
      margin-top: 1em;
    }
  }

</style>
