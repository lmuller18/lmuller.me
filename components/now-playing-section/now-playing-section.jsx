import clsx from 'clsx'

import useNowPlaying from '@hooks/use-now-playing'
import { brandToVerb, TRAKT, STEAM, SPOTIFY, PRESENT } from '@helpers/media'
import useNowPlayingProgress from '@hooks/use-now-playing-progress'

const NowPlaying = () => {
  const { data: nowPlaying, isLoading } = useNowPlaying()
  const progressRef = useNowPlayingProgress(nowPlaying)

  if (isLoading || !nowPlaying) return null

  const { brand, link, title, subtitle, art } = nowPlaying

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
            <img
              src={art}
              className={clsx(
                'h-full w-full object-cover',
                (brand === STEAM || brand === TRAKT) && 'object-top'
              )}
            />
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
                  'w-full h-full absolute inset-0',
                  brand === SPOTIFY && 'bg-spotify-dark',
                  brand === STEAM && 'bg-steam-dark',
                  brand === TRAKT && 'bg-trakt-dark'
                )}
              />
              <div
                className={clsx(
                  'h-full rounded-r-sm absolute inset-0',
                  brand === SPOTIFY && 'bg-spotify',
                  brand === STEAM && 'bg-steam',
                  brand === TRAKT && 'bg-trakt'
                )}
                style={{ transition: 'width 500ms ease-out' }}
                ref={progressRef}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: 112 }} />
    </>
  )
}

export default NowPlaying
