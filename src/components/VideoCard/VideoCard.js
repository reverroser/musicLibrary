import './VideoCard.scss';

class VideoCard extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        const musicArtist = JSON.parse(this.getAttribute('music-video'));
        this.innerHTML = `
            <div class="music-video-card">
                ${musicArtist.artistName}
                ${musicArtist.trackName}
                ${musicArtist.trackTimeMillis}
                ${musicArtist.collectionName}
                ${musicArtist.artworkUrl}
                ${musicArtist.genre}
                ${musicArtist.trackPrice}
                ${musicArtist.releaseDate}
                ${musicArtist.previewUrl}
                ${musicArtist.trackViewUrl}
            </div>
        `;
    }
}
window.customElements.define('music-video-card', VideoCard);