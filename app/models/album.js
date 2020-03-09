import Model, { attr, belongsTo } from '@ember-data/model';

export default class AlbumModel extends Model {
  @attr name;

  @belongsTo('artist') artist;
}
