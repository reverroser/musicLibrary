import './Header/Header';

class App extends HTMLElement {
    constructor() {
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
