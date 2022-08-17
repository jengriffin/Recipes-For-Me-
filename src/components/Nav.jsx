import { NavLink } from 'react-router-dom'
import '../sideNav.css'


const Nav =({ authenticated, user, handleLogOut })=>{
    let authenticatedOptions
    if (user) {
        authenticatedOptions = (
          <nav>
           
            <NavLink to="/feed">Feed</NavLink>
            <NavLink onClick={handleLogOut} to="/">
              Sign Out
            </NavLink>
          </nav>
        )
      }
    
      const publicOptions = (
        <nav>
        <NavLink className='nav_links' to='/signin'>Sign In</NavLink>
        <NavLink className='nav_links' to='/register'>Register</NavLink>
        </nav>
      )
    return(
     <div className='navbar_container'>
        <NavLink className='nav_links' to='/home'>Home</NavLink>
        <NavLink className='nav_links' to='/about'>About</NavLink>
        <img className='header_logo' src='https://gdurl.com/R93j'/>
        {authenticated && user ? authenticatedOptions : publicOptions}
        </div>
        
    )
}
export default Nav
