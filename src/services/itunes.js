const BASE = "https://itunes.apple.com";

async function request(url) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Could not reach the iTunes API. Try again.");
  }

  return res.json();
}

// Get a bigger album cover
export const bigArt = (url = "", size = 400) =>
  url.replace(/\d+x\d+bb/, `${size}x${size}bb`);

// Search albums
export async function searchAlbums(term) {
  const data = await request(
    `${BASE}/search?term=${encodeURIComponent(term)}&entity=album&limit=24`
  );

  return data.results;
}

// Get album tracks
export async function getAlbumTracks(collectionId) {
  const data = await request(
    `${BASE}/lookup?id=${collectionId}&entity=song`
  );

  const [album, ...tracks] = data.results;

  return {
    album,
    tracks: tracks.filter((t) => t.wrapperType === "track"),
  };
}

// Spotify search link
export const spotifySearchUrl = (name, artist) =>
  `https://open.spotify.com/search/${encodeURIComponent(`${name} ${artist}`)}`;

// YouTube search link
export const youtubeSearchUrl = (name, artist) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(`${name} ${artist} album`)}`;