import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = 'http://localhost:3000';

  // I have overwritten the ajaxOptions function on the JSONAPIAdapter because the
  // requests always must be application/json content-type. By default the adapter changes the
  // content type to application/vnd.api+json (JSON API standard), but the API server can't
  // handle that at the moment, so this makes sure that every request has the correct type.
  ajaxOptions(url, type, options = {}) {
    options.contentType = options.contentType || 'application/json';

    const hash = super.ajaxOptions(url, type, options);
    hash.headers.Accept = hash.headers.Accept || 'application/json';

    return hash;
  }
}
