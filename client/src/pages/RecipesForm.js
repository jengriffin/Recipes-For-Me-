import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

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
        let res = await axios.get('http://localhost:3001/recipeform')
        console.log(res.data)
        setRecipe(res.data)
      } catch (eer) {
        console.log(eer)
      }
    }
    getRecipe()
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)
    let res = await axios.post('http://localhost:3001/recipeform', formState)
    console.log(res)
    setFormState(initialState)
  }

  return (
    <div className="form">
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
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default RecipeForm
