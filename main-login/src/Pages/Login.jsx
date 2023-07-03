import { useRef, useState, useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useNavigate, Link } from 'react-router-dom'
import './Login.css'
// test@test Test123456789!
const LOGIN_URL = '/auth'

export function Login() {
  const { login, user } = useAuth()
  const navigate = useNavigate()

  const emailRef = useRef()
  const errRef = useRef()

  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    emailRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [email, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await login(email, pwd)
      setSuccess(true)
      setEmail('')
      setPwd('')
    } catch (e) {
      setErrMsg(e.message)
      errRef.current.focus()
      //TODO gestionar los códigos de error para mostrarlos personalizados.
    }
  }

  return (
    <>
      {success && setTimeout(() => navigate('/'), 2000) ? (
        <section className='login-section'>
          <h1>You logeed in</h1>
          <br />
          <p>Welcome{user.displayName}</p>
        </section>
      ) : (
        <section className='login-section'>
          <p
            ref={errRef}
            className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live='assertive'
          >
            {errMsg}
          </p>
          <h1>Log in</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Email:</label>
            <input
              type='text'
              id='username'
              ref={emailRef}
              autoComplete='off'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />

            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button className='inibtn'>Log in</button>
          </form>
          <p>
            Need to Register?
            <br />
            <span className='line'>
              {/*router link*/}
              <Link to='/register'>Register</Link>
            </span>
          </p>
          <footer>
    <p>&copy; 2023 JuegosFlix. All rights reserved.</p>
    <Link to={'/PrivacyNotice'}>Privacy Notice</Link><br></br>
    <Link to={'/LegalNotice'}>Legal Notice</Link>
  </footer>
        </section>
        
      )}
    </>
  )
}
