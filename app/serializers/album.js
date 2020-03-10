import ApplicationSerializer from './application';

export default class AlbumSerializer extends ApplicationSerializer {
  normalizeResponse(store, primaryModelClass, payload) {
    const transformedAlbums = payload.items.map(album => {
      return {
        id: album.id,
        type: album.type,
        attributes: album,
        relationships: {},
      }
    })


    const normalizedPayload = {
      data: transformedAlbums
    }



    return normalizedPayload;
  }
}
