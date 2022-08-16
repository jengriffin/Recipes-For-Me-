import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

import Nav from '../components/Nav'
import SideNav from '../components/SideNav'

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
      let res = await axios.get(`${BASE_URL}/api/recipes/all`)
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
              <h1>{recipe.title}</h1>
              <img
                style={{ display: 'block' }}
                src={recipe.image}
                alt={recipe.title}
              />
              <h1>{recipe.title}</h1>
            </div>
          ))
        : ''}
    </div>
  )
}

export default Recipes
