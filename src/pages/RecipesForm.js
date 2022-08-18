import Client from '../services/api'
import React from 'react'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../globals'
import SideNav from '../components/SideNav'
import { Navigate, useNavigate } from 'react-router-dom'
function RecipeForm({ user, authenticated }) {
  let navigate = useNavigate()
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
        let res = await Client.get(`${BASE_URL}/api/recipes/all`)
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
    let res = await Client.post(`${BASE_URL}/api/recipes/create`, formState)
    console.log(res)
    setFormState(initialState)
    navigate('/feed')
  }

  return user && authenticated ? (
    <div className="new_recipe">
      <div>
        <SideNav />
      </div>

      <h1 className="forms_header">Add A New Recipe: </h1>

      <form onSubmit={handleSubmit}>
        <div className="form_container_sign_in">
          <div className="input1_sign_in">
            <label>Title: </label>
            <input
              type="text"
              id="title"
              value={recipe.title}
              onChange={handleChange}
              name={'title'}
              placeholder={'title'}
            />
          </div>

          <div className="input1_sign_in">
            <label>Image Link: </label>
            <input
              type="text"
              id="image"
              value={recipe.image}
              onChange={handleChange}
              name={'image'}
              placeholder={'image'}
            />
          </div>

          <div className="input1_sign_in">
            <label>Ingredients: </label>
            <textarea
              type="text"
              id="ingredients"
              value={recipe.ingredients}
              onChange={handleChange}
              name={'ingredients'}
              placeholder={'ingredients'}
            />
          </div>

          <div className="input1_sign_in">
            <label>Directions: </label>
            <textarea
              id="directions"
              value={recipe.directions}
              onChange={handleChange}
              name="directions"
              placeholder={'directions'}
            />
          </div>

          <div className="input1_sign_in">
            <label>Category: </label>
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
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  ) : (
    <div className="new_recipe">
      <h3>Oops! You must be signed to add a recipe!</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default RecipeForm
