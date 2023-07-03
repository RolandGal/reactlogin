import { useState } from 'react'
import { searchBestGamesOf2022 } from '../services/videogames'

export function useBestGames() {
  const [bestGames, setBestGames] = useState([])
  const [isLoadingBestGames, setIsLoadingBestGames] = useState(true)
  const [isErrorBestGames, setIsErrorBestGames] = useState()

  const fetchBestGames = () => {
    setIsErrorBestGames('')
    setIsLoadingBestGames(true)
    searchBestGamesOf2022()
      .then((topGames) => {
        if (topGames.length === 0) {
          setIsErrorBestGames('No se han encontrado resultados')
        } else {
          setBestGames(topGames)
        }
      })
      .catch((error) => {
        console.error('Error fetching best games:', error)
      })
      .finally(() => setIsLoadingBestGames(false))
  }

  return { fetchBestGames, bestGames, isErrorBestGames, isLoadingBestGames }
}
