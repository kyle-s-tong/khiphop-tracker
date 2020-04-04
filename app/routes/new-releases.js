import Route from '@ember/routing/route';
import Moment from 'moment';

export default class NewReleasesRoute extends Route {
  beforeModel() {
    if (typeof localStorage.getItem('khiphop-tracker:artistsBeingTracked') === 'undefined') {
      this.transitionTo('home');
    }
  }

  async model() {
    const artists = await this.store.findAll('artist');

    const artistsNewAlbums = await Promise.all(artists.map(async (artist) => {
      const albums = await artist.albums;

      const newReleases = albums.filter(album => {
        const now = new Moment();
        return album.release_date > now.subtract(7, 'days').format('YYYY-MM-DD');
      })

      return {
        artist,
        albums: newReleases,
      }
    }));

    return artistsNewAlbums;
  }
}
