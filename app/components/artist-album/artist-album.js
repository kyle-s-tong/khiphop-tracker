import Component from '@glimmer/component';

export default class ArtistAlbumComponent extends Component {
  get albumArtistDifferentFromArtist() {
    return !this.args.album.albumArtists.filter(artist => artist.id === this.args.artist.id);
  }
}
