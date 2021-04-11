import { MOVIE, SHOW } from '@helpers/media'
import { tmdbApi } from '@helpers/api'

const TMDBClient = {
  getShowImages: (id) => tmdbApi(`/tv/${id}/images`),
  getMovieImages: (id) => tmdbApi(`/movie/${id}/images`),
  getImages: (type, id) => {
    if (type === MOVIE) return tmdbApi(`/movie/${id}/images`)
    if (type === SHOW) return tmdbApi(`/tv/${id}/images`)
    console.error('invalid tmdb type')
  },
}

export default TMDBClient
