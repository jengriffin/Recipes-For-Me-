import { NavLink } from 'react-router-dom'
import '../sideNav.css'
import { useEffect } from 'react'


const Nav =({ authenticated, user, handleLogOut })=>{
    let authenticatedOptions
    if (user) {
        authenticatedOptions = (
          <div>
            <NavLink className='nav_links' to="/feed">Feed</NavLink>
            <NavLink className='nav_links' onClick={handleLogOut} to="/">
              Sign Out
            </NavLink>
            <NavLink to="/feed">Feed</NavLink>
            <NavLink onClick={handleLogOut} to="/">
            Sign Out
            </NavLink>
          </div>
        )
    }

      const publicOptions = (
        <div className='pub_opts'>
        <NavLink className='nav_links' to='/signin'>Sign In</NavLink>
        <NavLink className='nav_links' to='/register'>Register</NavLink>
        </div>
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
