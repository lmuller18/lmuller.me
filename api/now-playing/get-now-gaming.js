import { DateTime } from 'luxon'

import { STEAM } from '@helpers/media'
import { steamworksAPI, storefrontAPI } from '@helpers/steam'

const getNowGaming = async (steamId) => {
  const player = await steamworksAPI(
    `/ISteamUser/GetPlayerSummaries/v2/?steamids=${steamId}`
  )

  if (!player?.response?.players?.[0]?.gameid) return null

  const gameId = player?.response?.players?.[0]?.gameid
  const gameResponse = await storefrontAPI(`/appdetails?appids=${gameId}`)
  if (!gameResponse?.[gameId]?.data) return null
  const game = gameResponse[gameId].data

  const nowGaming = {
    id: gameId,
    isPlaying: false,
    brand: STEAM,
    link: `https://store.steampowered.com/app/${gameId}`,
    title: game.name,
    subtitle: game.developers.join(', '),
    art: `https://steamcdn-a.akamaihd.net/steam/apps/${gameId}/library_600x900.jpg`,
    startDate: DateTime.now(),
    endDate: DateTime.now(),
  }

  return nowGaming
}

export default getNowGaming
