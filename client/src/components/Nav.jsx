import { NavLink } from 'react-router-dom'

const Nav =()=>{
    return(
     <nav>
        <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/add'>Add a Recipe</NavLink>
        <NavLink to='/'>Sign In</NavLink>
        <NavLink to='/'>Register</NavLink>
        </div>
     </nav>
    )
}
export default Nav