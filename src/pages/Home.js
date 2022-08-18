import '../App.css'
import '../sideNav.css'
import SideNav from '../components/SideNav'

const Home = () => {
  return (
    <div className="home">
      <div>
        <SideNav />
      </div>
      <img className="food" src="https://gdurl.com/7eIn" alt="yummy pic" />
      <img className="food" src="https://gdurl.com/QlAC" alt="yummy pic" />
      <img className="food" src="https://gdurl.com/U5_G" alt="yummy pic" />
      <img className="food" src="https://gdurl.com/f2hu" alt="yummy pic" />
      <img className="food" src="https://gdurl.com/Vb6G" alt="yummy pic" />
    </div>
  )
}
export default Home
