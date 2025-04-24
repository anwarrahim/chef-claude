import React from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"

export default function Main() {
    const [ingredients, setIngredients] = React.useState(
        ["all the main spices", "pasta", "ground beef", "tomato paste"]
    )
    const [recipeShown, setRecipeShown] = React.useState(false)
    const [inputValue, setInputValue] = React.useState("")

    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        if (newIngredient && newIngredient.trim() !== "") {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient])
            setInputValue("") 
        }
    }

    function handleInputChange(event) {
        setInputValue(event.target.value)
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button type="submit">Add ingredient</button>
            </form>

            {ingredients.length > 0 &&
                <IngredientsList
                    ingredients={ingredients}
                    toggleRecipeShown={toggleRecipeShown}
                />
            }

            {recipeShown && <ClaudeRecipe />}
        </main>
    )
}