import { NavLink } from 'react-router-dom'

const Nav =()=>{
    return(
     <div className='navbar_container'>
     <nav>

        <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/recipeform'>Add a Recipe</NavLink>
        <img className='header_logo' src='https://gdurl.com/R93j'/>
        <NavLink to='/signin'>Sign In</NavLink>
        <NavLink to='/register'>Register</NavLink>
        <NavLink to='/feed'>Recipes</NavLink>

        </div>
     </nav>
     </div>
    )
}
export default Nav