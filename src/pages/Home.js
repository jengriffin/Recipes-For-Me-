//import '../App.css'
import { Route, Router } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SideNav from '../components/SideNav'
import Nav from '../components/Nav'

const Home = () => {
  return (
    <div className="home">
      <div>
        <Nav />
        <SideNav />
      </div>
      <div>
        <img sre="" alt="background" />
      </div>
      <div>
        {/* <Link to="/">Sign In</Link>
        <Link to="/register">Register</Link> */}
      </div>
    </div>
  )
}
export default Home
