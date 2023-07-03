import { useState } from 'react'
import { searchGamesByGenre } from '../services/videogames'

export function useGamesByGenre({ genre }) {
  const [isLoading, setIsLoading] = useState(true)
  const [games, setGames] = useState([])

  const getGamesByGenre = async () => {
    const data = await searchGamesByGenre(genre)
    setGames(data)
    setIsLoading(false)
  }

  return { games, isLoading, getGamesByGenre }
}
