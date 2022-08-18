import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
import SideNav from '../components/SideNav'
import '../App.css'
import '../sideNav.css'
const Register = () => {
  const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  const [formValues, setFormValues] = useState({})
  let navigate = useNavigate()
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      userName: formValues.name,
      email: formValues.email,
      password: formValues.password
    })
    setFormValues(initialState)
    navigate('/signin')
  }
  return (
    <div className="register">
      <div>
        <SideNav />
      </div>

      <div className="forms_section_register">
        <h1 className="forms_header">Register New Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="form_container_sign_in">
            <div className="input1_sign_in">
              <label htmlFor="name">Name: </label>
              <input
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="John Smith"
                value={formValues.name}
                required
              />
            </div>
            <div className="input1_sign_in">
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
                placeholder="Password"
                value={formValues.password}
                required
              />
            </div>
            <div className="input1_sign_in">
              <label htmlFor="confirmPassword">Confirm Password: </label>
              <input
                onChange={handleChange}
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formValues.confirmPassword}
                required
              />
            </div>
            <div className="button_sign_in">
              <button
                disabled={
                  !formValues.email ||
                  (!formValues.password &&
                    formValues.confirmPassword === formValues.password)
                }
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Register
