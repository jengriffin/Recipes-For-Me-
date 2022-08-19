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
  const refreshPage = () => {
    window.location.reload()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await SignInUser({
      email: formValues.email,
      password: formValues.password
    })
    navigate('/feed')
    refreshPage()
  }

  return (
    <div className="sign_in">
      <div className="buffer">
        <SideNav />
      </div>

      <div className="forms_section_sign_in">
        <h1 className="forms_header">Please Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="form_container_sign_in">
            <div className="new_email">
              <label htmlFor="email">Email: </label>
              <input
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="example@example.com"
                value={formValues.email}
                required
              />
            </div>
            <div className="input1_sign_in">
              <label htmlFor="password">Password: </label>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                value={formValues.password}
                required
              />
            </div>
            <div className="button_sign_in">
              <button disabled={!formValues.email || !formValues.password}>
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn
