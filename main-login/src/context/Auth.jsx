import { createContext, useEffect, useState } from 'react'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile
} from 'firebase/auth'
import { updateDoc, doc, setDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { auth, db, storage } from '../firebase'

const AuthContext = createContext({})

export function AuthProvider({ children }) {
  //Info de usuario, null si no se ha iniciado sesión
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const signup = async (email, password, username) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    console.log(userCredential)
    const user = userCredential.user
    //console.log(email, password)
    // Crea un documento en la colección de usuarios con el nombre de usuario y el correo electrónico
    await setDoc(doc(db, 'users', user.uid), {
      username: username,
      description: '',
      profilePicture: 'https://via.placeholder.com/150',
      email: email
    })
    // Actualiza el perfil de usuario en Firebase
    await updateProfile(user, {
      displayName: username,
      photoURL: 'https://via.placeholder.com/150'
    })
  }

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)

  const logout = () => signOut(auth)

  const updateProfileImage = async (imageFile) => {
    if (user) {
      try {
        // Crear una referencia en Firebase Storage
        const storageRef = ref(storage, `profilePictures/${user.uid}`)
        // Subir la imagen
        await uploadBytes(storageRef, imageFile)
        // Obtener la URL de descarga
        const imageUrl = await getDownloadURL(storageRef)
        // Actualizar la URL de la imagen en Firestore
        const userDocRef = doc(db, 'users', user.uid)
        await updateDoc(userDocRef, { profilePicture: imageUrl })
        await updateProfile(user, { photoURL: imageUrl })
      } catch (error) {
        console.error('Error updating profile image:', error)
      }
    }
  }

  const updateUserDescription = async (description) => {
    if (user) {
      try {
        const userDocRef = doc(db, 'users', user.uid)
        await updateDoc(userDocRef, { description: description })
      } catch (error) {
        console.error('Error updating user description:', error)
      }
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log({ currentUser })
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signup,
        login,
        logout,
        user,
        loading,
        updateProfileImage,
        updateUserDescription
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
