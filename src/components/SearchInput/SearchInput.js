import { fetchSearch } from '../../utils/musicApi';

import './SearchInput.scss';

class SearchInput extends HTMLElement {
    constructor() {
        super();
        this.render();
        // Everytime the user types, onInput is called
        $('#searchInput')[0].addEventListener('input', this.onInput);
    }

    onInput(event) {
        const term = event.target.value;
        // Save to localStorage the value of the search
        localStorage.setItem('term', term);
        // Fetch the search by term
        fetchSearch({
            term,
        });
    }

    render() {
        this.innerHTML = `
            <input type="text" id="searchInput" class="search-input" placeholder="Search" />
        `;
    }
}

window.customElements.define('search-input', SearchInput);