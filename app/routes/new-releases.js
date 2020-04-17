import Route from '@ember/routing/route';

export default class NewReleasesRoute extends Route {
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
