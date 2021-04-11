export const SPOTIFY = 'spotify'
export const TRAKT = 'trakt'
export const STEAM = 'steam'

export const PAST = 'past'
export const PRESENT = 'present'
export const FUTURE = 'future'

export const SHOW = 'show'
export const MOVIE = 'movie'
export const SONG = 'song'
export const BOARD_GAME = 'board game'
export const VIDEO_GAME = 'video game'

export const WATCHED = 'watched'
export const LISTENED = 'listened'
export const ROLLED = 'rolled'
export const CLICKED = 'clicked'

export const TMDB_BASE_URL = 'https://image.tmdb.org/t/p'

export const brandToVerb = (brand, tense) => {
  switch (brand) {
    case SPOTIFY:
      switch (tense) {
        case PAST:
          return 'listened to'
        case PRESENT:
          return 'listening to'
        default:
          return 'listening to'
      }
    case TRAKT:
      switch (tense) {
        case PAST:
          return 'watched'
        case PRESENT:
          return 'watching'
        default:
          return 'watching'
      }
    case STEAM:
      switch (tense) {
        case PAST:
          return 'played'
        case PRESENT:
          return 'gaming'
        default:
          return 'gaming'
      }
    default:
      switch (tense) {
        case PAST:
          return 'vibed to'
        case PRESENT:
          return 'vibing to'
        default:
          return 'vibing to'
      }
  }
}
