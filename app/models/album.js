import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class AlbumModel extends Model {
  @attr name;
  @attr album_group;
  @attr release_date;
  @attr images;
  @attr total_tracks;

  @hasMany('track') tracks;
  @belongsTo('artist') artist;

  get releaseType() {
    switch (this.album_group) {
      case 'single':
        return 'Single';
      case 'album':
        return 'Album';
      case 'appears_on':
        return 'Feature';
      default:
        return 'Unknown';
    }
  }
}
