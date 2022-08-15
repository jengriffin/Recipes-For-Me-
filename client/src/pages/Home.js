//import './App.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="home">
      <div>
        <h1>Recipe for Me</h1>
        <h2></h2>
      </div>
      <div>
        <img sre="" alt="background" />
      </div>
      <div>
        <Link to="/">Sign In</Link>
        <Link to="/">Register</Link>
      </div>
    </div>
  )
}
export default Home
