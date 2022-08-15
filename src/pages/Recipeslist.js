import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { BASE_URL } from '../globals'

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
      let res = await axios.get(`${BASE_URL}/feed`)
      console.log(res.data)
      setRecipe(res.data)
    }
    getRecipes()
  }, [props.recipe])

  return (
    <div className="recipe-grid">
      {recipe
        ? recipe.map((recipes) => (
            <div
              className="recipe-card"
              onClick={() => showRecipes(recipe)}
              key={recipe._id}
            >
              <img
                style={{ display: 'block' }}
                src={recipe.image}
                alt={recipe.name}
              />
              <h1>{recipe.name}</h1>
            </div>
          ))
        : ''}
    </div>
  )
}

export default Recipes
