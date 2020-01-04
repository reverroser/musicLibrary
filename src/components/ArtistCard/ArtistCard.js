import './ArtistCard.scss';

class ArtistCard extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        const musicArtist = JSON.parse(this.getAttribute('music-artist'));
        this.innerHTML = `
            <div class="album-card">
                ${musicArtist.artistName}
                ${musicArtist.primaryGenreName}
                ${musicArtist.artistlinkUrl}
            </div>

        `;
    }
}
window.customElements.define('music-artist-card', ArtistCard);