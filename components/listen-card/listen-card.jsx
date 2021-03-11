import { TOP_TRACKS } from '@helpers/mock'

const ListenCard = ({ media = TOP_TRACKS.items[0], isLoading }) => {
  if (isLoading) return null
  if (!media) return null

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-full h-80 max-w-7xl mx-auto flex flex-col items-center justify-center bg-no-repeat bg-left-top bg-cover shadow-elevate rounded-lg overflow-hidden animate-move"
        style={{
          backgroundImage: `url(${media.album?.images?.[0]?.url})`,
        }}
      >
        <div
          className="absolute  inset-0 w-full h-full"
          style={{
            background: 'linear-gradient(0deg, #00000088 30%, #ffffff44 100%)',
          }}
        />
        <div className="absolute p-4 top-0 right-0 text-3xl">🎵</div>
        <a
          rel="noopener noreferrer"
          target="blank"
          className="mb-2 relative rounded-lg shadow-elevate overflow-hidden transform hover:scale-105 transition-transform"
          href={media.external_urls.spotify}
        >
          <img
            src={media.album?.images?.[0]?.url}
            className="w-36 h-36 object-cover"
          />
        </a>
        <span className="text-xl font-bold truncate max-w-full relative">
          {media.name}
        </span>
        <span className="font-light mb-2 truncate max-w-full relative">
          {media.artists.map((a) => a.name).join(', ')}
        </span>
      </div>
    </div>
  )
}

export default ListenCard
