export const api = async (endpoint) => {
  return fetch(`${process.env.TRAKT_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      'trakt-api-key': process.env.TRAKT_CLIENT_ID,
      'trakt-api-version': '2',
    },
  }).then((res) => {
    if (res.status === 204) return null
    return res.json()
  })
}
