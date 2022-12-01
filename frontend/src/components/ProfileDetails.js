const ProfileDetails = ({ myRecipe }) => {
    return (
        <div className = "card home-card">
            <h4> {myRecipe.title} </h4>
            {/* <p><strong> Time: </strong> {myRecipe.time} </p>
            <p><strong> Ingredients: </strong> {myRecipe.ingredients} </p>
            <p><strong> Directions: </strong> {myRecipe.directions} </p>
            <p>{myRecipe.createdAt} </p> */}
            {/* <span onClick={onSubmit}>delete</span> */}
        </div>
    )
}

export default ProfileDetails