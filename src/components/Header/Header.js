import './Header.scss';

class Header extends HTMLElement {
    constructor() {
        // always call super() first to run the parent class
        super();
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="header">
                I am a header
            </div>
        `;
    }
}

window.customElements.define('app-header', Header);
