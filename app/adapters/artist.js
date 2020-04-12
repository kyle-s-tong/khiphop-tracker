import ApplicationAdapter from './application';

export default class ArtistAdapter extends ApplicationAdapter {
  urlForCreateRecord() {
    return super.urlForCreateRecord(...arguments) + '/add';
  }
}
