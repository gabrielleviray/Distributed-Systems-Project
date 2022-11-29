import React, { useState } from 'react'
import M from 'materialize-css'
import { useNavigate } from 'react-router-dom'

const AddRecipe = () =>{
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
            margin: "10px auto",
            maxWidth: "500px",
            padding: "20px",
            textAlign:"center"
        }}
        >
            <input 
            type="text" 
            placeholder="title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />

            <input 
            type="text" 
            placeholder="time"
            value={time}
            onChange={(e)=>setTime(e.target.value)}
            />

            <input 
            type="text" 
            placeholder="ingredients"
            value={ingredients}
            onChange={(e)=>setIngredients(e.target.value)}
            />
            
            <input 
            type="text" 
            placeholder="directions"
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