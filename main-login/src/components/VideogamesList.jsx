import { VideogamesCard } from './VideogamesCard'
import { useSearchResults } from '../context/SearchResults'
import './Videogames.css'

function NoResults() {
  return <p>No se han obtenido resultados</p>
}

export function VideogamesList() {
  const { searchResults } = useSearchResults()

  const hasVideogames = searchResults?.length > 0

  return (
    <>
      <ul className='videogames-list'>
        {hasVideogames ? (
          searchResults.map((videogame) => (
            <VideogamesCard key={videogame.id} videogame={videogame} />
          ))
        ) : (
          <NoResults />
        )}
      </ul>
    </>
  )
}
