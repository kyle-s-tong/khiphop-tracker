import Route from '@ember/routing/route';

export default class HomeRoute extends Route {
    model() {
        return this.store.query('artist', {
            ids: '7IWshUcKfJyDWrbiF2XT8J,0IznZPMUyaPGdqfP4oqBja'
        })
    }
}
