<template>
  <button @click="darkThemeSwitch" aria-label="Toggle themes">
    <span>{{ darkTheme ? '☀' : '☽' }}</span>
  </button>
</template>

<script>
	import themeChanger from '../theme.js';

	export default {
		data() {
			return {
				themeChanger: null,
				darkTheme: document.querySelector('#dark-theme-style'),
			};
		},

		methods: {
			darkThemeSwitch() {
				this.themeChanger._darkThemeSwitch();
				this.darkTheme = !this.darkTheme;
			}
		},

		created() {
			this.themeChanger = new themeChanger();
		}
	}
</script>

<style scoped>
	
	*, *::before, *::after {
    box-sizing: border-box;
  }

	button {
    background-color: var(--text-color)!important;
    color: var(--background-color)!important;
    font-weight: 600;
    border-radius: 6em;
    transition: var(--transition);
    box-shadow: var(--box-shadow-light);
    padding-left: 1em!important;
    padding-right: 1em!important;
  }

  button:hover {
    background-color: var(--background-color);
    color: var(--text-color);
    cursor: pointer;
  }

</style>