import React, { useState } from "react"
import Joke from "./Joke"
import Stories from "./Stories"
import Tasks from "./Tasks"
import Gallery from "./Gallery"

function App() {
  const [userQuery, setUserQuery] = useState("")

  const updateUserQuery = e => {
    setUserQuery(e.target.value)
    console.log("userQuery", userQuery)
  }

  const handleKeyPress = e => {
    if (e.key === "Enter") searchQuery()
  }

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, "_blank")
  }

  return (
    <div className='App'>
      <h1>Hello Jennie</h1>
      <div className='form'>
        <input
          value={userQuery}
          onChange={updateUserQuery}
          onKeyPress={handleKeyPress}
        />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <Joke />
      <hr />
      <Tasks />
      <hr />
      <Gallery />
      <hr />
      <Stories />
    </div>
  )
}

export default App
