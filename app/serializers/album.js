import ApplicationSerializer from './application';

const injectArtistRelationships = (albumPayload, artists = null) => {
  const payload = { ...albumPayload };

  payload.relationships.artists = [];

  artists.forEach(artist => {
    payload.relationships.artists.push({
      data: {
        id: artist.id,
        type: artist.type
      }
    })
  })

  return payload;
}

const injectTrackRelationships = (albumPayload) => {
  const payload = { ...albumPayload };

  payload.relationships.tracks = {
    links: {
      related: `https://api.spotify.com/v1/albums/${payload.id}/tracks`
    }
  }

  return payload;
}

export default class AlbumSerializer extends ApplicationSerializer {
  normalizeArrayResponse(store, primaryModelClass, payload) {
    const albumsPayload = super.normalizeArrayResponse(
      store,
      primaryModelClass,
      payload.items
    );

    albumsPayload.data.forEach((album, index) => {
      let artists;
      if (payload.artists) {
        artists = album.artists;
      }
      albumsPayload.data[index] = injectTrackRelationships(album);

      if (typeof artists !== 'undefined') {
        albumsPayload.data[index] = injectArtistRelationships(album, artists);
      }
    })

    return albumsPayload;
  }

  normalizeSingleResponse(store, primaryModelClass, payload) {
    let artists;
    if (payload.artists) {
      artists = payload.artists;
    }

    const albumPayload = super.normalizeSingleResponse(
      store,
      primaryModelClass,
      payload
    );

    albumPayload.data = injectTrackRelationships(albumPayload.data);

    if (typeof artists !== 'undefined') {
      albumPayload.data = injectArtistRelationships(albumPayload.data, artists);
    }

    return albumPayload;
  }
}
