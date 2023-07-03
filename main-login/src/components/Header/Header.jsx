import { useAuth } from '../../hooks/useAuth'
import { UserProfile } from './UserProfile'
import { useSearchResults } from '../../context/SearchResults'
import { searchVideogames } from '../../services/videogames'
import { useNavigate } from 'react-router-dom'
import { Menu } from './Menu'
import './Header.css'

export function Header({ showSearch }) {
  const { updateSearchResults } = useSearchResults()
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
    } catch (e) {
      console.log(e.message)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const field = new FormData(event.target)
    const query = field.get('query')
    updateSearchResults(await searchVideogames({ search: query }))
    navigate('/videogames')
  }

  return (
    <header className='header'>
      <Menu />
      
      {showSearch && (
        <>
          
          <form action='' className='form' onSubmit={handleSubmit}>
            <input type='text' name='query' placeholder='Search' className='busqueda' /><button className='btn'>Search</button>
           
          </form>
        </>
      )}
<UserProfile />
<button className='logout' onClick={handleLogout}>Log out</button>
      
    </header>
  )
}
