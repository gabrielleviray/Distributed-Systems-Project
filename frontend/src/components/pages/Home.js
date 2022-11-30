import React, {  useEffect } from 'react'
import { useRecipesContext } from "../../reducers/useRecipes"

// components
import RecipeDetails from '../RecipeDetails'

// const Home = ()=> {
//     const [allRecipes, setAllRecipes] = useState([])
//     useEffect(()=>{
//         fetch('api/recipe/all', {
//             "Authorization": "Bearer "+ localStorage.getItem("jwt")
//         }).then(res=>res.json())
//         .then(result=>{
//             // console.log(result)
//             setAllRecipes(result.recipes)
//         })
//     }, [])
//     return(
//         <div className= "home-style">
//             {
             
//                 allRecipes && allRecipes.map(item=>{
//                     return(
//                         // <div className="card home-card">
//                         //     <h5>gabrielle</h5>
//                         //     * <div className="card-image">
//                         //         <img src="https://images.unsplash.com/photo-1630445396366-8dea03c85ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
//                         //     </div> 
//                         //     <div className = "card-content">
//                         //         <i className="material-icons" style={{color:"black"}}>thumb_up</i>
//                         //         <h6>Post Title</h6>
//                         //         <p>The post description goes here.</p>
//                         //         <input type="text" placeholder="type a comment"/>
//                         //     </div>
//                         // </div>
//                         console.log(item.author)

//                     )
//                 })  
//             }
             
// {/* 
//             <div className="card home-card">
//                 <h5>gabrielle</h5>
//                 <div className="card-image">
//                     <img src="https://images.unsplash.com/photo-1630445396366-8dea03c85ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
//                 </div>
//                 <div className = "card-content">
//                     <i className="material-icons" style={{color:"black"}}>thumb_up</i>
//                     <h6>Post Title</h6>
//                     <p>The post description goes here.</p>
//                     <input type="text" placeholder="type a comment"/>
//                 </div>
//             </div> */}
//         </div>
//     )
// }

const Home = () => {
    // create states
    // no longer need: const [allRecipes, setAllRecipes] = useState(null)

    // invoke hook
    const {recipes, dispatch} = useRecipesContext()

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
        <div className="home">
            <div className= "recipes">
                { recipes && recipes.map((recipe)=>(
                    <RecipeDetails key={recipe._id} recipe={recipe}/>
                    // <p key={recipe._id}>{recipe.author}</p>
                ))}
            </div>
        </div>
    )
}

export default Home