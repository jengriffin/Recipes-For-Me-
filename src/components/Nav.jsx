import { NavLink } from 'react-router-dom'
import '../sideNav.css'


const Nav =({ authenticated, user, handleLogOut })=>{
    let authenticatedOptions
    if (user) {
        authenticatedOptions = (
<<<<<<< HEAD
          <div>
            <NavLink className='nav_links' to="/feed">Feed</NavLink>
            <NavLink className='nav_links' onClick={handleLogOut} to="/">
              Sign Out
            </NavLink>
          </div>
=======
<nav>
    
            <NavLink to="/feed">Feed</NavLink>
            <NavLink onClick={handleLogOut} to="/">
            Sign Out
            </NavLink>
        </nav>
>>>>>>> e4c1a81980913e74b9ffc6792967b660d09a4fb4
        )
    }
    
<<<<<<< HEAD
      const publicOptions = (
        <div className='pub_opts'>
        <NavLink className='nav_links' to='/signin'>Sign In</NavLink>
        <NavLink className='nav_links' to='/register'>Register</NavLink>
        </div>
      )
=======
    const publicOptions = (
        <nav>
        <NavLink className='nav_links' to='/signin'>Sign In</NavLink>
        <NavLink className='nav_links' to='/register'>Register</NavLink>
        </nav>
    )
>>>>>>> e4c1a81980913e74b9ffc6792967b660d09a4fb4
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
