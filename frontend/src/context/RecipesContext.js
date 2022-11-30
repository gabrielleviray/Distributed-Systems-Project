import { createContext, useReducer } from 'react'

// Locally keep recipes in sync with database 

// Creates a brand new context
export const RecipesContext = createContext();

// create reducer function
// takes in previous state value and action which is object passed in dispatch property(has type property and payload property )
export const recipesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_RECIPES':
            return {
                recipes: action.payload // array of all of the recipes
            }

        case 'CREATE_RECIPE':
            return {
                recipes: [action.payload, ...state.recipes] //single recipe object, and want the rest of recipe objects
            }
        default:
            return state
    }
}

// Provide context to our application component tree so components can access it
// Make a context provider component similar to react component
// children property represents root App component which was wrapped in index.js file
export const RecipesContextProvider = ({ children }) => {

    // useReducer takes in name of reducer function name and recipes object
    // useReducer uses dispatch to update state value
    const [state, dispatch] = useReducer(recipesReducer, {recipes: null})


    // wrap whatever parts of the application that needs access to it
    // wrap the whole app so every component has access (root app component)
    return (
        <RecipesContext.Provider value={{...state,dispatch}}>
            { children }
        </RecipesContext.Provider>
    )
}
