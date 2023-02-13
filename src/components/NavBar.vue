<template>
  <div class="container" :class="{ 'navbar--hidden': !showNavbar }">
    <div class="button-container links">
      <router-link to ="/projects">
        <div class="button">
          {{ $t("navbar.projects") }}
        </div>
      </router-link>
      <router-link to="/resume">
        <div class="button">
          {{ $t("navbar.resume") }}
        </div>
      </router-link>
      <router-link to="/">
        <div class="button">
          {{ $t("navbar.about") }}
        </div>
      </router-link>
    </div>
    <div class="button-container toggle">
      <LocaleSwitcher />
      <ThemeSwitcher />
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
    data() {
      return {
        showNavbar: true,
        lastScrollPosition: 0,
      };
    },

    methods: {
      onScroll () {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
        if (currentScrollPosition < 0) {
          return
        }
        if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
          return
        }
        this.showNavbar = currentScrollPosition < this.lastScrollPosition
        this.lastScrollPosition = currentScrollPosition
      }
    },

    mounted () {
      window.addEventListener('scroll', this.onScroll)
    },
    beforeUnmount () {
      window.removeEventListener('scroll', this.onScroll)
    }

  }
</script>

<style scoped>

  *, *::before, *::after {
    box-sizing: border-box;
  }

  .container {
    width: 100%;
    position: fixed;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2em;
    padding-bottom: 1em;
    background-color: var(--text-color);
    color: var(--background-color);
    transform: translate3d(0,0,0);
    transition: 1s all ease;
  }

  .button-container {
    display: flex;
  }

  button, .button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--background-color);
    color: var(--text-color);
    padding: .75em;
    margin-left: 1em;
    font-weight: 600;
    border-radius: 6em;
    transition: var(--transition);
    box-shadow: var(--box-shadow-light);
  }

  button {
    height: 60%;
    background-color: var(--text-color);
    color: var(--background-color);
  }

  .toggle {
    flex-wrap: wrap;
    justify-content: flex-end;
    margin-top: .5;
    align-items: center;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-name: slideInRight;
  }

  .links {
    margin-top: 1em;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-name: slideInLeft;
  }

  .button:hover {
    background-color: var(--text-color);
    color: var(--background-color);
    cursor: pointer;
  }

  button:hover {
    background-color: var(--background-color);
    color: var(--text-color);
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  .container.navbar--hidden {
  opacity: O;
  transform: translate3d(0, -100%, 0);
  transition: 1s all ease;
  }

  @media only screen and (max-width: 900px) {
    .toggle {
      flex-wrap: wrap-reverse;
    }
  }

</style>
