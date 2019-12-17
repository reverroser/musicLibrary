import './SearchResults.scss';

class SearchResults extends HTMLElement {
    constructor() {
        super();
        this.render();
        $(document).on('searchResults', this.updateResults.bind(this));
    }

    updateResults(event, results) {
        // TODO: render dynamically the results by entity
        this.render();
        results.forEach(result => {
            console.log(result);
        });

    }

    render() {
        const searchTerm = localStorage.getItem('term');
        this.innerHTML = `
            <div>
                RESULTS FOR ${searchTerm}
            </div>
        `;
    }
}

window.customElements.define('search-results', SearchResults);