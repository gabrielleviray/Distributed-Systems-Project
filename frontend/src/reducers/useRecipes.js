import { RecipesContext } from '../context/RecipesContext'
import { useContext } from 'react'


// Make hook function
export const useRecipesContext = () => {
    const context = useContext( RecipesContext ) // returns values of RecipesContext which is the value we passed into the provider component

    if (!context) {
        throw Error('useRecipeContext must be used inside the provider')
    }
    return context
}