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

        setRecipe(res.data)
      } catch (eer) {}
    }
    getRecipe()
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    let res = await axios.post(`${BASE_URL}/recipeform`, formState)

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
          id="directions"
          cols="30"
          rows="10"
          value={recipe.directions}
          onChange={handleChange}
          name={'directions'}
          placeholder={'directions'}
        />
        <label for="category">Category:</label>
        <select id="category">
          <option value="Diabetic Friendly">Diabetic Friendly</option>
          <option value="Gluten Free">Gluten Free</option>
          <option value="Halal">Halal</option>
          <option value="Kosher">Kosher</option>
          <option value="Lactose Free">Lactose Free</option>
          <option value="Low Sodium">Low Sodium</option>
          <option value="Vegan">Vegan</option>
          <option value="Vegetarian">Vegetarian</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default RecipeForm
