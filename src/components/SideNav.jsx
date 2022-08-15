import { NavLink } from 'react-router-dom'

const SideNav =()=>{
    return(
     <nav>
        <div>
        <NavLink to='/myrecipes'>My Recipes</NavLink>
        <NavLink to='/'>Back to top</NavLink>
        </div>
     </nav>
    )
}
export default SideNav