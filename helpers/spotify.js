import querystring from 'querystring'

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

const getAccessToken = async (refreshToken) => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  })

  return response.json()
}

export const api = async (endpoint, refreshToken) => {
  const { access_token } = await getAccessToken(refreshToken)

  return fetch(`${process.env.SPOTIFY_BASE_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  }).then((res) => {
    if (res.status === 204) return null
    return res.json()
  })
}

// export const getToken = async () => getAccessToken()
