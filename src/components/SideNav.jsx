import { NavLink } from 'react-router-dom'
import '../App.css'
import '../sideNav.css'

const SideNav =()=>{

    
    return(
    <div className='sidenav'>
        <div className='sidenav_links'>
        <NavLink className='tab' to='/feed'>All Recipes</NavLink>
        </div>
        <div className='sidenav_links'>
        <NavLink className='tab' to='/'>My Recipes</NavLink>
        </div>
        <div className='sidenav_links'>
        <NavLink className='tab' to='/recipeform'>Add a Recipe</NavLink>
        </div>
        <div className='sidenav_links' >
        <a className='tab' href='#top' >Back to Top</a>
        </div>
    </div>
    )
}
export default SideNav