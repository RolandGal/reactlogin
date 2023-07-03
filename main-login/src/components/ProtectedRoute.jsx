import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { RaceBy } from '@uiball/loaders'

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()

  //Al ser useAuth una llamada asincrona, es necesario para que pueda renderizar el children correctamente
  if (loading)
    return (
      <h1>
        Cargando <RaceBy size={280} lineWeight={7} speed={1.4} color='white' />
      </h1>
    )

  //Si no hay usuario redirigimos a login
  if (!user) return <Navigate to='/login' />

  return <>{children}</>
}
