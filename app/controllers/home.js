import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object";

export default class HomeController extends Controller {
  @tracked searchResults;

  @action
  updateSearchResults(results) {
    this.searchResults = results;
  }

  @action
  clearSearch() {
    this.searchResults = null;
  }

  @action
  async addArtist(artist) {
    let storedArtists;
    if (localStorage.getItem('khiphop-tracker:artistsBeingTracked')) {
      storedArtists = localStorage.getItem('khiphop-tracker:artistsBeingTracked').split();
    } else {
      storedArtists = [];
    }

    storedArtists.push(artist.id);

    localStorage.setItem('khiphop-tracker:artistsBeingTracked', storedArtists);

    // This seems weird but this is the only way that I can seem to populate the related
    // objects on the new artist. Create the record and then get the extra details from the server.
    this.store.createRecord('artist', artist);
    this.store.findRecord('artist', artist.id);

    this.clearSearch();
  }
}
