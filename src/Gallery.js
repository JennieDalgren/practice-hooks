import React, { useState, useEffect } from "react"
import PICTURES from "./data/pictures"

function Gallery() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setIndex(storedIndex => (storedIndex + 1) % PICTURES.length) //If we're at the end, set the index to 0 i.e. length is 9. 9%9 is 0
    }, 3000)
  }, [])

  console.log("index", index)

  return (
    <div className='Gallery'>
      <img src={PICTURES[index].image} alt='gallery' />
    </div>
  )
}

export default Gallery
