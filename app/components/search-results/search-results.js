import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class SearchResultsComponent extends Component {

  @action
  addToIds(id) {
    const artists = localStorage.getItem('khiphop-tracker:artistsBeingTracked').split();

    artists.push(id);
    this.args.setArtistIds(artists);
  }
}
