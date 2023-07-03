import { VideogamesList } from './VideogamesList'
import { useState } from 'react'
import { useVideogames } from '../hooks/useVideogames'
import './Videogames.css'
import { useAuth } from '../hooks/useAuth'
import { Filtro } from './Filtro'

// export function useSearch({ search }) {
//   const isFirstInput = useRef(true)

//   useEffect(() => {
//     if (isFirstInput) {
//       isFirstInput.current = search === ''
//     }
//   }, [])
// }

export function Videogames() {
  const { logout } = useAuth()
  const [search, setSearch] = useState('')
  useVideogames({ search })
  const [showSearch, setShowSearch] = useState(true)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const field = new FormData(event.target)
    const query = field.get('query')
    setSearch(query)
  }

  const handleLogout = async () => {
    try {
      await logout()
    } catch (e) {
      console.log(e.message)
    }
  }

  const handleToggleSearchVisibility = (showFavorites) => {
    setShowSearch(!showFavorites)
  }

  return (
    <div className='page'>
      <header className='header'>
        <Filtro />
        <button onClick={handleLogout}>Log out</button>
        <h3>Busqueda de videojuegos</h3>
        {showSearch && (
          <form action='' onSubmit={handleSubmit}>
            <input type='text' name='query' id='' />
            <button>Buscar</button>
          </form>
        )}
      </header>
      <main>
        <VideogamesList onToggleShowFavorites={handleToggleSearchVisibility} />
      </main>
    </div>
  )
}
