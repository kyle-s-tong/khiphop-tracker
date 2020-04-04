import ApplicationSerializer from './application';

export default class AlbumSerializer extends ApplicationSerializer {
  normalizeArrayResponse(store, primaryModelClass, payload) {
    const albumsPayload = super.normalizeArrayResponse(
      store,
      primaryModelClass,
      payload.items
    );

    return albumsPayload;
  }

  normalizeSingleResponse(store, primaryModelClass, payload) {
    const albumPayload = super.normalizeSingleResponse(
      store,
      primaryModelClass,
      payload
    );

    return albumPayload;
  }
}
