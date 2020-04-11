import ApplicationAdapter from './application';

export default class ArtistAdapter extends ApplicationAdapter {
  urlForCreateRecord(modelName, snapshot) {
    return super.urlForCreateRecord(...arguments) + '/add';
  }
}
