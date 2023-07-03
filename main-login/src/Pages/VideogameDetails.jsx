import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelected } from '../hooks/useSelected'
import { FavIcon } from '../components/Icons/FavIcon'
import { useAuth } from '../hooks/useAuth'
import { handleFavIconClick } from '../utils/handleFavIconClick'
import { useVideogamesFavorites } from '../hooks/useVideogamesFavList'
import { RaceBy } from '@uiball/loaders'
import { Comments } from '../components/Comments'
import { ScreenshotSlider } from '../components/ScreenshotSlider'
import { Link } from 'react-router-dom';

export function VideogameDetails() {
  const { videogameId } = useParams()
  const { selected, getSelected, isLoading } = useSelected({
    id: [videogameId]
  })
  const { favoritesIds } = useVideogamesFavorites()
  const [selectedVideogameId, setSelectedVideogameId] = useState(null)
  const { user } = useAuth()

  useEffect(() => {
    getSelected()
  }, [videogameId])

  // console.log(selected)

  function handleFavoriteUpdate(selectedVideogameId) {
    setSelectedVideogameId(selectedVideogameId)
  }
  return (
    <>
      {isLoading ? (
        <RaceBy size={280} lineWeight={7} speed={1.4} color='white' />
      ) : (
        <section key={selected.id}>
          <h3>
            {selected.title} <br />
            <small>{selected.year}</small>
          </h3>
          <figure className='image-container'>
            <img
              src={
                selected.poster ||
                'https://live.staticflickr.com/2886/34427545586_37151702ce_z.jpg'
              }
              alt={`${selected.Title} poster`}
            />
            <FavIcon
              onClick={(event) => {
                event.preventDefault()
                setSelectedVideogameId(selected.id)
                handleFavIconClick({
                  selectedVideogame: selected.id,
                  user,
                  handleFavoriteUpdate
                })
              }}
              isActive={
                selectedVideogameId === selected.id ||
                favoritesIds.includes(selected.id)
              }
            />
          </figure>
          <small>{selected.rating}</small>
          {selected.screenshots?.length > 0 && (
            <div>
              <h4>Screenshots</h4>
              <ScreenshotSlider
                screenshots={selected.screenshots}
                trailer={selected.trailer}
              />
            </div>
          )}
          <p>{selected.description}</p>
          <Comments videogameId={videogameId} />
          <footer>
    <p>&copy; 2023 JuegosFlix. All rights reserved.</p>
    <Link to={'/PrivacyNotice'}>Privacy Notice</Link><br></br>
    <Link to={'/LegalNotice'}>Legal Notice</Link>
  </footer>
        </section>
      )}
    </>
  )

  // return <p>{videogameDetail.title}</p>
}
