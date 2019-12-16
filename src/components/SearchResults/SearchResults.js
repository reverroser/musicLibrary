import './SearchResults.scss';

class SearchResults extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `
            <div>
                RESULTS FOR
            </div>
        `;
    }
}

window.customElements.define('search-results', SearchResults);