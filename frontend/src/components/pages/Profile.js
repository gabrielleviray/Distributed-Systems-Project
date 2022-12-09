import React, { useEffect, useState } from 'react'
import { useRecipesContext } from "../../reducers/useRecipes"

// components
import ProfileDetails from '../ProfileDetails'

const Profile = ()=> {
    const [myRecipes, setMyRecipes] = useState(null)
    const {recipes, dispatch} = useRecipesContext()
    // const [profile, setProfile] = useState([])
    // // const [name, setName] = useState([])

    // useEffect(()=>{
    //     fetch('/api/user/gabrielleviray', {
    //         headers:{
    //             "Authorization": "Bearer " + localStorage.getItem("jwt")
    //         }
    //     }).then(res=>res.json())
    //     .then(result=>{
    //         // console.log(result.recipes)
    //         // console.log(result.name)
    //         // setName(result.name)
    //         setProfile(result)
    //     })
    // },[])

    // useEffect(() => {
    //     const fetchMyRecipes = async () => {
    //         const response = await fetch('/api/user/gabrielleviray')
    //         const json = await response.json() // array of recipe objects

    //         if (response.ok){
    //             setMyRecipes(json)
    //             console.log(json)
    //         }
    //     }

    //     fetchMyRecipes()
    // }, [])


        useEffect(() => {
        const fetchAllRecipes = async () => {
            const response = await fetch('/api/recipe/all')
            const json = await response.json() // pass the json, json = array of objects where each object represents a recipe

            
            if (response.ok){
                // no longer need:setAllRecipes(json)
                dispatch({type: 'SET_RECIPES', payload: json})
                // console.log(json)
            }
        }

        fetchAllRecipes()
    }, [])
    return(
        <div style={{maxWidth:"550px", margin:"0px auto"}}>
            <div style={{
                display: "flex",
                justifyContent:"space-around",
                margin:"18px 0px",
                borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{width:"160px", height:"160px", borderRadius:"80"}}
                    src="https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"/>
                </div>
                <div>
                    {/* {myRecipes && myRecipes.map((myRecipe)=>(
                        <p key={myRecipe._id}>{myRecipe.author}</p>
                    ))} */}
                    <h4>gabrielle viray</h4>
                    <div style={{display:"flex", justifyContent:"space-between", width:"110%", paddingBottom:"15px" }}>
                        <ul>
                            <h6>20 recipes</h6>
                            <h6>20 following</h6>
                            <h6>20 following</h6>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
         /* <div className="home">
            <div className = "myrecipes">
                { myRecipes && myRecipes.map((myRecipe) => (
                    <ProfileDetails key={myRecipe._id} myRecipe= {myRecipe}/>
                ))}
            </div>
        </div> */
    )
}

export default Profile