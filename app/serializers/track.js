import ApplicationSerializer from './application';

export default class TrackSerializer extends ApplicationSerializer {
  normalizeArrayResponse(store, primaryModelClass, payload) {
    const tracksPayload = super.normalizeArrayResponse(
      store,
      primaryModelClass,
      payload.items
    );

    return tracksPayload;
  }

  normalizeSingleResponse(store, primaryModelClass, payload) {
    const trackPayload = super.normalizeSingleResponse(
      store,
      primaryModelClass,
      payload
    );

    return trackPayload;
  }
}
