import Model, { attr, hasMany } from '@ember-data/model';
import { sort } from '@ember/object/computed';

export default class ArtistModel extends Model {
  @attr name;
  @attr images;

  @hasMany('album') albums;

  // using descending sort
  albumReleaseSort = ['release_date:desc'];
  @sort('albums', 'albumReleaseSort') sortedAlbums;

  get latestAlbum() {
    return this.sortedAlbums.firstObject;
  }
}
