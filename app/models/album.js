import Model, { attr, belongsTo } from '@ember-data/model';

export default class AlbumModel extends Model {
  @attr name;
  @attr album_group;
  @attr release_date;

  @belongsTo('artist') artist;
}
