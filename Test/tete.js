class Media {
    constructor(info) {
        this.publishDate = info.publishDate;
        this.name = info.name;
        this.artist = songData.artist;
    }
}




const mySong = new Song ({
    artist: 'Queen',
    name: 'Bohemian Rhapsody',
    publishDate: 1975,
});
console.log(mySong);