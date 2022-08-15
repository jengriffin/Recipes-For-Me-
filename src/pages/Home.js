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
        {/* <img
          className="img_bkg"
          src="https://gdurl.com/nZEd"
          alt="background"
        /> */}
      </div>
    </div>
  )
}
export default Home
