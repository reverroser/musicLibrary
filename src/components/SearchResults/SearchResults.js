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
            const searchResultsContainer = $('#searchResultsContainer')[0];
            let resultEl = document.createElement('li');
            resultEl.innerHTML = result.artistId;
            console.log(result.artistId);

            searchResultsContainer.appendChild(resultEl);
        });

    }

    render() {
        const searchTerm = localStorage.getItem('term');
        this.innerHTML = `
            <div>
                RESULTS FOR: ${searchTerm}
            </div>
            <div id="searchResultsContainer" class="results-container">
            </div>
        `;
    }
}

window.customElements.define('search-results', SearchResults);