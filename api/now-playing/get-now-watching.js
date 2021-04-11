import { SHOW, TRAKT } from '@helpers/media'
import { api } from '@helpers/trakt'
import { zeroPad } from '@helpers/utils'
import { DateTime } from 'luxon'

const getMediaOptions = (watching) => {
  if (watching.type === 'episode') {
    return {
      id: watching.episode.ids.trakt,
      link: `https://trakt.tv/episodes/${watching.episode.ids.trakt}`,
      title: `${watching.show.title} ${watching.episode.season}x${zeroPad(
        watching.episode.number
      )}`,
      subtitle: watching.episode.title,
      customData: {
        type: SHOW,
        tmdb: watching.show.ids.tmdb,
      },
    }
  } else if (watching.type === 'movie') {
    return {
      id: watching.movie.ids.trakt,
      link: `https://trakt.tv/movies/${watching.movie.ids.slug}`,
      title: watching.movie.title,
      subtitle: watching.movie.year,
      customData: {
        type: watching.type,
        tmdb: watching.movie.ids.tmdb,
      },
    }
  }
  return null
}

const getNowWatching = async (traktUsername) => {
  const watching = await api(`/users/${traktUsername}/watching?extended=full`)

  if (!watching) return null

  const mediaOptions = getMediaOptions(watching)
  if (!mediaOptions) return null

  const startDate = DateTime.fromISO(watching.started_at)
  const endDate = DateTime.fromISO(watching.expires_at)

  const nowWatching = {
    isPlaying: true,
    brand: TRAKT,
    startDate,
    endDate,
    art: null,
    ...mediaOptions,
  }

  return nowWatching
}

export default getNowWatching
