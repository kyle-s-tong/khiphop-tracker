import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { inject as service } from '@ember/service';

export default class ApplicationAdapter extends JSONAPIAdapter {
  @service token;

  headers = {
    'Authorization': `Bearer ${this.token.token}`,
  };
  host = 'https://api.spotify.com/v1';
}
