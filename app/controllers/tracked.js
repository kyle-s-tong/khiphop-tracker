import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object";

export default class TrackedController extends Controller {
  @tracked searchResults;
  @tracked searchValue = null;

  @action
  updateSearchResults(results) {
    this.searchResults = results;
  }

  @action
  clearSearch() {
    this.searchResults = null;
    this.searchValue = null;
  }

  @action
  async addArtist(artist) {
    // This seems weird but this is the only way that I can seem to populate the related
    // objects on the new artist. Create the record and then get the extra details from the server.
    const newArtist = this.store.createRecord('artist', artist);
    newArtist.save();

    this.clearSearch();
  }
}
