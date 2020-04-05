import Component from '@glimmer/component';
import { get } from '@ember/object';

export default class ArtistAlbumComponent extends Component {
  get albumArtistDifferentFromArtist() {
    console.log(this.args.album)
    const albumArtistId = get(this.args.album.artist, 'id');
    return this.args.artist.id !== albumArtistId;
  }
}
