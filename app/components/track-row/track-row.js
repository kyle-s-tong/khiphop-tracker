import Component from '@ember/component';

export default Component.extend({
  get tableValues() {
    if (this.args.isHeaderRow) {
      return [
        'Track Number',
        'Title',
        'Artists',
      ];
    } else {
      return [
        this.args.track.track_number,
        this.args.track.name,
        this.concatenatedArtists,
      ]
    }
  },

  get concatenatedArtists() {
    const artists = this.args.track.artists;
    console.log(this.args.track)

    let artistNames = '';

    artists.forEach(artist => {
      if (artistNames.length > 0) {
        artistNames += `, ${artist.name}`
      } else {
        artistNames = artist.name;
      }
    })

    return artistNames;
  }
});
