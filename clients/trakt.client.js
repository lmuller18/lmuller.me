import { traktApi } from 'helpers/api'

const TraktClient = {
  getWatching: () => traktApi('/users/comanderguy/watching?extended=full'),
  getTopShows: () => traktApi('/users/comanderguy/ratings/shows/10'),
  getTopMovies: () => traktApi('/users/comanderguy/ratings/movies/10'),
}

export default TraktClient
