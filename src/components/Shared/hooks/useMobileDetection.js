import { useState, useEffect } from "react"
import useWindowDimensions from "./useWindowDimensions"

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false)
  const { width } = useWindowDimensions()

  useEffect(() => {
    if (width <= 620) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [width])

  return isMobile
}

export default useMobileDetection
