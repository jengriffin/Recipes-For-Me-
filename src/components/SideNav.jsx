import { NavLink } from 'react-router-dom'
import '../App.css'

const SideNav =()=>{
    return(
    <div className='sidenav'>
        <nav>
        <div>
        <NavLink className='sidenav_button' to='/'>My Recipes</NavLink>
        <NavLink className='sidenav_button' to='/'>Back to top</NavLink>
        </div>
    </nav>
    </div>
    )
}
export default SideNav