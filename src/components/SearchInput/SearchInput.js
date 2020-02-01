import './SearchInput.scss';

class SearchInput extends HTMLElement {
    constructor() {
        super();
        this.render();
        $('#entitySelector')[0].value = localStorage.getItem('entity');
        $('#entitySelector')[0].addEventListener('change', (event) => this.updateSearch(event, 'entity'));
        $('#searchInput')[0].addEventListener('input', (event) => this.updateSearch(event, 'term'));
        $('#searchButton')[0].addEventListener('click', this.fetchSearch);
    }

    updateSearch(event, type) {
        // Save by type in localStorage
        localStorage.setItem(type, event.target.value);
        // Fetch the search
        this.fetchSearch();
    }

    /**
     * This function does a GET request to the search endpoint
     * https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1
     */
    fetchSearch() {
        const data = {
            term: localStorage.getItem('term'),
            entity: localStorage.getItem('entity'),
            limit: 30, // We could increment that to paginate the results
        };

        $.ajax({
            url: 'https://itunes.apple.com/search',
            type: 'GET',
            data,
            dataType: 'json',
            success: ({ results }) => {
                // On success emits the results using a custom event and save the results on localStorage
                $(document).trigger('searchResults', [results]);
                localStorage.setItem('results', JSON.stringify(results));
            },
            error: (error) => {
                // On error emits the error using a custom event
                $(document).trigger('searchResultsError', [error]);
            }
        });
    }

    render() {
        this.innerHTML = `
            <div class="search-input input-group">
                <div class="input-group-prepend">
                    <select class="form-control" id="entitySelector">
                        <option selected disabled>Entity</option>
                        <option value="song">Song</option>
                        <option value="musicArtist">Music artist</option>
                        <option value="album">Album</option>
                        <option value="musicVideo">Music Video</option>
                    </select>
                </div>
                <input type="text" id="searchInput" class="form-control" placeholder="Artists, songs...">
                <div class="input-group-append">
                    <button class="btn btn-primary" type="button" id="searchButton">Search</button>
                </div>
            </div>
        `;
    }
}

window.customElements.define('search-input', SearchInput);