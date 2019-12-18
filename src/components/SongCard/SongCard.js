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
            <div class="song-card">
                ${song.artistName}
            </div>
        `;
    }
}
window.customElements.define('song-card', SongCard);