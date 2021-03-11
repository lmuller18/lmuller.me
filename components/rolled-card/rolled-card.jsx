import { TOP_GAMES } from '@helpers/mock'

const RolledCard = ({ media = TOP_GAMES[0], isLoading }) => {
  if (isLoading) return null
  if (!media) return null

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-full bg-black h-80 max-w-7xl mx-auto flex flex-col items-center justify-center bg-no-repeat bg-left-top bg-cover shadow-elevate rounded-lg overflow-hidden animate-move"
        style={{
          backgroundImage: `url("${media.backdrop}")`,
        }}
      >
        <div
          className="absolute  inset-0 w-full h-full"
          style={{
            background: 'linear-gradient(0deg, #00000088 30%, #ffffff44 100%)',
          }}
        />
        <div className="absolute p-4 top-0 right-0 text-3xl">🎲</div>
        <a
          rel="noopener noreferrer"
          target="blank"
          className="mb-2 bg-gray-900 relative rounded-lg shadow-elevate overflow-hidden transform hover:scale-105 transition-transform"
          href={media.link}
        >
          <img src={media.image} className="w-36 object-cover" />
        </a>
        <span className="text-xl font-bold truncate max-w-full relative">
          {media.title}
        </span>
      </div>
    </div>
  )
}

export default RolledCard
