import './AlbumCard.scss';

class AlbumCard extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        const album = JSON.parse(this.getAttribute('album'));
        this.innerHTML = `
            <div class="album-card">
                ${album.artistName}
            </div>
        `;
    }
}
window.customElements.define('album-card', AlbumCard);