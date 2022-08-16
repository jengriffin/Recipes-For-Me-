import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../globals"
import { Navigate } from "react-router-dom"
const RecipesCard =({ recipe })=>{
    useEffect(() => {
        const [recipe, setRecipe] = useState('')
        const selectedRecipe = async()=>{
          try {
            let res = await axios.get(`${BASE_URL}${id}`)
            // console.log(res.data)
            setRecipe(res.data)
          } catch(eer){
            console.log(eer)
          }
        }
        setRecipe(selectedRecipe)
      },[])
    return(
        <span className="recipe-card">
        <h3>{recipe.title}</h3>
        <h2>{recipe.image}</h2>
        <h4>{recipe.ingredients}</h4>
        <h4>{recipe.directions}</h4>
        
    </span>
    )
}
export default RecipesCard