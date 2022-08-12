import { NavLink } from 'react-router-dom'

const Nav =()=>{
    return(
     <nav>
        <h1>iRate</h1>
        <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/add'>Add a Recipe</NavLink>
        </div>
     </nav>
    )
}
export default Nav