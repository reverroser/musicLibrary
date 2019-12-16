import '../SearchInput/SearchInput';
import './Header.scss';

class Header extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `
            <nav class="header navbar navbar-light">
                <span class="logo navbar-brand">Music Library</span>
                <search-input />
            </nav>
        `;
    }
}

window.customElements.define('app-header', Header);
