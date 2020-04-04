import Route from '@ember/routing/route';

export default class NewReleasesDetailsRoute extends Route {
  model(params) {
    return this.store.findRecord('album', params.id);
  }
}
