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

export const useDynamicTransition = ({ increment, delay, length }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(storedIndex => (storedIndex + increment) % length)
    }, delay)

    return () => clearInterval(interval)
  }, [delay, increment])

  return index
}
