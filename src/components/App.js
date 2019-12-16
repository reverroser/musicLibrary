import './FilterBar/FilterBar';
import './Header/Header';

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
            </div>
        `;
    }
}

window.customElements.define('app-shell', App);
