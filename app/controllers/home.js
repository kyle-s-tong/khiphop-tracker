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
  addArtist(artist) {
    this.store.createRecord('artist', artist);

    const storedArtists = localStorage.getItem('khiphop-tracker:artistsBeingTracked').split();
    storedArtists.push(artist.id);

    localStorage.setItem('khiphop-tracker:artistsBeingTracked', storedArtists);

    this.searchResults = null;
  }
}
