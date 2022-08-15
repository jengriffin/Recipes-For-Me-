import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/recipeform">Add a Recipe</NavLink>
        <NavLink to="/signin">Sign In</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
    </nav>
  )
}
export default Nav
