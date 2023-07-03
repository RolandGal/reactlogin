import { useState } from 'react'
import { searchFavorites } from '../services/videogames.js'

export function useFavorites({ favoritesIds }) {
  const [favorites, setFavorites] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState()

  const getFavorites = async () => {
    setIsLoading(true)
    setIsError('')
    try {
      const newFavorites = await searchFavorites({ favoriteIds: favoritesIds })
      if (newFavorites.length === 0) {
        setIsError('No se han encontrado favoritos')
      } else {
        setFavorites(newFavorites)
      }
    } catch (e) {
      setIsError('Error obteniendo videojuegos')
    } finally {
      setIsLoading(false)
    }
  }

  return { favorites, getFavorites, isLoading, isError }
}
