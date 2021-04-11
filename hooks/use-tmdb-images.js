import TMDBClient from '@clients/tmdb.client'
import { useQuery } from 'react-query'

const useTMDBImages = (type, id) => {
  const result = useQuery(
    [`tmdb-images`, type, id],
    () => TMDBClient.getImages(type, id),
    {
      enabled: !!(type && id),
      refetchOnWindowFocus: false,
    }
  )

  return result
}

export default useTMDBImages
