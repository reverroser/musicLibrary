import '../AlbumCard/AlbumCard';
import '../SongCard/SongCard';
import './SearchResults.scss';
import '../VideoCard/VideoCard';

const entityMap = {
    song: (song) => `<song-card song='${song}'></song-card>`,
    album: (album) => `<album-card album='${album}'></album-card-card>`,
    'music-video': (musicVideo) => `<music-video-card music-video='${musicVideo}'></music-video-card>`,
};

class SearchResults extends HTMLElement {
    constructor() {
        super();
        this.render();
        $(document).on('searchResults', this.updateResults.bind(this));
    }

    updateResults(event, results) {
        this.render();
        const searchResultsContainer = $('#searchResultsContainer')[0];
        results.forEach(result => {
            const resultEl = document.createElement('div');
            resultEl.className = 'col-lg-3 col-md-4';
            /**
             * We need to convert the object result to a String,
             * because html attributes must be in a string format.
             */
            const formattedResult = JSON.stringify(result);
            const mapKey = result.kind || result.collectionType.toLowerCase();
            // Only render the result if the kind is supported
            if (entityMap[mapKey]) {
                resultEl.innerHTML = entityMap[mapKey](formattedResult);
                searchResultsContainer.appendChild(resultEl);
            }
        });

    }

    render() {
        this.innerHTML = `
            <div class="container-fluid search-container">
                <div class="row" id="searchResultsContainer">
                </div>
            </div>
        `;
    }
}

window.customElements.define('search-results', SearchResults);