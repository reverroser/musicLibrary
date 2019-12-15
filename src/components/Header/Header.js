import '../SearchInput/SearchInput';
import './Header.scss';

class Header extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="header">
                I am a header
                <search-input />
            </div>
        `;
    }
}

window.customElements.define('app-header', Header);
