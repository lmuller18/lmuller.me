import getNowGaming from '@api/now-playing/get-now-gaming'
import getNowListening from '@api/now-playing/get-now-listening'
import getNowWatching from '@api/now-playing/get-now-watching'

const nowPlaying = async (req, res) => {
  const nowListening = await getNowListening(process.env.SPOTIFY_REFRESH_TOKEN)
  const nowWatching = await getNowWatching(process.env.TRAKT_USERNAME)
  const nowGaming = await getNowGaming(process.env.STEAM_ID)

  if (nowGaming) return res.status(200).json(nowGaming)
  if (nowWatching) return res.status(200).json(nowWatching)
  if (nowListening) return res.status(200).json(nowListening)

  return res.status(202).end()
}

export default nowPlaying
