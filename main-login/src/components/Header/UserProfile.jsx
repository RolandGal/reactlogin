import { Link } from 'react-router-dom'
import { useUserProfile } from '../../hooks/useUserProfile'

export function UserProfile() {
  const { userData, loading } = useUserProfile()

  if (loading) {
    return <div>Loading...</div>
  }

  if (!userData) {
    return (
      <div>
        {' '}
        <img src='https://via.placeholder.com/150' />
      </div>
    )
  }

  return (
    <figure className='userprofile-container'>
      <Link to='/userprofile'>
        <img
          className='userprofile-img'
          src={userData.profilePicture || 'https://via.placeholder.com/150'}
          alt={`Image profile of ${userData.username}`}
          width='150'
          height='150'
        />
      </Link>
      <h5>{userData.username}</h5>
    </figure>
  )
}
