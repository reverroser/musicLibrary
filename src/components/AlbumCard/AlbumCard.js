class AlbumCard extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    formatDate(date) {
        const newDate = new Date(date);
        const day = newDate.getDate();
        const monthIndex = newDate.getMonth();
        const year = newDate.getFullYear();
        return `${day}/${monthIndex + 1}/${year}`;
    }

    render() {
        const album = JSON.parse(this.getAttribute('album'));
        this.innerHTML = `
            <div class="card">
                <img src="${album.artworkUrl100}" class="card-img-top" alt="${album.artistName}">
                <div class="card-body">
                    <h5 class="card-title">${album.collectionName}</h5>
                    <p class="card-text">${album.artistName} - ${album.primaryGenreName}</p>
                    <p class="card-text">
                        <small class="text-muted">${this.formatDate(album.releaseDate)}</small>
                    </p>
                </div>
            </div>
        `;
    }
}
window.customElements.define('album-card', AlbumCard);