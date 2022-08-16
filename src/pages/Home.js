import '../App.css'
import '../sideNav.css'

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
      <img className="food" src="https://gdurl.com/7eIn" alt="yummy pic" />
      <img className="food" src="https://gdurl.com/QlAC" alt="yummy pic" />
      <img className="food" src="https://gdurl.com/U5_G" alt="yummy pic" />
      <img className="food" src="https://gdurl.com/f2hu" alt="yummy pic" />
      <img className="food" src="https://gdurl.com/Vb6G" alt="yummy pic" />
      <img
        className="recipe_card"
        src="https://gdurl.com/BHhM"
        alt="recipe card"
      />
    </div>
  )
}
export default Home
