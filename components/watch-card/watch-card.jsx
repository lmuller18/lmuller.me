import { SHOW, TMDB_BASE_URL } from '@helpers/media'
import useTMDBImages from '@hooks/use-tmdb-images'

const WatchCard = ({ media, isLoading }) => {
  const { data: posters, isLoading: postersIsLoading } = useTMDBImages(
    media?.type,
    media?.ids?.tmdb
  )

  if (isLoading || postersIsLoading) return <WatchCardLoader />
  if (!media) return null

  const link =
    media.type === SHOW
      ? `https://trakt.tv/shows/${media.ids.slug}`
      : `https://trakt.tv/movie/${media.ids.slug}`

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-full h-80 max-w-7xl mx-auto flex flex-col items-center justify-center bg-no-repeat bg-left-top bg-cover shadow-elevate rounded-lg overflow-hidden animate-move"
        style={{
          backgroundImage: `url(${TMDB_BASE_URL}/w1280/${posters?.backdrops[0].file_path})`,
        }}
      >
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'linear-gradient(0deg, #00000088 30%, #ffffff44 100%)',
          }}
        />
        <div className="absolute p-4 top-0 right-0 text-3xl">
          {media.type === SHOW ? '📺' : '🎬'}
        </div>

        <a
          rel="noopener noreferrer"
          target="blank"
          className="mb-2 relative rounded-lg shadow-elevate overflow-hidden transform hover:scale-105 transition-transform"
          href={link}
          style={{ height: 216 }}
        >
          <img
            src={`${TMDB_BASE_URL}/w600_and_h900_bestv2/${posters?.posters[0].file_path}`}
            className="w-36 object-cover"
          />
        </a>
        <span className="text-xl font-bold truncate max-w-full relative">
          {media.title}
        </span>
        <span className="font-light mb-2 truncate max-w-full relative">
          {media.year}
        </span>
      </div>
    </div>
  )
}

const WatchCardLoader = () => (
  <div className="flex flex-col items-center">
    <div className="relative w-full h-80 max-w-7xl mx-auto flex flex-col items-center justify-center bg-no-repeat bg-top">
      <div className="absolute bg-black bg-opacity-50 inset-0 w-full h-full animate-pulse" />
      <span className="text-xl font-bold mb-2 truncate w-12 h-2 max-w-full relative bg-gray-400 rounded-md animate-pulse"></span>
      <div
        className="relative bg-gray-700 animate-pulse"
        style={{ height: 216 }}
      >
        <div className="w-36 object-cover" />
      </div>
    </div>
  </div>
)

export default WatchCard
