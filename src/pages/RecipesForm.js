import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../globals'
import Nav from '../components/Nav'
import SideNav from '../components/SideNav'
function RecipeForm() {
  const initialState = {
    title: '',
    image: '',
    ingredients: '',
    directions: '',
    category: ''
  }
  const [recipe, setRecipe] = useState({})

  const [formState, setFormState] = useState(initialState)
  useEffect(() => {
    const getRecipe = async () => {
      try {
        let res = await axios.get(`${BASE_URL}/recipeform`)
        // console.log(res.data)
        setRecipe(res.data)
      } catch (eer) {
        // console.log(eer)
      }
    }
    getRecipe()
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    // console.log(formState)
    let res = await axios.post(`${BASE_URL}/recipeform`, formState)
    // console.log(res)
    setFormState(initialState)
  }

  return (
    <div className="form">
      <div>
        <Nav />
        <SideNav />
      </div>
      <h1 className="recipe_title">Add A New Recipe</h1>
      <form className="form_container" onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          value={recipe.name}
          onChange={handleChange}
          name={'name'}
          placeholder={'name'}
        />
        <input
          type="text"
          id="state"
          value={recipe.image}
          onChange={handleChange}
          name={'image'}
          placeholder={'image'}
        />
        <input
          type="text"
          id="image"
          value={recipe.ingredients}
          onChange={handleChange}
          name={'ingredients'}
          placeholder={'ingredients'}
        />
        <input
          type="text-area"
          id="description"
          value={recipe.directions}
          onChange={handleChange}
          name={'directions'}
          placeholder={'directions'}
        />
        <input
          type="text"
          id="population"
          value={recipe.category}
          onChange={handleChange}
          name={'category'}
          placeholder={'category'}
        />
        <br></br>
        <button className="submit_button" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default RecipeForm
