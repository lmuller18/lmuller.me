import { DateTime } from 'luxon'

import { api } from '@helpers/spotify'
import { SPOTIFY } from '@helpers/media'

const getNowListening = async (refreshToken) => {
  const nowPlaying = await api('/v1/me/player/currently-playing', refreshToken)
  if (!nowPlaying) return null
  const startDate = DateTime.now().minus(nowPlaying.progress_ms)
  const endDate = startDate.plus(nowPlaying.item.duration_ms)

  const nowListening = {
    id: nowPlaying.item.id,
    isPlaying: nowPlaying.is_playing,
    brand: SPOTIFY,
    link: nowPlaying.item.external_urls.spotify,
    title: nowPlaying.item.name,
    subtitle: nowPlaying.item.artists.map((a) => a.name).join(', '),
    art: nowPlaying.item.album.images[0].url,
    startDate,
    endDate,
  }
  return nowListening
}

export default getNowListening
