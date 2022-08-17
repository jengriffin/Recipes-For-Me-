import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Nav from './Nav'
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
    navigate(`/recipes/${id}`)
  }

  const deleteRecipe = async () => {
    // console.log(id)
    let res = await axios.delete(`${BASE_URL}/api/recipes/${id}`, formState)
    alert('You have successfully deleted the recipe!')
    navigate('/feed')
  }
  const refreshPage= ()=> {
    window.location.reload()
  }

  return (
 <div className='details_page'>
      <div>
        <Nav />
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
          <h1 className="detail">{recipe.category}</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            onChange={handleChange}
            value={formState.title}
            placeholder={recipe.title}
          />
          <label htmlFor="image">Image:</label>
          <input
            type="text"
            id="image"
            onChange={handleChange}
            value={formState.image}
            placeholder={recipe.image}
          />
          <label htmlFor="ingredients">Ingredients:</label>
          <input
            type="text"
            id="ingredients"
            onChange={handleChange}
            value={formState.ingredients}
            placeholder={recipe.ingredients}
          />
          <label htmlFor="directions">Directions:</label>
          <input
            type="text"
            id="directions"
            onChange={handleChange}
            value={formState.directions}
            placeholder={recipe.directions}
          />
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            onChange={handleChange}
            value={formState.category}
          >
            <option value="Diabetic Friendly">Diabetic Friendly</option>
            <option value="Gluten Free">Gluten Free</option>
            <option value="Halal">Halal</option>
            <option value="Kosher">Kosher</option>
            <option value="Lactose Free">Lactose Free</option>
            <option value="Low Sodium">Low Sodium</option>
            <option value="Vegan">Vegan</option>
            <option value="Vegetarian">Vegetarian</option>
          </select>

          <button id="updateRecipeBtn" type="submit" onClick={refreshPage}>
            Update Recipe
          </button>
        </form>

        <button onClick={deleteRecipe}>Delete</button>
      </span>
    </div>
  )
}
export default RecipesCard
