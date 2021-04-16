import { DateTime } from 'luxon'

import { api } from '@helpers/spotify'
import { SPOTIFY } from '@helpers/media'

const getNowListening = async (refreshToken) => {
  const nowPlaying = await api(
    '/v1/me/player/currently-playing?additional_types=track,episode',
    refreshToken
  )
  if (!nowPlaying) return null

  const startDate = DateTime.now().minus(nowPlaying.progress_ms)
  const endDate = startDate.plus(nowPlaying.item.duration_ms)
  const subtitle =
    nowPlaying.currently_playing_type === 'episode'
      ? nowPlaying.item.show.name
      : nowPlaying.item.artists.map((a) => a.name).join(', ')
  const art =
    nowPlaying.currently_playing_type === 'episode'
      ? nowPlaying.item.show.images[0].url
      : nowPlaying.item.album.images[0].url

  const nowListening = {
    art,
    subtitle,
    id: nowPlaying.item.id,
    isPlaying: nowPlaying.is_playing,
    brand: SPOTIFY,
    link: nowPlaying.item.external_urls.spotify,
    title: nowPlaying.item.name,
    startDate,
    endDate,
  }
  return nowListening
}

export default getNowListening
