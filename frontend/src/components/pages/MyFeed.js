import React, { useState, useEffect } from 'react';
import RecipeDetails from '../RecipeDetails';

const MyFeed = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('/api/user/following-recipes', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            }
        }).then(res => res.json())
        .then(data => {
            // console.log(result)
            if (data.error) {
                setError(data.error);
                setLoading(false);
            } else {
                setRecipes(data.recipes);
                setLoading(false);
            }
        })
    }, []);

    return (
        <>
            {!loading && !error ? (
                <div>
                    <h4 align="center">My Feed</h4>
                    <div style={{maxWidth:"550px", margin:"0px auto"}}>
                        {recipes && recipes.length > 0 ? (
                            <div className= "recipes">
                                {recipes.map((recipe) => (
                                    <RecipeDetails key={recipe._id} recipe={recipe}/>
                                ))}
                            </div>
                        ) : (
                            <div align="center">
                                No recipes to show.
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div>{error}</div>
            )}

        </>
    )
}

export default MyFeed