import './SongCard.scss';

class SongCard extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    getSongDuration(millis) {
        const minutes = Math.floor(millis / 60000);
        const seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
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
                        <small class="text-muted">${this.getSongDuration(song.trackTimeMillis)}</small>
                    </p>
                </div>
            </div>
        `;
    }
}
window.customElements.define('song-card', SongCard);