import { NavLink } from 'react-router-dom'
import '../sideNav.css'

const Nav =()=>{
    return(
     <div className='navbar_container'>
        <NavLink className='nav_links' to='/'>Home</NavLink>
        <NavLink className='nav_links' to='/feed'>Recipes</NavLink>
        <img className='header_logo' src='https://gdurl.com/R93j'/>
        <NavLink className='nav_links' to='/signin'>Sign In</NavLink>
        <NavLink className='nav_links' to='/register'>Register</NavLink>

     </div>
    )
}
export default Nav