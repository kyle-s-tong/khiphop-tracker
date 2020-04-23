export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.createList('artist', 10).forEach(artist => {
    const albums = server.createList('album', 3, { artists: [artist], albumArtists: [artist] });
    albums.forEach(album => {
      server.createList('track', 10, { album })
    });

    artist.update({
      latestReleases: [albums.firstObject]
    });
  });
}
