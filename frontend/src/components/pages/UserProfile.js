import React, { useEffect, useState, useContext } from 'react'
import M from 'materialize-css'
import { AuthContext } from '../../App'
import { useParams } from 'react-router-dom'
import RecipeDetails from '../RecipeDetails'

const UserProfile = ()=> {
    const {state, dispatch} = useContext(AuthContext)
    const [userId, setUserId] = useState(0);
    const [name, setName] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [isFollowing, setIsFollowing] = useState(false);
    const [isMe, setIsMe] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const{username} = useParams()
    // console.log(username)

    useEffect(()=>{
        fetch(`/api/user/${username}`, {
            headers:{
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            // console.log(result)
            if (result.error) {
                setError(result.error);
                setLoading(false);
            } else {
                setUserId(result.id);
                setName(result.name);
                setRecipes(result.recipes);
                setIsFollowing(result.isFollowing);
                setIsMe(result.isMe);
                setLoading(false);
            }
        })
    }, [username])

    const follow = () => {
        fetch(`/api/user/follow`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            },
            body: JSON.stringify({
                followId: userId
            })
        }).then(res => res.json())
        .then(data => {
            if (data.error) {
                M.toast({html: 'Something went wrong. Please try again later.', classes: "#b71c1c red darken-4"})
            } else {
                M.toast({html: `Followed ${name}`, classes: "#43a047 green darken-1"})
                setIsFollowing(true);
            }
        })
    }

    const unfollow = () => {
        fetch(`/api/user/unfollow`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            },
            body: JSON.stringify({
                unfollowId: userId
            })
        }).then(res => res.json())
        .then(data => {
            if (data.error) {
                M.toast({html: 'Something went wrong. Please try again later.', classes: "#b71c1c red darken-4"})
            } else {
                M.toast({html: `Unfollowed ${name}`, classes: "#43a047 green darken-1"})
                setIsFollowing(false);
            }
        })
    }

    return(
        <>
            {!loading && !error ? (
                <div style={{maxWidth:"550px", margin:"0px auto"}}>
                    <div style={{ display: "flex", justifyContent:"space-around", margin:"18px 0px", borderBottom:"1px solid grey", }}>
                        <div>
                            <img style={{width:"160px", height:"160px", borderRadius:"80", marginTop: "20px"}}
                            src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"/>
                        </div>
                        <div>
                            <h4 align="center">{name}'s Recipes</h4>
                            <div style={{display:"flex", justifyContent:"space-between", width:"95%", paddingBottom:"15px" }}>
                              
                                    <h6 >{recipes.length} recipes </h6>
                                    <h6 >20 following </h6>
                                    <h6 >20 following</h6>
                            </div>
                            <div align="center">
                            {!isMe ? (
                                <div>
                                    {isFollowing ? (
                                        // <button onClick={unfollow}>Unfollow</button>
                                        <button className ="btn waves-effect waves-light #9e9e9e grey" onClick={unfollow}>Unfollow</button>
                                    ) : (
                                        <button className ="btn waves-effect waves-light #ff8a65 deep-orange lighten-2" onClick={follow}>Follow</button>
                                    )}
                                </div>
                                ) : (
                                    <></>
                                )}
                            </div>

                        </div>
                    </div>
                    <div>
                        {recipes && recipes.length > 0 ? (
                            <div className= "recipes">
                                {recipes.map((recipe) => (
                                    <RecipeDetails key={recipe._id} recipe={recipe}/>
                                ))}
                            </div>
                        ) : (
                            <div>
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

export default UserProfile