import { NavLink } from 'react-router-dom'
import '../App.css'
import '../sideNav.css'

const SideNav =()=>{
    return(
    <div className='sidenav'>
        <div className='sidenav_links'>
        <NavLink className='tab' to='/'>My Recipes</NavLink>
        </div>
        <div className='sidenav_links'>
        <NavLink className='tab' to='/'>Add a Recipe</NavLink>
        </div>
        <div className='sidenav_links'>
        <NavLink className='tab' to='/'>Back to Top</NavLink>
        </div>
    </div>
    )
}
export default SideNav