import React from "react"

import Card from "./../../blocks/Card"
import Typography from "../../elements/Typography"

const MediaCard = ({ image, title, description }) => {
  return (
    <Card.Media>
      <Card.Image src={image}></Card.Image>
      <Card.Body>
        <Typography variant="h2" fontFamily="Fira Mono">
          {title}
        </Typography>
        <Typography variant="p" fontFamily="Fira Mono">
          {description}
        </Typography>
      </Card.Body>
    </Card.Media>
  )
}

export default MediaCard
