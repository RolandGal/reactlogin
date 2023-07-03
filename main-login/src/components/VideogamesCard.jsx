import { useState } from 'react'
import { FavIcon } from './Icons/FavIcon'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useVideogamesFavorites } from '../hooks/useVideogamesFavList'
import { handleFavIconClick } from '../utils/handleFavIconClick'

export function VideogamesCard({ videogame }) {
  const [selectedVideogameId, setSelectedVideogameId] = useState(null)
  const { favoritesIds } = useVideogamesFavorites()
  const { user } = useAuth()

  function handleFavoriteUpdate(selectedVideogameId) {
    setSelectedVideogameId(selectedVideogameId)
  }

  return (
    <li key={videogame.id} className='videogames-element'>
      <h3>
        {videogame.title} <br />
        <small>{videogame.year}</small>
      </h3>
      <Link to={'/videogames/' + videogame.id}>
        <figure className='image-container'>
          <img
            src={
              videogame.poster ||
              'https://live.staticflickr.com/2886/34427545586_37151702ce_z.jpg'
            }
            alt={`${videogame.Title} poster`}
          />
          <FavIcon
            onClick={(event) => {
              event.preventDefault()
              setSelectedVideogameId(videogame.id)
              handleFavIconClick({
                selectedVideogame: videogame.id,
                user,
                handleFavoriteUpdate
              }) // Pasar los argumentos necesarios
            }}
            isActive={
              selectedVideogameId === videogame.id ||
              favoritesIds.includes(videogame.id)
            }
          />
        </figure>
      </Link>
    </li>
  )
}
