import { useNavigate } from 'react-router-dom'
import './FilterGender.css'

export function FilterGenders() {
  const navigate = useNavigate()

  const handleChangeGender = (event) => {
    const newValue = event.target.value
    navigate(`/genre/${newValue}`)
  }

  return (
    <select className='filtro' onChange={handleChangeGender} name='genderFilter'>
      <option value=''>Choose Gender</option>
      <option value='action'>Action</option>
      <option value='arcade'>Arcade</option>
      <option value='role-playing-games-rpg'>RPG</option>
      <option value='indie'>Indie</option>
      <option value='adventure'>Adventure</option>
      <option value='strategy'>Strategy</option>
      <option value='shooter'>Shooter</option>
      <option value='casual'>Casual</option>
      <option value='simulation'>Simulation</option>
      <option value='indie'>Puzzle</option>
      <option value='platformer'>Platform</option>
      <option value='racing'>Racing</option>
      <option value='massively-multiplayer'>Massive multiplayer</option>
      <option value='sports'>Sports</option>
      <option value='family'>Family</option>
      <option value='fighting'>Fighting</option>
      <option value='board-games'>Board Games</option>
      <option value='educational'>Educational</option>
      <option value='card'>Card</option>
    </select>
  )
}
