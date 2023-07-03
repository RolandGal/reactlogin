import { useState, useEffect } from 'react'
import { searchVideogames } from '../services/videogames.js'
import { useSearchResults } from '../context/SearchResults'

//Obtiene y mantiene actualizada la lista de videojuegos segun la busqueda y los almacena en el estado global y localStorage
export function useVideogames({ search }) {
  const [videogames, setVideogames] = useState([])
  const { updateSearchResults } = useSearchResults()

  const getVideogames = async () => {
    const newVideogames = await searchVideogames({ search })
    setVideogames(newVideogames)
    return newVideogames
  }

  const fetchVideogames = async () => {
    const storedResults = localStorage.getItem('searchResults')
    if (search) {
      const results = await getVideogames()
      updateSearchResults(results)
      localStorage.setItem('searchResults', JSON.stringify(results))
    } else if (storedResults) {
      updateSearchResults(JSON.parse(storedResults))
    }
  }

  useEffect(() => {
    fetchVideogames()
  }, [search])

  return {}
}
