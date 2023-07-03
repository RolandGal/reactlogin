import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'

//Agrega o elimina videojuegos de la lista de favoritos en la base de datos cuando se hace clic en favicon
export const handleFavIconClick = async ({
  selectedVideogame,
  user,
  handleFavoriteUpdate
}) => {
  if (user) {
    try {
      const userRef = doc(db, 'users', user.uid)

      // Obtenemos los datos actuales del documento del usuario
      const userSnapshot = await getDoc(userRef)
      const userData = userSnapshot.exists() ? userSnapshot.data() : {}

      // Comprobamos si el videojuego ya está en la lista de favoritos
      const videogameIds = userData?.videogameIds || []
      const videogameIndex = videogameIds.indexOf(selectedVideogame)

      if (!videogameIds.includes(selectedVideogame)) {
        videogameIds.push(selectedVideogame)
      } else {
        // El videojuego ya está en la lista, lo eliminamos
        videogameIds.splice(videogameIndex, 1)
      }
      await setDoc(userRef, { videogameIds }, { merge: true })
      handleFavoriteUpdate(null) // Deselecciona el videojuego
    } catch (error) {
      throw new Error(
        'Ha ocurrido un error al añadir el videojuego a tus favoritos. Inténtalo de nuevo más tarde.'
      )
    }
  }
}
