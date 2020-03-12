import ApplicationAdapter from './application';

export default class ArtistAdapter extends ApplicationAdapter {
  findAll(store, type) {
    return this.query(store, type, {
      ids: localStorage.getItem('khiphop-tracker:artistsBeingTracked'),
    })
  }

  urlForQuery() {
    const url = this.buildURL('artist');

    return `${url}?`
  }
}
