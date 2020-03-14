import ApplicationSerializer from './application';

const injectAlbumRelationships = (artistPayload) => {
  const payload = { ...artistPayload };

  payload.relationships.albums = {
    links: {
      related: `https://api.spotify.com/v1/artists/${payload.id}/albums`
    }
  }

  return payload;
}

export default class ArtistSerializer extends ApplicationSerializer {
  normalizeArrayResponse(store, primaryModelClass, payload) {
    const artistsPayload = super.normalizeArrayResponse(
      store,
      primaryModelClass,
      payload.artists
    );

    artistsPayload.data.forEach((artist, index) => {
      artistsPayload.data[index] = injectAlbumRelationships(artist);
    })

    return artistsPayload;
  }

  normalizeSingleResponse(store, primaryModelClass, payload) {
    const artistPayload = super.normalizeSingleResponse(
      store,
      primaryModelClass,
      payload
    );

    artistPayload.data = injectAlbumRelationships(artistPayload.data);

    return artistPayload;
  }
}
