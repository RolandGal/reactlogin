import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useBestVideogames } from '../hooks/useBestVideogames'
import { useAuth } from '../hooks/useAuth'
import { useVideogamesFavorites } from '../hooks/useVideogamesFavList'
import { FavIcon } from '../components/Icons/FavIcon'
import { handleFavIconClick } from '../utils/handleFavIconClick'
import { RaceBy } from '@uiball/loaders'


export function BestVideogames() {
  const { videogames, getVideogames, isLoading } = useBestVideogames()
  const [selectedVideogameId, setSelectedVideogameId] = useState(null)
  const { favoritesIds } = useVideogamesFavorites()
  const { user } = useAuth()

  useEffect(() => {
    getVideogames()
  }, [])

  function handleFavoriteUpdate(selectedVideogameId) {
    setSelectedVideogameId(selectedVideogameId)
  }

  return (
    <>
      {isLoading ? (
        <RaceBy size={280} lineWeight={7} speed={1.4} color='white' />
      ) : (
        <section>
          <ul>
            {videogames.map((videogame) => {
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
                        alt=''
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
