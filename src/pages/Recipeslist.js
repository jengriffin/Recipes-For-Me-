import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import SideNav from '../components/SideNav'
import { BASE_URL } from '../globals'

const Recipes = (props) => {
  let navigate = useNavigate()

  const [recipe, setRecipe] = useState('')

  const showRecipes = (recipe) => {
    console.log(recipe.id)
    navigate(`/recipes/${recipe.id}`)
  }

  useEffect(() => {
    const getRecipes = async () => {
      console.log('get recipes')
      let res = await axios.get(`${BASE_URL}/api/recipes/all`)
      console.log(res.data)
      setRecipe(res.data)
    }
    getRecipes()
  }, [props.recipe])

  return (
    <div className="list_all">
      <div>
        <SideNav />
      </div>
      {recipe
        ? recipe.map((recipe) => (
            <div
              className="recipe_grid"
              onClick={() => showRecipes(recipe)}
              key={recipe.id}
            >
              <h1 className="recipe_title">{recipe.title}</h1>
              <img
                className="recipe_card"
                style={{ display: 'block' }}
                src={recipe.image}
                alt={recipe.title}
              />
            </div>
          ))
        : ''}
    </div>
  )
}

export default Recipes
