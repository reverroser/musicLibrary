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
        // Save to localStorage the value of the search
        localStorage.setItem('term', event.target.value);
        // Fetch the search
        fetchSearch();
    }

    render() {
        this.innerHTML = `
            <div class="search-input input-group">
                <input type="text" id="searchInput" class="form-control" placeholder="Artists, songs...">
                <div class="input-group-append">
                    <button class="btn btn-primary" type="button" id="search-button">Search</button>
                </div>
            </div>
        `;
    }
}

window.customElements.define('search-input', SearchInput);