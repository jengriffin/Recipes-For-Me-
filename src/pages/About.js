// import { Link } from 'react-router-dom'
import '../App.css'
import '../sideNav.css'
import SideNav from '../components/SideNav'
const About = () => {
  return (
    <div className="about">
      <div>
        <SideNav />
      </div>
      <p className="detail">
        A recipe website tailor made for all dietary needs and healthy choices!
        Users can browse the webpages for various recipes and login to add their
        own recipe to the collections online. Users can also subsequently update
        and delete their posted recipes.
      </p>
      <h2>
        Check out These <i>Amazing</i> Food Pantries!
      </h2>
      <ul>
        <div className="links">
          <li>
            <a class="banks" href="https://www.cityharvest.org">
              City Harvest
            </a>
          </li>
          <li>
            <a class="banks" href="https://food4lives.org">
              Food 4 Lives
            </a>
          </li>
          <li>
            <a class="banks" href="https://foodbankiowa.org">
              Food Bank Iowa
            </a>
          </li>
          <li>
            <a class="banks" herf="https://www.gacoutreach.com/services">
              GA Out Reach
            </a>
          </li>
          <li>
            <a class="banks" href="https://www.centraltexasfoodbank.org/">
              Central Texas Food Bank
            </a>
          </li>
        </div>
      </ul>
      <footer>
        <a href="https://github.com/jengriffin/Recipes-For-Me-/blob/main/README.md">
          More from the development team!
        </a>
      </footer>
    </div>
  )
}
export default About
