import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class TrackModel extends Model {
  @attr name;

  @belongsTo('album') album;
  @hasMany('artist') artists;
}
