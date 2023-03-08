<template>
  <div class="wrapper">
    <div class="main-container">
      <div class="first-container">
        <div class="profile">
          <img src="../assets/profile.jpg" alt="profile picture">
          <h1>Loïs Kouninef</h1>
          <h3><i>{{ $t("maincard.profession") }}</i></h3>
        </div>
        <div class="social-links">
          <div class="link">
            <a href="https://github.com/LoisKOUNINEF" target="_blank">
              <img src="../assets/logos/github.png" alt="github" class="blackimg">
              <h3>GitHub</h3>
            </a>
          </div>
        </div>
        <div class="social-links">
          <div class="link">
            <a href="https://www.linkedin.com/in/lo%C3%AFs-kouninef-b1651122a/" target="_blank">
              <img src="../assets/logos/linkedin.png" alt="linkedin">
              <h3>LinkedIn</h3>
            </a>
          </div>
        </div>
        <div class="social-links">
          <div class="link">
            <a href="https://medium.com/@lkouninef" target="_blank">
              <img src="../assets/logos/medium.png" alt="medium" class="blackimg">
              <h3>Medium</h3>
            </a>
          </div>
        </div>
      </div>
      <div class="second-container">
        <div class="about-me">
          <h2>
            {{ $t("maincard.about") }} 
            <LocaleSwitcher />
          </h2>
          <p>
          {{ $t("maincard.body") }} 
          <br/>
          {{ $t("maincard.ctaresume") }} <router-link to="/resume"><strong>{{ $t("maincard.resume") }}, </strong></router-link> {{ $t("maincard.ctaprojects") }} 
          <router-link to="/projects"><strong>{{ $t("maincard.projects") }}</strong></router-link>.</p>
        </div>
        <div class="button-container">
          <router-link to="/projects">
            <div class="button">
              {{ $t("maincard.projectbutton") }}
            </div>
          </router-link>
          <div class="small-button">
          <a href=mailto:“lkouninef@gmail.com”>
            ✉️ {{ $t("maincard.contact") }} ✉️
          </a>
        </div>
        </div>
        <div class="technologies">
          <h2>Technologies</h2>
          <div class="logos">
            <img src="../assets/logos/html5.png" alt="html5" title="HTML5">
            <img src="../assets/logos/css3.png" alt="css3" title="CSS3">
            <img src="../assets/logos/javascript.png" alt="javascript" title="Javascript (ES6)">
            <img src="../assets/logos/postgresql.png" alt="PostgreSQL" title="PostgreSQL">
            <br/>  
            <img src="../assets/logos/nodejs.jpg" alt="nodejs" title="NodeJS" class="blackimg">
            <img src="../assets/logos/angular.png" alt="angular" title="Angular">
            <img src="../assets/logos/nestjs.png" alt="nestjs" title="NestJS">
            <img src="../assets/logos/rails.png" alt="rails" title="Rails">
            <br/>
            <img src="../assets/logos/git.png" alt="git" title="Git" width="40%" height="40">
            <img src="../assets/logos/github.png" alt="github" title="GitHub" class="blackimg">
            <img src="../assets/logos/heroku.png" alt="heroku" title="Heroku">
            <img src="../assets/logos/linux.png" alt="linux" title="Linux" class="blackimg">  
          </div>
        </div>
        <ThemeSwitcher />
      </div>
    </div>
  </div>
</template>

<script>
  import LocaleSwitcher from './LocaleSwitcher';
  import ThemeSwitcher from './ThemeSwitcher';
  export default {
    components: {
      LocaleSwitcher,
      ThemeSwitcher,
    },
  }

</script>

<style scoped>

  *, *::before, *::after {
    box-sizing: border-box;
  }

  .wrapper {
    overflow-y: hidden;
    display: flex;
    justify-content: center;
    padding: 40px;
  }

  .main-container {
    display: flex;
    justify-content: center;
    width: 60%;
    margin-bottom: 1em;
    margin-top: 1em;
  }

  .first-container {
    background: var(--background-color);
    color: var(--text-color);
    width: 30%;
    padding: 1em;
    border-radius: 1.5em;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-name: slideInTop;
    transition: var(--transition);
  }

  a {
    text-decoration: none;
    color: var(--text-color);
    transition: var(--transition);
  }

  .second-container {
    width: 70%;
    background: var(--background-color);
    color: var(--text-color);
    padding: 3em;
    border-radius: 1.5em;
    box-shadow: var(--box-shadow-dark) var(--box-shadow-small);
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-name: slideInBot;
    transition: var(--transition);
  }

  .profile img {
    margin-top: 1rem;
    height: 8rem;
    border-radius: 50%;
  }

  .link img {
    height: 4em;
  }

  .technologies, .about {
    margin-top: 2em;
  }

  .logos img {
    height: 3em;
    width: 3em;
    cursor: help;
  }

  .blackimg {
    background-color: white;
    border-radius: 6rem;
  }

  .button-container {
    display: block;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 2em;
  }

  .button {
    background: var(--background-color-hover);
    color: var(--text-color-hover);
    padding: 1em;
    font-weight: 600;
    margin-top: 2em;
    border-radius: 6em;
    transition: var(--transition);
    box-shadow: var(--box-shadow-dark) var(--box-shadow-small);
    border: 1px solid var(--text-color-hover);
    width: 100%;
  }

  .small-button {
    font-weight: 600;
    border-radius: 6em;
    transition: var(--transition);
    transition: var(--transition);
  }

  button {
    justify-content: center;
    align-items: center;
    background: var(--background-color);
    color: var(--text-color);
    margin-left: 1em;
    font-weight: 600;
    border-radius: 6em;
    transition: var(--transition);
    box-shadow: var(--box-shadow-light) var(--box-shadow-small);
    padding: .5em;
  }

  .button:hover {
    background: var(--background-color);
    color: var(--text-color);
    cursor: pointer;
    border: 1px solid var(--text-color);
  }

  button:hover {
    background: var(--background-color-hover);
    color: var(--text-color-hover);
    cursor: pointer;
  }

  @media only screen and (max-width: 950px) {
    .main-container {
      width: 100%;
      flex-wrap: wrap;
    }

    .first-container {
      width: 100%;
      margin-bottom: 1em;
      padding: .5em;
      height: 23.5em;
      animation-duration: 2s;
      animation-timing-function: ease-in-out;
      animation-delay: 0s;
      animation-iteration-count: 1;
      animation-name: slideInLeft;
    }

    .second-container {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1em;
      padding-bottom: 2em;
      animation-duration: 2s;
      animation-timing-function: ease-in-out;
      animation-delay: 0s;
      animation-iteration-count: 1;
      animation-name: slideInRight;
    }

    .button-container {
      margin-top: 1em;
    }

    .social-links {
      display: inline-block;
    }

    .social-links + .social-links {
      margin-left: 1.5em;
    }

    .profile img {
      margin-top: 1rem;
      height: 6rem;
      border-radius: 50%;
    }

    .link img {
      height: 2.5em;
    }

  }

</style>
