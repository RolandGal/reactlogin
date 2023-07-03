import { useContext } from 'react'
import AuthContext from '../context/Auth.jsx'

export const useAuth = () => {
  const context = useContext(AuthContext)
  return context
}
