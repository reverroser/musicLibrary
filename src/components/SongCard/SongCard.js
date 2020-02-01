import getTrackDuration from '../../utils/getTrackDuration';

class SongCard extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        const song = JSON.parse(this.getAttribute('song'));
        this.innerHTML = `
            <div class="card">
                <img src="${song.artworkUrl100}" class="card-img-top" alt="${song.artistName}">
                <div class="card-body">
                    <h5 class="card-title">${song.trackName}</h5>
                    <p class="card-text">${song.artistName} - ${song.collectionName}</p>
                    <p class="card-text">
                        <small class="text-muted">${getTrackDuration(song.trackTimeMillis)}</small>
                    </p>
                </div>
            </div>
        `;
    }
}
window.customElements.define('song-card', SongCard);