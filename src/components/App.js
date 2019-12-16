import './FilterBar/FilterBar';
import './Header/Header';
import './SearchResults/SearchResults';

class App extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="app">
                <app-header></app-header>
                <filter-bar></filter-bar>
                <search-results></search-results>
            </div>
        `;
    }
}

window.customElements.define('app-shell', App);
