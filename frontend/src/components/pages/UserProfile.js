import React, { useEffect, useState, useContext } from 'react'
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
    const [followers, setFollowers] = useState([]);
    const{username} = useParams()
    // console.log(username)

    useEffect(()=>{
        fetch(`/api/user/${username}`, {
            headers:{
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            setUserId(result.id);
            setName(result.name);
            setRecipes(result.recipes);
            setIsFollowing(result.isFollowing);
            setIsMe(result.isMe);
            // setFollowers(result.followers);
        })
    },[])

    const follow = () => {
        fetch('/api/user/follow', {
            method:"put",
            headers: {
                "Content-Type":"application/json",
                "Authorization": "Bearer " + localStorage.getItem('jwt')
            },
            body:JSON.stringify({
                followId:userId
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            // setFollowers(result.followers)

        })
    }
    return(
        // <div style={{maxWidth:"550px", margin:"0px auto"}}>
        //     <div style={{
        //         display: "flex",
        //         justifyContent:"space-around",
        //         margin:"18px 0px",
        //         borderBottom:"1px solid grey"
        //     }}>
        //         <div>
        //             <img style={{width:"160px", height:"160px", borderRadius:"80"}}
        //             src="https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"/>
        //         </div>
        //         <div>
        //             <h4>gabrielle viray</h4>
        //             <div style={{display:"flex", justifyContent:"space-between", width:"110%"}}>
        //                 <ul>
        //                     <h6>20 recipes</h6>
        //                     <h6>20 following</h6>
        //                     <h6>20 following</h6>
        //                 </ul>
        //             </div>
        //         </div>
            
        //     </div>
        //     <div className="recipe_posts_gallery">
        //                 <img className="recipe_posts_item" src="https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"/>
        //                 <img className='recipe_posts_item' src="https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"/>
        //                 <img className='recipe_posts_item' src="https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"/>
        //                 <img className='recipe_posts_item' src="https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"/>
        //                 <img className='recipe_posts_item' src="https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"/>
        //                 <img className='recipe_posts_item' src="https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"/>
        //             </div>
        // </div>
        
        <div style={{maxWidth:"550px", margin:"0px auto" }}>
                <div style={{ display: "flex", justifyContent:"space-around", margin:"18px 0px", borderBottom:"1px solid grey", }}>
                    <div>
                        <img style={{width:"160px", height:"160px", borderRadius:"80", marginTop: "20px"}}
                        src="https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"/>
                    </div>
                    <div>
                    <h4>{name}</h4>
                        <div style={{display:"flex", justifyContent:"space-between", width:"110%", }}>
                            <ul>
                                <h6 >{recipes.length} recipes</h6>
                                <h6 >20 following</h6>
                                <h6 >20 following</h6>
                            </ul>
                        </div>
                    </div>
                </div>
        <div>
            
            {/* <h4>{followers.length} followers</h4> */}
        </div>

        <div>
            {recipes.length > 0 ? (
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
    )
}

export default UserProfile