import { useState } from 'react'
import { searchMostAnticipatedGames } from '../services/videogames'

export function useMostAnticipatedGames() {
  const [mostAnticipatedGames, setMostAnticipatedGames] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState()

  const fetchMostAnticipatedGames = async () => {
    setIsLoading(true)
    setIsError('')
    try {
      const anticipatedGames = await searchMostAnticipatedGames()
      if (anticipatedGames.length === 0) {
        setIsError('No se han encontrado resultados')
      } else {
        setMostAnticipatedGames(anticipatedGames)
      }
    } catch (e) {
      setIsError('Error obteniendo videojuegos')
    } finally {
      setIsLoading(false)
    }
  }

  return { fetchMostAnticipatedGames, isLoading, isError, mostAnticipatedGames }
}
