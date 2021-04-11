export const steamworksAPI = async (endpoint) => {
  return await fetch(
    `${process.env.STEAMWORKS_BASE_URL}${endpoint}&key=${process.env.STEAM_API_KEY}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  ).then((res) => {
    if (res.status === 204) return null
    return res.json()
  })
}

export const storefrontAPI = async (endpoint) => {
  return await fetch(`${process.env.STEAM_STOREFRONT_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    if (res.status === 204) return null
    return res.json()
  })
}
