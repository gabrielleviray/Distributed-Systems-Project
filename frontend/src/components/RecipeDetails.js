import { Link } from 'react-router-dom'

const RecipeDetails = ({ recipe }) => {
    
    
    // const handleSubmit = async () => {
    //     const response = await fetch('/api/recipe/all')
    // }

    let DateTime = recipe.createdAt
    let timestamp = new Date(DateTime).getTime().toString();
    let Day = new Date(DateTime).getDate();
    let Month = new Date(DateTime).toLocaleString('default', {Month: 'short'});
    let Year = new Date(DateTime).getFullYear();
    // let convertedDateTime = `${Month}/${Day}/${Year}`;
    let convertedDateTime = `${Month}`;

    return(

        <div className = "card home-card" >
            <h4> {recipe.title} </h4>
            <p><strong> Time: </strong> {recipe.time} </p>
            <p><strong> Ingredients: </strong> {recipe.ingredients} </p>
            <p><strong> Directions: </strong> {recipe.directions} </p>
            <Link to={"/user/"+recipe.username}><p align="right">posted by {recipe.author} on {Month}</p></Link>
            {/* <span onClick={onSubmit}>delete</span> */}
        </div>
    )
}

export default RecipeDetails