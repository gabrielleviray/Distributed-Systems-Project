const RecipeDetails = ({ recipe }) => {
    
    
    // const handleSubmit = async () => {
    //     const response = await fetch('/api/recipe/all')
    // }

    return(

        <div className = "card home-card">
            <h4> {recipe.title} </h4>
            <p><strong> Time: </strong> {recipe.time} </p>
            <p><strong> Ingredients: </strong> {recipe.ingredients} </p>
            <p><strong> Directions: </strong> {recipe.directions} </p>
            <p>{recipe.createdAt} </p>
            {/* <span onClick={onSubmit}>delete</span> */}
        </div>
    )
}

export default RecipeDetails