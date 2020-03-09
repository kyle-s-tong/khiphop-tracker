import Model, { attr, hasMany } from '@ember-data/model';

export default class ArtistModel extends Model {
  @attr name;
  @attr images;
  @attr href;

  @hasMany('album') albums;
}
