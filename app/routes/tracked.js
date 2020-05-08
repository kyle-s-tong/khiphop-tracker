import Route from '@ember/routing/route';

export default class TrackedRoute extends Route {
    beforeModel() {
      // Sometimes we get extra artists in the store from the new releases page, so unload
      // all of these before we do another request to the API.
      this.store.unloadAll('artist');
    }

    async model() {
      return this.store.findAll('artist', { reload: true });
    }
}
