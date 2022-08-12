const RecipesCard =({ recipe})=>{
    return(
        <span className="recipe-card">
        <h3>{recipe.name}</h3>
        <h2>{recipe.image}</h2>
        <h4>{recipe.body}</h4>

    </span>
    )
}
export default RestaurantCard