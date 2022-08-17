import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'
import SideNav from '../components/SideNav'

const Register = () => {
  const initialState = {
    email: '',
    username: '',
    passwordDigest: '',
    confirmPasswordDigest: ''
  }

  const [formValues, setFormValues] = useState({})
  console.log(formValues)

  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.userName]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      email: formValues.email,
      username: formValues.userName,
      passwordDigest: formValues.passwordDigest
    })
    setFormValues(initialState)
    navigate('/signin')
  }

  return (
    <div className="signin">
      <div className="card-overlay centered">
        <div>
          <Nav />
          <SideNav />
        </div>
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="name">User Name</label>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="John Smith"
              value={formValues.userName}
              required
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.passwordDigest.}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <button
            disabled={
              !formValues.email ||
              (!formValues.passwordDigest &&
                formValues.confirmPassword === formValues.passwordDigest)
            }
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
