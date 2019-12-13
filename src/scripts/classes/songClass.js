export default class Song {
    constructor(trackName, artistName, trackTimeMillis, collectionName) {
        this.trackName = trackName;
        this.artistName = artistName;
        this.duration = this.getDuration(trackTimeMillis);
        this.collectionName = collectionName;
    }

    getDuration(millis) {
        const minutes = Math.floor(millis / 60000);
        const seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
}