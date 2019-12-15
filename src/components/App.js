import './Header/Header';

class App extends HTMLElement {
    constructor() {
        // always call super() first to run the parent class
        super();
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="app">
                <app-header />
            </div>
        `;
    }
}

window.customElements.define('app-shell', App);
