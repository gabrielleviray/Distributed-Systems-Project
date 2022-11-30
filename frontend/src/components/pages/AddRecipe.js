import React, { useState } from 'react'
import M from 'materialize-css'
import { useNavigate } from 'react-router-dom'
import { useRecipesContext } from "../../reducers/useRecipes"

const AddRecipe = () =>{
    const { dispatch } = useRecipesContext()

    const history = useNavigate()
    const [title, setTitle] = useState("")
    const [time, setTime] = useState("")
    const [ingredients, setIngredients] = useState("")
    const [directions, setDirections] = useState("")

    const PostUserRecipe = () =>{
        fetch("/api/recipe/create", {
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                title,
                time,
                ingredients,
                directions
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html: data.error, classes: "#b71c1c red darken-4"})
            }
            else{
                M.toast({html: "Successfully added a recipe!", classes: "#43a047 green darken-1"})
                dispatch({type:'CREATE_RECIPE', payload: data})
                // console.log(data)
                history('/')
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return(
        <div className="card input-filed"
        style={{
            margin: "250px auto",
            maxWidth: "700px",
            padding: "20px",
            textAlign:"center",
            
        }}
        >
        <div className = "food-blog-logo">
            <h3>Post Your Recipe</h3>
        </div>

            <input 
            type="text" 
            placeholder="Recipe Title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />

            <input 
            type="text" 
            placeholder="Total Recipe Time"
            value={time}
            onChange={(e)=>setTime(e.target.value)}
            />

            <input 
            type="text" 
            placeholder="Ingredients"
            value={ingredients}
            onChange={(e)=>setIngredients(e.target.value)}
            />
            
            <input 
            type="text" 
            placeholder="Directions"
            value={directions}
            onChange={(e)=>setDirections(e.target.value)}
            />
        <button className ="btn waves-effect waves-light #ff8a65 deep-orange lighten-2" onClick={()=>PostUserRecipe()}>
                Submit Recipe
            </button>
        </div>
        
    )
}

export default AddRecipe