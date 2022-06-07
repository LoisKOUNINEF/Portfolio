<template>
  <div class="wrapper">
    <div class="main-container">
      <div class="first-container">
        <div class="profile">
          <img src="../assets/profile.jpg" alt="profile picture">
          <h1>Loïs Kouninef</h1>
          <h3><i>Développeur Web</i></h3>
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
          <h2>A Propos</h2>
          <p>
            <router-link to="/resume"><strong>Mon CV</strong></router-link>
          Lorem ipsum, dolor, sit amet consectetur adipisicing elit. Totam ratione dolore itaque ad id nobis nam esse alias a, error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, eum? Ipsam iure similique esse dignissimos rerum quia sed, debitis sint Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, quasi deserunt est id asperiores repudiandae Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Provident iusto quaerat voluptates tenetur pariatur? Consequuntur non, facilis voluptates. Sequi, nisi.</p>
        </div>
        <div class="button-container toggle">
          <button @click="darkThemeSwitch" aria-label="Toggle themes">
            <span> Switch Theme</span>
          </button>
        </div>
        <div class="technologies">
          <h2>Technologies</h2>
          <div class="logos">
            <img src="../assets/logos/git.png" alt="git" width="40%" height="40">
            <img src="../assets/logos/github.png" alt="github" class="blackimg">
            <img src="../assets/logos/heroku.png" alt="heroku">
            <img src="../assets/logos/html5.png" alt="html5">
            <img src="../assets/logos/css3.png" alt="css3">
            <img src="../assets/logos/javascript.png" alt="javascript">
            <img src="../assets/logos/react.png" alt="react" class="blackimg">
            <img src="../assets/logos/vue.png" alt="vue">
            <img src="../assets/logos/ruby.png" alt="ruby">
            <img src="../assets/logos/rails.png" alt="rails">
            <img src="../assets/logos/postgresql.png" alt="postgreSQL">
          </div>
        </div>
        <div class="button-container">
          <router-link to="/projects">
            <div class="button">
              Browse Portfolio
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import themeChanger from "../theme.js";
  export default {

    data() {
      return {
        themeChanger: null,
      };
    },

    methods: {
      darkThemeSwitch() {
        this.themeChanger._darkThemeSwitch();
      },
    },

    created() {
      this.themeChanger = new themeChanger();
    },

  }

</script>

<style scoped>

  *, *::before, *::after {
    box-sizing: border-box;
  }

  .wrapper {
    display: flex;
    justify-content: center;
    padding: 40px;
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
    background-color: var(--background-color);
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
    color: var(--text-color);
  }

  .second-container {
    width: 70%;
    background-color: var(--background-color);
    color: var(--text-color);
    padding: 3em;
    border-radius: 1.5em;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
  }

  .blackimg {
    background-color: white;
    border-radius: 6rem;
  }

  .button-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 2em;
  }

  .button {
    background-color: var(--text-color);
    color: var(--background-color);
    padding: 1em;
    font-weight: 600;
    margin-top: 2em;
    border-radius: 100px;
    transition: var(--transition);
    box-shadow: var(--box-shadow-dark);
  }

  button
  {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--background-color);
    color: var(--text-color);
    margin-left: 1em;
    font-weight: 600;
    border-radius: 6em;
    transition: var(--transition);
    box-shadow: var(--box-shadow-light);
    padding: .5em;
  }

  .button:hover {
    background-color: var(--background-color);
    color: var(--text-color);
    cursor: pointer;
  }

  button:hover {
    background-color: var(--text-color);
    color: var(--background-color);
    cursor: pointer;
  }

  @media only screen and (max-width: 950px) {
    .main-container {
      width: 95%;
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
      width: 90%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column-reverse;
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
      order: 1;
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
