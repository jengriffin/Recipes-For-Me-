import { useState } from 'react'
import SideNav from '../components/SideNav'
import '../App.css'
import '../sideNav.css'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const [formValues, setFormValues] = useState({ email: '', password: '' })
  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await SignInUser({
      email: formValues.email,
      password: formValues.password
    })
    navigate('/feed')
  }
  const refreshPage = () => {
    window.location.reload()
  }

  return (
    <div className="sign_in">
      <div className="card-overlay centered">
        <div>
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
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <button
            disabled={!formValues.email || !formValues.password}
            onClick={refreshPage}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
