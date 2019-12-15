import './SearchInput.scss';

class SearchInput extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `
            <input class="search-input" placeholder="Search" />
        `;
    }
}

window.customElements.define('search-input', SearchInput);