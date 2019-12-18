import '../ArtistCard/ArtistCard';
import '../AlbumCard/AlbumCard';
import '../SongCard/SongCard';
import './SearchResults.scss';
import '../VideoCard/VideoCard';

class SearchResults extends HTMLElement {
    constructor() {
        super();
        this.render();
        $(document).on('searchResults', this.updateResults.bind(this));
    }

    updateResults(event, results) {
        this.render();
        const searchResultsContainer = $('#searchResultsContainer')[0];
        const entityMap = {
            song: (song) => `<song-card song='${song}'></song-card>`,
            album: (album) => `<album-card album='${album}'></album-card-card>`,
            musicArtist: (musicArtist) => `<music-artist-card music-artist='${musicArtist}'></music-artist-card>`,
            musicVideo: (musicVideo) => `<music-video-card music-video='${musicVideo}'></music-video-card>`,


        };
        results.forEach(result => {
            const resultEl = document.createElement('div');
            /**
             * We need to convert the object result to a String,
             * because html attributes must be in a string format.
             */
            const formattedResult = JSON.stringify(result);
            resultEl.innerHTML = entityMap[result.kind](formattedResult); // `<song-card song='${formattedResult}'></song-card>`
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