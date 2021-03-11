import clsx from 'clsx'
import { useRef, useEffect } from 'react'

import useNowListening from '@hooks/use-now-listenening'
import { brandToVerb, PRESENT, SPOTIFY, STEAM, TRAKT } from '@helpers/media'

const NowPlayingSection = () => {
  const nowListening = useNowListening()
  const progressRef = useRef()
  const totalRef = useRef()
  const linkRef = useRef(nowListening?.link)

  const getProgressWidth = (progress, totalWidth, duration) =>
    (progress * totalWidth) / duration

  const updateProgress = (newSong = false) => {
    if (!progressRef.current || !totalRef.current || !nowListening) return
    const { width: totalWidth } = totalRef.current.getBoundingClientRect()
    const progressWidth = getProgressWidth(
      nowListening.progress,
      totalWidth,
      nowListening.length
    )
    if (newSong) {
      // kick off progress immediately by being [REFETCH_INTERVAL] behind
      // and then starting a [REFETCH_INTERVAL] duration transition
      const offsetWidth = getProgressWidth(
        nowListening.progress - 10000,
        totalWidth,
        nowListening.length
      )
      progressRef.current.style.width = `${offsetWidth}px`
      progressRef.current.style.transitionDuration = '1s'
      setTimeout(() => {
        progressRef.current.style.width = `${progressWidth}px`
        progressRef.current.style.transitionDuration = '11s'
      }, 500)
    } else {
      progressRef.current.style.width = `${progressWidth}px`
      progressRef.current.style.transitionDuration = '11s'
    }
  }

  useEffect(() => {
    const resizeListener = () => updateProgress()
    window.addEventListener('resize', resizeListener)
    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [])

  useEffect(() => {
    if (!nowListening) return
    if (nowListening.link !== linkRef.current) {
      updateProgress(true)
      updateProgress()
      linkRef.current = nowListening.link
    } else {
      updateProgress()
    }
  }, [
    nowListening?.progress,
    nowListening?.length,
    nowListening?.link,
    progressRef,
    totalRef,
  ])

  // demo data
  // const nowListening = {
  //   isPlaying: true,
  //   brand: 'spotify',
  //   link: 'https://open.spotify.com/track/6B4OR1UtzO6SBr37AuXs4c',
  //   title: 'Sound Of Awakening',
  //   subtitle: 'WALK THE MOON',
  //   art: 'https://i.scdn.co/image/ab67616d0000b273ffbb5bd9ea83111033066254',
  //   length: 376440,
  //   progress: 26539,
  // }

  if (!nowListening) return null

  const { brand, link, title, subtitle, art } = nowListening

  return (
    <>
      <div className="w-full from-violet-900 to-violet-600 bg-gradient-to-r flex flex-col p-4 animate-slide fixed bottom-0 left-0 shadow-elevate">
        <div className="flex-grow-1 flex flex-row justify-between">
          <a
            rel="noopener noreferrer"
            target="blank"
            className="h-20 w-20 flex-shrink-0 flex-grow-0 rounded-md mr-4 overflow-hidden"
            href={link}
          >
            <img src={art} className="h-full w-full object-cover" />
          </a>
          <div className="w-full flex flex-col justify-center min-w-0 flex-1">
            <div className="mb-4 flex flex-row items-center flex-wrap overflow-hidden">
              <span className="text-gray-300 capitalize mr-2">
                Caught Me {brandToVerb(brand, PRESENT)}:
              </span>
              <span className="text-white font-bold tracking-wide animate-marquee sm:animate-none whitespace-nowrap sm:overflow-hidden sm:overflow-ellipsis">
                {title} -{' '}
                <span className="text-gray-300 truncate">{subtitle}</span>
              </span>
            </div>
            <div className="relative h-3 w-full rounded-sm overflow-hidden">
              <div
                className={clsx(
                  'w-full h-full absolute inset-0 bg-brandless-dark',
                  brand === SPOTIFY && 'bg-spotify-dark',
                  brand === STEAM && 'bg-steam-dark',
                  brand === TRAKT && 'bg-trakt-dark'
                )}
                ref={totalRef}
              />
              <div
                className={clsx(
                  'h-full rounded-r-sm absolute inset-0 bg-brandless',
                  brand === SPOTIFY && 'bg-spotify',
                  brand === STEAM && 'bg-steam',
                  brand === TRAKT && 'bg-trakt'
                )}
                style={{
                  transitionProperty: 'width',
                  transitionTimingFunction: 'linear',
                }}
                ref={progressRef}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: 70 }} />
    </>
  )
}

export default NowPlayingSection
