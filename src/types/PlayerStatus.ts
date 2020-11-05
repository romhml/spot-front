
export interface PlayerStatus {
  item: Track
}

interface Artist {
  id: String,
  name: String,
}

interface Album {
  id: String
  name: String
  artists: Array<String>
  images: Array<String>
}

interface Track {
  name: String
  artist: Array<Artist>
  album: Album
}
