import Route from '@ember/routing/route';

export default class NewReleasesRoute extends Route {
  beforeModel() {
      // Sometimes we get extra albums in the store from the tracked artists page, so unload
      // all of these before we do another request to the API.
      this.store.unloadAll('album');
  }

  async model() {
    const artists = await this.store.findAll('artist');

    const artistsNewAlbums = await Promise.all(artists.map(async (artist) => {
      const latestReleases = await artist.latestReleases;
      return {
        artist,
        albums: latestReleases,
      }
    }));

    return artistsNewAlbums;
  }
}
