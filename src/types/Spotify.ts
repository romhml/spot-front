export module Spotify {
  export interface Artist {
      href: string;
      id: string;
      name: string;
      type: string;
      uri: string;
  }

  export interface Album {
    albumType: string;
    artists: Artist[];
    href: string;
    id: string;
    images: Image[];
    name: string;
    releaseDate: string;
    releaseDatePrecision: string;
    totalTracks: number;
    type: string;
    uri: string;
  }

  export interface Track {
      album: Album;
      artists: Artist[];
      discNumber: number;
      durationMs: number;
      explicit: boolean;
      href: string;
      id: string;
      isLocal: boolean;
      isPlayable: boolean;
      name: string;
      popularity: number;
      previewUrl: string;
      trackNumber: number;
      type: string;
      uri: string;
  }

  export interface Image {
      height: number;
      url: string;
      width: number;
  }

  export interface Device {
    id: string;
    isActive: boolean;
    isPrivateSession: boolean;
    isRestricted: boolean;
    name: string;
    type: string;
    volumePercent: number;
  }

  export interface Context {
      href: string;
      type: string;
      uri: string;
  }

  export interface PlayerStatus {
      device: Device;
      shuffleState: boolean;
      repeatState: string;
      timestamp: number;
      context: Context;
      progressMs: number;
      item: Track;
      currentlyPlayingType: string;
      isPlaying: boolean;
  }
}
