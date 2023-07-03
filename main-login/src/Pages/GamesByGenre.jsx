import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useVideogamesFavorites } from '../hooks/useVideogamesFavList'
import { handleFavIconClick } from '../utils/handleFavIconClick'
import { FavIcon } from '../components/Icons/FavIcon'
import { useGamesByGenre } from '../hooks/useGamesByGenre'
import { RaceBy } from '@uiball/loaders'

export function GamesByGenre() {
  const { favoritesIds } = useVideogamesFavorites()
  const { genre } = useParams()
  const [selectedVideogameId, setSelectedVideogameId] = useState(null)
  const { isLoading, games, getGamesByGenre } = useGamesByGenre({ genre })

  useEffect(() => {
    getGamesByGenre()
  }, [genre])

  return (
    <>
      {isLoading ? (
        <RaceBy size={280} lineWeight={7} speed={1.4} color='white' />
      ) : (
        <section>
          <ul>
            {games.map((game) => {
              return (
                <li key={game.id} className='videogames-element'>
                  <h3>
                    {game.title} <br />
                    <small>{game.year}</small>
                  </h3>
                  <Link to={'/videogames/' + game.id}>
                    <figure className='image-container'>
                      <img
                        src={
                          game.poster ||
                          'https://live.staticflickr.com/2886/34427545586_37151702ce_z.jpg'
                        }
                        alt={`${game.Title} poster`}
                      />
                      <FavIcon
                        onClick={(event) => {
                          event.preventDefault()
                          setSelectedVideogameId(game.id)
                          handleFavIconClick({
                            selectedVideogame: game.id,
                            user,
                            handleFavoriteUpdate
                          })
                        }}
                        isActive={
                          selectedVideogameId === game.id ||
                          favoritesIds.includes(game.id)
                        }
                      />
                    </figure>
                  </Link>
                </li>
              )
            })}
          </ul>
          <footer>
    <p>&copy; 2023 JuegosFlix. All rights reserved.</p>
    <Link to={'/PrivacyNotice'}>Privacy Notice</Link><br></br>
    <Link to={'/LegalNotice'}>Legal Notice</Link>
  </footer>
        </section>
      )}
    </>
  )
}
