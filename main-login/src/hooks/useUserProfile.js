import { useEffect, useState } from 'react'
import { doc, getDoc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from './useAuth'

export function useUserProfile() {
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  const auth = useAuth()
  const user = auth && auth.user ? auth.user : null

  useEffect(() => {
    const fetchUser = async () => {
      if (!user || !user.uid) {
        setLoading(false)
        return
      }

      try {
        const userDocRef = doc(db, 'users', user.uid)
        const userDoc = await getDoc(userDocRef)
        if (userDoc.exists()) {
          setUserData({ id: userDoc.id, ...userDoc.data() })
        } else {
          console.error('No user found with the given userId:', user.uid)
        }
      } catch (error) {
        console.error('Error fetching user:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [user])

  // Escuchar cambios en tiempo real en el documento del usuario
  useEffect(() => {
    if (!user || !user.uid) {
      return
    }

    const userDocRef = doc(db, 'users', user.uid)

    const unsubscribe = onSnapshot(userDocRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        setUserData({ id: docSnapshot.id, ...docSnapshot.data() })
      } else {
        console.error('No user found with the given userId:', user.uid)
      }
    })

    return () => {
      unsubscribe()
    }
  }, [user])

  return { userData, loading }
}
