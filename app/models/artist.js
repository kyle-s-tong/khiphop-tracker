import Model, { attr, hasMany } from '@ember-data/model';

export default class ArtistModel extends Model {
  @attr name;
  @attr images;

  @hasMany('album') albums;

  @hasMany('album', { inverse: null}) latestReleases;
}
