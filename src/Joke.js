import React, { useState, useEffect } from "react"

function Joke() {
  const [joke, setJoke] = useState({})

  // useEffect can be used as componentDidMount
  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/jokes/random")
      .then(response => response.json())
      .then(json => {
        setJoke(json)
      })
  }, []) // This empty array tells the useEffect to run only once. If not, the setJoke will trigger a render and an infinite loop will be going 😱

  const { setup, punchline } = joke

  return (
    <div>
      <h3>Joke</h3>
      <p>{setup}</p>
      <p>
        <em>{punchline}</em>
      </p>
    </div>
  )
}

export default Joke
