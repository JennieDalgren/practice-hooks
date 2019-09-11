import React from "react"
import { useFetch } from "./hooks"

const Stories = () => {
  const stories = useFetch(
    "https://news-proxy-server.appspot.com/topstories",
    []
  )

  return (
    <div className='Stories'>
      {stories.map(story => {
        const { title, id, by, time, url } = story
        return (
          <div key={id}>
            <a href={url}>{title}</a>
            <p>
              {by} - {new Date(time * 1000).toLocaleString()}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default Stories
