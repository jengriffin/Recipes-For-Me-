import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import '../sideNav.css'

import SideNav from './SideNav'
const RecipesCard = (props) => {
  let navigate = useNavigate()
  const [recipe, setRecipe] = useState('')

  const initialState = {
    title: '',
    image: '',
    ingredients: '',
    directions: '',
    category: ''
  }

  const [formState, setFormState] = useState(initialState)
  let { id } = useParams()

  useEffect(() => {
    const selectedRecipe = async () => {
      try {
        let res = await axios.get(`${BASE_URL}/api/recipes/view/${id}`)
        console.log(res.data)
        setRecipe(res.data)
      } catch (eer) {
        console.log(eer)
      }
    }
    setRecipe(selectedRecipe)
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    // do something with the data in the component state
    let res = await axios.put(`${BASE_URL}/api/recipes/${id}`, formState)
    console.log(res)
    // clear the form
    setFormState(initialState)
    alert('You have successfully updated the recipe!')
    navigate('/feed')
  }

  const deleteRecipe = async () => {
    // console.log(id)
    let res = await axios.delete(`${BASE_URL}/api/recipes/${id}`, formState)
    alert('You have successfully deleted the recipe!')
    navigate('/feed')
  }
  const refreshPage = () => {
    window.location.reload()
  }

  console.log(recipe.category)

  return (
    <div className="details_page">
      <div>
        
        <SideNav />
      </div>
      <div className='details_grid'>
        <h1 className='recipe_title'>{recipe.title}</h1>
        <img className='recipe_card' src={recipe.image} alt="recipe image" />
        <div className='details_container'>
          <h1 className='details_header'>Ingredients:</h1>
          <h1 className='detail'>{recipe.ingredients}</h1>
          <h1 className='details_header2'>Directions:</h1>
          <h1 className='detail'>{recipe.directions}</h1>
          {/* <h1 className='details_header2'>Category:</h1> */}
          <h1 className='detail'>{recipe.category}</h1>
        </div>

<div className='forms_section'>
        <h1 className='forms_header'>Edit this Recipe</h1> 
        <form onSubmit={handleSubmit}>
        <div className='form_container'>
          <div className='input1'>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            onChange={handleChange}
            value={formState.title}
            placeholder={recipe.title}
          />
          </div>
          <div className='input1'>
          <label htmlFor="image">Image:</label>
          <input
            type="text"
            id="image"
            onChange={handleChange}
            value={formState.image}
            placeholder={recipe.image}
          />
          </div>
          <div className='input1'>
          <label htmlFor="ingredients">Ingredients:</label>
          <textarea
            type="text"
            id="ingredients"
            onChange={handleChange}
            value={formState.ingredients}
            placeholder={recipe.ingredients}
          />
          </div>
          <div className='input2'>
          <label htmlFor="directions">Directions:</label>
          <textarea
            type="text"
            id="directions"
            onChange={handleChange}
            value={formState.directions}
            placeholder={recipe.directions}
          />
          </div>
          <div className='input1'>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            onChange={handleChange}
            value={formState.category}
          >
            <option value="Default" selected> -Select One- </option>
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
          <div className='form_button'>
          </div>
            <div className='button1'>
            <button type="submit" onClick={refreshPage}>
              Update Recipe
            </button>
            </div>
            </div>
        </form>

        <div className='button2'>
            <button onClick={deleteRecipe}>Delete Recipe</button>
          </div>
          </div>
        </div>

    </div>
  )
}
export default RecipesCard
