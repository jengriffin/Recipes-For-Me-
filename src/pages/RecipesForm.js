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
        let res = await axios.get(`${BASE_URL}/api/recipes/all`)
        console.log(res.data)

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

    // console.log(formState)
    let res = await axios.post(`${BASE_URL}/api/recipes/create`, formState)
    console.log(res)
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
          name="directions"
          cols="300"
          rows="100"
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
