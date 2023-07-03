import { useState, useEffect } from 'react'
import { useFavorites } from '../hooks/useFavorites'
import { FavIcon } from './FavIcon'
import { handleFavIconClick } from '../utils/handleFavIconClick'
import { useAuth } from '../hooks/useAuth'
import { RaceBy } from '@uiball/loaders'

export function Favorites({ favoriteIds }) {
  const { favorites, getFavorites, isLoading } = useFavorites({ favoriteIds })
  const [selectedVideogameId, setSelectedVideogameId] = useState(null)

  // COmentario random
  const { user } = useAuth()

  useEffect(() => {
    getFavorites()
  }, [favoriteIds])

  function handleFavoriteUpdate(selectedVideogameId) {
    setSelectedVideogameId(selectedVideogameId)
  }

  if (isLoading)
    return (
      <>
        <RaceBy size={280} lineWeight={7} speed={1.4} color='white' />
      </>
    )

  return favorites.map((favorite) => (
    <li key={favorite.id} className='videogames-element'>
      <h3>
        {favorite.title} <br />
        <small>{favorite.year}</small>
      </h3>
      <figure className='image-container'>
        <img
          src={
            favorite.poster ||
            'https://live.staticflickr.com/2886/34427545586_37151702ce_z.jpg'
          }
          alt={`${favorite.Title} poster`}
        />
        <FavIcon
          onClick={(event) => {
            event.preventDefault()
            setSelectedVideogameId(favorite.id)
            handleFavIconClick({
              selectedVideogame: favorite.id,
              user,
              handleFavoriteUpdate
            })
          }}
          isActive={
            selectedVideogameId === favorite.id ||
            favoriteIds.includes(favorite.id)
          }
        />
      </figure>
    </li>
  ))
}
