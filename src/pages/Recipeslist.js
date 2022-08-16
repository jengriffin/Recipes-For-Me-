
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
<<<<<<< HEAD

//import { BASE_URL } from '../globals'
=======
import { BASE_URL } from '../globals'
>>>>>>> b5bcd3db199d5f551f5d47034ac78f9eaf05c649

const Recipes = (props) => {
  let navigate = useNavigate()

  const [recipe, setRecipe] = useState('')

  const showRecipes = (recipe) => {
    console.log(recipe._id)
    navigate()
  }

  useEffect(() => {
    const getRecipes = async () => {
      console.log('get recipes')
      let res = await axios.get(
        'https://recipes-for-me-api.herokuapp.com/api/recipes/all'
      )
      console.log(res.data)
      setRecipe(res.data)
    }
    getRecipes()
  }, [props.recipe])

  return (
    <div className="recipe-grid">
      <div>
        <Nav />
        <SideNav />
      </div>
      {recipe
        ? recipe.map((recipe) => (
            <div className="recipe-card">
              <h1>{recipe.name}</h1>
              <img
                style={{ display: 'block' }}
                src={recipe.image}
                alt={recipe.title}
              />
<<<<<<< HEAD
              <h1>{recipe.title}</h1>
=======
>>>>>>> b5bcd3db199d5f551f5d47034ac78f9eaf05c649
            </div>
          ))
        : ''}
    </div>
  )
}

export default Recipes
=======
// import { useNavigate, Link } from 'react-router-dom'
// import axios from 'axios'
// import { useState } from 'react'
// import { useEffect } from 'react'
// import { BASE_URL } from '../globals'
// // import { BASE_URL } from '../globals'

// // const BASE_URL = 'https://recipes-for-me-api.herokuapp.com/'

// import { BASE_URL } from '../globals'

// const Recipes = (props) => {
//   let navigate = useNavigate()

//   const [recipe, setRecipe] = useState('')

//   const showRecipes = (recipe) => {
//     console.log(recipe._id)
//     navigate()
//   }

//   useEffect(() => {
//     const getRecipes = async () => {
//       console.log('get recipes')
//       let res = await axios.get(
//         'https://recipes-for-me-api.herokuapp.com/api/recipes/all'
//       )
//       console.log(res.data)
//       setRecipe(res.data)
//     }
//     getRecipes()
//   }, [props.recipe])

//   return (
//     <div className="recipe-grid">
//       {recipe
//         ? recipe.map((recipe) => (
//             <div
//               className="recipe-card"
//               onClick={() => showRecipes(recipe)}
//               key={recipe._id}
//             >
//               <img
//                 style={{ display: 'block' }}
//                 src={recipe.image}
//                 alt={recipe.name}
//               />
//               <h1>{recipe.name}</h1>
//             </div>
//           ))
//         : ''}
//     </div>
//   )
// }

// export default Recipes

