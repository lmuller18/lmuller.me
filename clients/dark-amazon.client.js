import { darkAmazonApi } from 'helpers/api'

const DarkAmazonClient = {
  getNowListening: () =>
    darkAmazonApi(`/spotify/v1/me/player/currently-playing`),
  getTopTracks: () =>
    darkAmazonApi(`/spotify/v1/me/top/tracks?time_range=long_term`),
  getNowGaming: () => darkAmazonApi(`/steam`),
}

export default DarkAmazonClient
