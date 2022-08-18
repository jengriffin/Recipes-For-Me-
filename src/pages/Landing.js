import '../App.css'
import '../sideNav.css'
import { NavLink } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="landing">
      <NavLink className="landing_link" to="/home">
        <img
          className="hero_img"
          src="https://gdurl.com/ViUl"
          alt="yummy pic"
        />
      </NavLink>
    </div>
  )
}
export default Landing
