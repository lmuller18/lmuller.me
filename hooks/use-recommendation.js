import { useEffect, useState } from 'react'
import { useQueries } from 'react-query'

import TraktClient from '@clients/trakt.client'
import {
  LISTENED,
  SONG,
  WATCHED,
  VIDEO_GAME,
  BOARD_GAME,
  ROLLED,
  CLICKED,
} from '@helpers/media'
import { TOP_GAMES, TOP_TRACKS, TOP_VIDEO_GAMES } from '@helpers/mock'

const formatWatchedMedia = (media) => ({
  ...media[media.type],
  type: media.type,
  mediaType: WATCHED,
})

const formatListenedMedia = (media) => ({
  ...media,
  type: SONG,
  mediaType: LISTENED,
})

const formatRolledMedia = (media) => ({
  ...media,
  type: BOARD_GAME,
  mediaType: ROLLED,
})

const formatClickedMedia = (media) => ({
  ...media,
  type: VIDEO_GAME,
  mediaType: CLICKED,
})

const getType = () => {
  const index = Math.floor(Math.random() * 4)
  if (index === 0) return WATCHED
  if (index === 1) return LISTENED
  if (index === 2) return ROLLED
  if (index === 3) return CLICKED
}

const getRandomRec = (watched, listened, rolled, clicked, current) => {
  let type = getType()
  while (type === current?.mediaType) {
    type = getType()
  }
  if (type === WATCHED) {
    let rand = watched[Math.floor(Math.random() * watched.length)]

    if (current?.mediaType === WATCHED) {
      while (
        rand[rand.type].ids.trakt === current?.ids.trakt &&
        rand.type === current?.type
      ) {
        rand = watched[Math.floor(Math.random() * watched.length)]
      }
    }

    return formatWatchedMedia(rand)
  } else if (type === LISTENED) {
    let rand = listened[Math.floor(Math.random() * listened.length)]

    if (current?.mediaType === LISTENED) {
      while (rand.id === current?.id) {
        rand = listened[Math.floor(Math.random() * listened.length)]
      }
    }

    return formatListenedMedia(rand)
  } else if (type === ROLLED) {
    let rand = rolled[Math.floor(Math.random() * rolled.length)]

    if (current?.mediaType === ROLLED) {
      while (rand.title === current?.title) {
        rand = rolled[Math.floor(Math.random() * rolled.length)]
      }
    }

    return formatRolledMedia(rand)
  } else if (type === CLICKED) {
    let rand = clicked[Math.floor(Math.random() * clicked.length)]

    if (current?.mediaType === CLICKED) {
      while (rand.title === current?.title) {
        rand = clicked[Math.floor(Math.random() * clicked.length)]
      }
    }

    return formatClickedMedia(rand)
  }
}

const useRecommendation = () => {
  const [rec, setRec] = useState()

  const [
    {
      data: topShows,
      isLoading: topShowsIsLoading,
      refetch: refetchTopShows,
      isFetched: topShowsIsFetched,
    },
    {
      data: topMovies,
      isLoading: topMoviesIsLoading,
      refetch: refetchTopMovies,
      isFetched: topMoviesIsFetched,
    },
  ] = useQueries([
    { queryKey: 'top-shows', queryFn: TraktClient.getTopShows, enabled: false },
    {
      queryKey: 'top-movies',
      queryFn: TraktClient.getTopMovies,
      enabled: false,
    },
  ])

  const getRecommendation = () => {
    if (!topMovies && !topShows && !topShowsIsLoading && !topMoviesIsLoading) {
      refetchTopMovies()
      refetchTopShows()
    } else {
      const randRec = getRandomRec(
        [...(topMovies ?? []), ...(topShows ?? [])],
        TOP_TRACKS.items,
        TOP_GAMES,
        TOP_VIDEO_GAMES,
        rec
      )
      setRec(randRec)
    }
  }

  useEffect(() => {
    if (
      topShowsIsLoading ||
      topMoviesIsLoading ||
      !topShowsIsFetched ||
      !topMoviesIsFetched
    )
      return
    const rec = getRandomRec(
      [...(topMovies ?? []), ...(topShows ?? [])],
      TOP_TRACKS.items,
      TOP_GAMES,
      TOP_VIDEO_GAMES
    )
    setRec(rec)
  }, [
    topShows,
    topMoviesIsLoading,
    topMovies,
    topMoviesIsLoading,
    topShowsIsFetched,
    topMoviesIsFetched,
  ])

  return [
    rec,
    {
      isLoading: topMoviesIsLoading || topShowsIsLoading,
      getRecommendation,
    },
  ]
}

export default useRecommendation
