import Route from '@ember/routing/route';

export default class ArtistRoute extends Route {
    model(params) {
        return this.store.findRecord('artist', params.id);
      }
}
