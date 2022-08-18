import '../App.css'
import '../sideNav.css'
import SideNav from '../components/SideNav'

const Home = () => {
  return (
    <div className="home">
      <div>
        <SideNav />
      </div>
      <div className="recipe_grid">
        <h1 className="home_title">Lets Type things here! </h1>
        <img className="food" src="https://gdurl.com/7eIn" alt="yummy pic" />
      </div>
    </div>
  )
}
export default Home
