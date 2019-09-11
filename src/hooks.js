import React, { useState, useEffect } from "react"

export const useFetch = (url, initalValue) => {
  const [result, setResult] = useState(initalValue)

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => setResult(json))
  }, [])

  return result
}
