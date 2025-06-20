import React, { useState } from "react"
import "./main.css"
import IngredientsList from "./claudeRecipe/ingredientsList"
import ClaudeRecipe from "./claudeRecipe/claudeRecipe"
import { getRecipeFromMistral } from "./claudeRecipe/ai"


export default function Main() {

    const [ingredients, setIngredients] = React.useState(
        ["all the main spices", "pasta", "ground beef", "tomato paste"]
    )
    
    const [recipe, setRecipe] = useState("");
    
    async function toggleRecipeShown() {
        // setRecipeShown(prevShown => !prevShown)
        const AIRecipe = await getRecipeFromMistral(ingredients);
        console.log(`Clicked!!: ${AIRecipe}`)
        setRecipe(AIRecipe);
    }



    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    // const AIRecipe = getRecipeFromMistral(ingredients);

/**
 * Challenge: Get a recipe from the AI!
 * 
 * This will be a bit harder of a challenge that will require you
 * to think critically and synthesize the skills you've been
 * learning and practicing up to this point.
 * 
 * Using either the `getRecipeFromChefClaude` function or the 
 * `getRecipeFromMistral` function, make it so that when the user
 * clicks "Get a recipe", the text response from the AI is displayed
 * in the <ClaudeRecipe> component.
 * 
 * For now, just have it render the raw markdown that the AI returns,
 * don't worry about making it look nice yet. (We're going to use a
 * package that will render the markdown for us soon.)
 */




    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            
            {ingredients.length > 0 && 
                <IngredientsList 
                    ingredients={ingredients}
                    toggleRecipeShown={toggleRecipeShown}
                />
            }
            
            {recipe && <ClaudeRecipe AIRecipe={recipe} />}
        </main>
    )
}