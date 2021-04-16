import { useQuery } from 'react-query'
import { useEffect, useState } from 'react'

import useTMDBImages from './use-tmdb-images'

import DarkAmazonClient from '@clients/dark-amazon.client'
import { TRAKT } from '@helpers/media'

// quick toggle to prevent calling api's every 10s
const REFRESH = process.env.NODE_ENV === 'development' ? true : true
const ENABLED = process.env.NODE_ENV === 'development' ? true : true

const useNowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState({
    data: null,
    isLoading: ENABLED ? true : false,
  })

  const { data: nowPlayingData, isLoading: isLoadingNowPlaying } = useQuery(
    'now-playing',
    DarkAmazonClient.getNowPlaying,
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      notifyOnChangeProps: ['data', 'error'],
      refetchInterval: REFRESH ? 10000 : false,
      enabled: !!ENABLED,
    }
  )

  const customData = nowPlayingData
    ? 'customData' in nowPlayingData
      ? nowPlayingData?.customData
      : null
    : null

  const { data: tmdbData, isLoading: isLoadingTMDBData } = useTMDBImages(
    customData?.type,
    customData?.tmdb
  )

  useEffect(() => {
    if (isLoadingNowPlaying || isLoadingTMDBData) return
    if (!nowPlayingData) return
    if (nowPlayingData.brand === TRAKT) {
      const art = `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${tmdbData?.posters?.[0].file_path}`
      setNowPlaying({
        data: {
          ...nowPlayingData,
          art,
        },
        isLoading: false,
      })
      return
    }

    setNowPlaying({ data: nowPlayingData, isLoading: false })
  }, [isLoadingNowPlaying, isLoadingTMDBData, nowPlayingData, tmdbData])

  return nowPlaying
}

export default useNowPlaying
