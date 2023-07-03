import { useState, useEffect } from 'react'
import { useAuth } from './useAuth'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'

// Mantiene actualizada la lisa de videojuegos del usuario autenticado actualizando su estado automaticamente.
export function useVideogamesFavorites() {
  const [favoritesIds, setFavoritesIds] = useState([])
  const { user } = useAuth()

  //Listener en tiempo real de cambios del usuario actual
  const getFavoritesFromDDBB = () => {
    if (user) {
      const userRef = doc(db, 'users', user.uid)
      const unsubscribe = onSnapshot(userRef, (docSnapshot) => {
        if (docSnapshot.exists()) {
          const userData = docSnapshot.data()
          const videogameIds = userData.videogameIds || []
          setFavoritesIds(videogameIds)
        }
      })

      // Limpiar el listener al desmontar el componente
      return () => {
        unsubscribe()
      }
    }
  }

  useEffect(() => {
    const unsubscribe = getFavoritesFromDDBB()
    return () => {
      if (unsubscribe) {
        unsubscribe()
      }
    }
  }, [user])

  return {
    favoritesIds,
    getFavoritesFromDDBB
  }
}

// import { useState, useEffect } from 'react'
// import { useAuth } from './useAuth'
// import { doc, onSnapshot } from 'firebase/firestore'
// import { db } from '../firebase'

// export function useVideogamesFavorites() {
//   const [favoritesIds, setFavoritesIds] = useState([])
//   const { user } = useAuth()

//   useEffect(() => {
//     if (user) {
//       const userRef = doc(db, 'users', user.uid)
//       const unsubscribe = onSnapshot(userRef, (docSnapshot) => {
//         if (docSnapshot.exists()) {
//           const userData = docSnapshot.data()
//           const videogameIds = userData.videogameIds || []
//           setFavoritesIds(videogameIds)
//         }
//       })

//       Limpiar el listener al desmontar el componente
//       return () => {
//         unsubscribe()
//       }
//     }
//   }, [user])

//   return {
//     favoritesIds
//   }
// }
