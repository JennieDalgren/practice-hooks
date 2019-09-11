import React, { useState } from "react"
import Joke from "./Joke"

function App() {
  const [userQuery, setUserQuery] = useState("")

  const updateUserQuery = e => {
    console.log("userQuery", userQuery)
    setUserQuery(e.target.value)
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
    </div>
  )
}

export default App
