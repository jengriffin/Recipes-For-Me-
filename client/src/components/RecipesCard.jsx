const RecipesCard =({ recipe})=>{
    return(
        <span className="recipe-card">
        <h3>{recipe.name}</h3>
        <h2>{recipe.image}</h2>
        <h4>{recipe.ingredients}</h4>
        <h4>{recipe.directions}</h4>
        <h4>{recipe.category}</h4>
    </span>
    )
}
export default RestaurantCard