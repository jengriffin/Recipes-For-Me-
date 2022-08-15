import { NavLink } from 'react-router-dom'

const Nav =()=>{
    return(
     <div className='navbar_container'>
     <nav>
        <div className='navbar'>
        <NavLink id='bottom' className='nav_link' to='/'>Home</NavLink>
        <NavLink id='bottom'  to='/add'>Add a Recipe</NavLink>
        <img className='header_logo' src='https://gdurl.com/R93j'/>
        <NavLink id='bottom'  to='/signin'>Sign In</NavLink>
        <NavLink id='bottom'  to='/register'>Register</NavLink>
        </div>
     </nav>
     </div>
    )
}
export default Nav