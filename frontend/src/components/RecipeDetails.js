const RecipeDetails = ({ recipe }) => {
    return(
        <div classname="recipe-details">
            <h4> {recipe.title} </h4>
            <p><strong> Time: </strong> {recipe.time} </p>
            <p><strong> Ingredients: </strong> {recipe.ingredients} </p>
            <p><strong> Directions: </strong> {recipe.ingredients} </p>
            <p>{recipe.createdAt} </p>
        </div>
    )
}

export default RecipeDetails