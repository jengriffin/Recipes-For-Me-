import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { BASE_URL } from '../globals'
import Nav from '../components/Nav'
import SideNav from '../components/SideNav'
const Recipes = (props) => {
  let navigate = useNavigate()

  const [recipe, setRecipe] = useState('')

  const showRecipes = (recipe) => {
    console.log(recipe._id)
    navigate()
  }

  useEffect(() => {
    const getRecipes = async () => {
      console.log('get recipes')
      let res = await axios.get(
        'https://recipes-for-me-api.herokuapp.com/api/recipes/all'
      )
      console.log(res.data)
      setRecipe(res.data)
    }
    getRecipes()
  }, [props.recipe])

  return (
    <div className="recipe-grid">
      <div>
        <Nav />
        <SideNav />
      </div>
      {recipe
        ? recipe.map((recipe) => (
            <div className="recipe-card">
              <h1>{recipe.name}</h1>
              <img
                style={{ display: 'block' }}
                src={recipe.image}
                alt={recipe.name}
              />
            </div>
          ))
        : ''}
    </div>
  )
}

export default Recipes
