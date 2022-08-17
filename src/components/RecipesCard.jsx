import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const RecipesCard = (props) => {
  const [recipe, setRecipe] = useState('')
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

  return (
    <div className='details_page'>
      <div className='details_grid'>
        <h1 className='recipe_title'>{recipe.title}</h1>
        <img className='recipe_card' src={recipe.image} alt="recipe image" />
        <div className='details_container'>
          <h1 className='details_header'>Ingredients:</h1>
          <h1 className='detail'>{recipe.ingredients}</h1>
          <h1 className='details_header2'>Directions:</h1>
          <h1 className='detail'>{recipe.directions}</h1>
        </div>
      </div>
    </div>
  )
}
export default RecipesCard
