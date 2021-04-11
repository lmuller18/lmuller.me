import { DateTime } from 'luxon'
import { useEffect, useRef } from 'react'

const useNowPlayingProgress = (nowPlaying) => {
  const progressRef = useRef(null)

  const updateProgress = () => {
    if (!nowPlaying?.startDate || !progressRef.current) return
    const startDate = DateTime.fromISO(nowPlaying.startDate)
    const endDate = DateTime.fromISO(nowPlaying.endDate)

    const pRef = progressRef.current

    const { milliseconds: progress } = startDate
      .diffNow('milliseconds')
      .toObject()

    const { milliseconds: length } = endDate
      .diff(startDate, 'milliseconds')
      .toObject()

    const progressWidth = Math.min((progress * -1) / length, 1) * 100
    pRef.style.width = `${progressWidth}%`
  }

  useEffect(() => {
    if (!nowPlaying) return
    updateProgress()

    const interval = setInterval(() => {
      if (nowPlaying.isPlaying) {
        updateProgress()
      }
    }, 500)

    return () => clearInterval(interval)
  }, [
    nowPlaying?.startDate,
    nowPlaying?.endDate,
    nowPlaying?.link,
    progressRef,
  ])

  return progressRef
}

export default useNowPlayingProgress
