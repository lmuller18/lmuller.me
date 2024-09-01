export const traktApi = (url) =>
  fetch(`${process.env.NEXT_PUBLIC_TRAKT_BASE_URL}${url}`, {
    headers: {
      'Content-Type': 'application/json',
      'trakt-api-key': process.env.NEXT_PUBLIC_TRAKT_ID,
      'trakt-api-version': 2,
    },
  }).then((res) => {
    if (res.status === 204) return null
    return res.json()
  })

export const tmdbApi = (url) =>
  fetch(
    `https://api.themoviedb.org/3${url}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&include_image_language=en,null`
  )
    .then((res) => res.json())
    .catch((e) => {
      console.error(e)
      return null
    })

export const darkAmazonApi = (url, init) =>
  fetch(url, init)
    .then(async (res) => {
      if (res.status === 202) return null
      if (!res.ok) {
        if (res.json) {
          const { message } = await res.json()
          throw new Error(message)
        }
        throw new Error('Not 2xx repsonse')
      }
      return res.json()
    })
    .catch((e) => {
      console.error(e)
      return null
    })
