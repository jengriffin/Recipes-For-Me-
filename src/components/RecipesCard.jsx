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
    <span className="recipe_grid">
      <h3 className='recipe_title'>{recipe.title}</h3>
      <img className='recipe_card' src={recipe.image} alt="recipe image" />
      <h4 className='recipe_subs'>{recipe.ingredients}</h4>
      <h4 className='recipe_subs'>{recipe.directions}</h4>
    </span>
  )
}
export default RecipesCard
