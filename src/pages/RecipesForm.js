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

  const handleChange = (event) => {
    const [formValues, setFormValues] = useState({
      name: '',
      image: '',
      ingredients: '',
      directions: '',
      category: ''
    })

    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)
    let res = await axios.post(`${BASE_URL}/recipeform`, formState)
    console.log(res)
    setFormState(initialState)
  }

  return (
    <div className="form">
      <div>
        <Nav />
        <SideNav />
      </div>
      <h1>Add A New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          value={recipe.title}
          onChange={handleChange}
          name={'title'}
          placeholder={'title'}
        />
        <input
          type="text"
          id="image"
          value={recipe.image}
          onChange={handleChange}
          name={'image'}
          placeholder={'image'}
        />
        <input
          type="text"
          id="ingredients"
          value={recipe.ingredients}
          onChange={handleChange}
          name={'ingredients'}
          placeholder={'ingredients'}
        />
        <input
          type="text-area"
          id="directions"
          value={recipe.directions}
          onChange={handleChange}
          name={'directions'}
          placeholder={'directions'}
        />
        <input
          type="text"
          id="category"
          value={recipe.category}
          onChange={handleChange}
          name={'category'}
          placeholder={'category'}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default RecipeForm
