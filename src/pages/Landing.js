import '../App.css'
import '../sideNav.css'

import { Route, Router } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="landing">
      <p>Welcome</p>
      <NavLink className="landing_link" to="/home">
        <img className="hero_img" src="https://gdurl.com/ViUl" />
      </NavLink>
    </div>
  )
}
export default Landing
