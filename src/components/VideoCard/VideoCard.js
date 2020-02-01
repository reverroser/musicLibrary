import getTrackDuration from '../../utils/getTrackDuration';

class VideoCard extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        const musicVideo = JSON.parse(this.getAttribute('music-video'));
        this.innerHTML = `
            <div class="card">
                <img src="${musicVideo.artworkUrl100}" class="card-img-top" alt="${musicVideo.artistName}">
                <div class="card-body">
                    <h5 class="card-title">${musicVideo.trackName}</h5>
                    <p class="card-text">${musicVideo.artistName} - ${musicVideo.primaryGenreName}</p>
                    <p class="card-text">
                        <small class="text-muted">${getTrackDuration(musicVideo.trackTimeMillis)}</small>
                    </p>
                </div>
            </div>
        `;
    }
}
window.customElements.define('music-video-card', VideoCard);