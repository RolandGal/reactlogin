import { useState, useEffect } from 'react'
import { searchBest } from '../services/videogames.js'

export function useBestVideogames() {
  const [videogames, setVideogames] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getVideogames = async () => {
    const newVideogames = await searchBest()
    setVideogames(newVideogames)
    setIsLoading(false)
  }

  return { videogames, getVideogames, isLoading }
}
