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
  setArtistIds(ids) {
    localStorage.setItem('khiphop-tracker:artistsBeingTracked', ids);
  }
}
