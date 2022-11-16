import React from 'react'

const AddRecipe = () =>{
    return(
        <div className="card input-filed"
        style={{
            margin: "10px auto",
            maxWidth: "500px",
            padding: "20px",
            textAlign:"center"
        }}
        >
            <input type="text" placeholder="title"/>
            <input type="text" placeholder="ingredients"/>
            <input type="text" placeholder="directions"/>
        <button class="btn waves-effect waves-light #ff8a65 deep-orange lighten-2" >
                Submit Recipe
            </button>
        </div>
        
    )
}

export default AddRecipe