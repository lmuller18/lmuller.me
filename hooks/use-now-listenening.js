import { useEffect } from 'react'

import DarkAmazonClient from '@clients/dark-amazon.client'
import { useQuery } from 'react-query'
import { SPOTIFY } from '@helpers/media'
const useNowListening = () => {
  const { data, isLoading } = useQuery(
    'now-listening',
    DarkAmazonClient.getNowListening,
    { refetchInterval: 10000, refetchOnWindowFocus: false }
  )

  useEffect(() => {
    if (!data || isLoading) return
  }, [data, isLoading])

  if (!data) return null

  return {
    isPlaying: data.is_playing,
    brand: SPOTIFY,
    link: data.item.external_urls.spotify,
    title: data.item.name,
    subtitle: data.item.artists.map((a) => a.name).join(', '),
    art: data.item.album.images[0].url,
    length: data.item.duration_ms,
    progress: data.progress_ms,
  }
}

export default useNowListening
