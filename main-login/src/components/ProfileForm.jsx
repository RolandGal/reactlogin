import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useUserProfile } from '../hooks/useUserProfile'
import './ProfileForm.css'
export function ProfileForm() {
  const [image, setImage] = useState(null)
  const [description, setDescription] = useState('')
  const { user, updateProfileImage, updateUserDescription } = useAuth()
  const { userData } = useUserProfile()

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (image) {
      await updateProfileImage(image)
      setImage(null)
    }
    if (description) {
      await updateUserDescription(description)
      setDescription('')
    }
  }

  return (
    <>
      <section>
        <h4>User Information</h4>
        <p>
          Profile Picture:
          <img
            className='userprofile-img'
            src={user?.photoURL}
            alt={`Imagen de perfil de ${user.displayName}`}
          />
        </p>
        <p>email: {user.email}</p>
        <p>User Name: {user.displayName}</p>
        <p>Description: {userData?.description}</p>
      </section>
      <section>
        <form className='form2' onSubmit={handleSubmit}>
          <label htmlFor='file'>New Profile Picture:</label>
          <input className='selecarc' type='file' onChange={handleImageChange} />
          <label htmlFor='user-description'>New Description: </label>
          <textarea 
            type='text'
            value={description}
            id='user-description'
            onChange={handleDescriptionChange}
          />
          <button className='actperfil' type='submit'>Update Profile</button>
        </form>
        <footer>
    <p>&copy; 2023 JuegosFlix. All rights reserved.</p>
    <Link to={'/PrivacyNotice'}>Privacy Notice</Link><br></br>
    <Link to={'/LegalNotice'}>Legal Notice</Link>
  </footer>
      </section>
    </>
  )
}
