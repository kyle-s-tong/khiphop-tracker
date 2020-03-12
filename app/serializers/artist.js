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
  normalizeFindAllResponse(store, primaryModelClass, payload) {
    const transformedArtists = payload.artists.map(artist => {
      const normalizedArtist = {
        id: artist.id,
        type: artist.type,
        attributes: artist,
        relationships: {},
      }

      normalizedArtist.data = injectAlbumRelationships(normalizedArtist);

      return normalizedArtist;
    })


    const normalizedPayload = {
      data: transformedArtists
    }



    return normalizedPayload;
  }
}
