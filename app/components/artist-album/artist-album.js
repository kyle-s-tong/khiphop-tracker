import Component from '@glimmer/component';
import { get } from '@ember/object';

export default class ArtistAlbumComponent extends Component {
  get albumArtistDifferentFromArtist() {
    return this.args.album.artists.indexOf(this.args.artist);
  }
}
