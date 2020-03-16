import Route from '@ember/routing/route';

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
        // TODO: make this comparison not hardcoded
        return album.release_date > '2020-03-01'
      })

      return {
        artist,
        albums: newReleases,
      }
    }));

    return artistsNewAlbums;
  }
}
