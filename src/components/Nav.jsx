import { NavLink } from 'react-router-dom'
import '../sideNav.css'
import { useEffect } from 'react'


const Nav =({ authenticated, user, handleLogOut })=>{
    let authenticatedOptions
    if (user) {
        authenticatedOptions = (
<<<<<<< HEAD

          <div className='pub_opts'>
=======
          <div>
>>>>>>> 17400ea21250239e38faf963c3e8c40d1b0a02c3
            <NavLink className='nav_links' to="/feed">Feed</NavLink>
            <NavLink className='nav_links' onClick={handleLogOut} to="/">
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
