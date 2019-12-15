import { fetchSearch } from '../../utils/musicApi';

import './SearchInput.scss';

class SearchInput extends HTMLElement {
    constructor() {
        super();
        this.render();
        // Everytime the user types, .onInput is called
        $('#searchInput')[0].addEventListener('input', this.onInput);
    }

    onInput(event) {
        fetchSearch({
            term: event.target.value,
        });
    }

    render() {
        this.innerHTML = `
            <input type="text" id="searchInput" class="search-input" placeholder="Search" />
        `;
    }
}

window.customElements.define('search-input', SearchInput);