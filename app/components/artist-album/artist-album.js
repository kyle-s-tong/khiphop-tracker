import Component from '@glimmer/component';

export default class ArtistAlbumComponent extends Component {
  get albumArtistDifferentFromArtist() {
    const filteredAlbumArtists = this.args.album.albumArtists.filter(artist => artist.id === this.args.artist.id)
    return filteredAlbumArtists.length === 0;
  }
}
