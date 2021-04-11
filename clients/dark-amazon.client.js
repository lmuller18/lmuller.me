import { darkAmazonApi } from 'helpers/api'

const DarkAmazonClient = {
  getNowPlaying: () => darkAmazonApi(`/api/now-playing`),
}

export default DarkAmazonClient
