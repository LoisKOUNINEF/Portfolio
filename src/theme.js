export default class themeChanger {
    /**
     // * @constructor
     */
    constructor() {}
    _addDarkTheme() {
        const darkThemeLinkEl = document.createElement('link')
        darkThemeLinkEl.setAttribute('rel', 'stylesheet')
        darkThemeLinkEl.setAttribute('href', './css/dark.css')
        darkThemeLinkEl.setAttribute('id', 'dark-theme-style')
        const docHead = document.querySelector('head')
        docHead.append(darkThemeLinkEl)
    }
    _removeDarkTheme() {
        const darkThemeLinkEl = document.querySelector('#dark-theme-style')
        const parentNode = darkThemeLinkEl.parentNode
        parentNode.removeChild(darkThemeLinkEl)
    }
    _darkThemeSwitch() {
        const darkThemeLinkEl = document.querySelector('#dark-theme-style')
        if (!darkThemeLinkEl) {
            this._addDarkTheme()
        } else {
            this._removeDarkTheme()
        }
    }
}

// let localTheme = localStorage.getItem('theme');
//     //   document.documentElement.setAttribute('data-theme', localTheme);

// this.theme = this.theme == 'darkMode' ? '' : 'darkMode';
//     //   document.documentElement.setAttribute('data-theme', this.theme);
//     //   localStorage.setItem('theme', this.theme);
