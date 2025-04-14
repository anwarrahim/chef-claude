function Main(){


      const ingredients = ['Gram msala', 'haldi', 'Ghee']
      const ingredientsListItems = ingredients.map(ingredient =>{
       return  <li key={ingredient}>{ingredient}</li>
      })

      function submitIngredient(formData){
        const addNewIngredients = formData.get("ingredientName")
        console.log(addNewIngredients)
      }

    
      
    return (
        <>
        <main className=" mt-6">
            <form action={submitIngredient} className="flex justify-center gap-1.5">
                    <input 
            
                className="max-w-lg min-w-xs grow border-2 border-gray-300 rounded-sm p-1.5"            
                type="text"
                placeholder="e.g Mirchi.. "
                aria-label="add ingredients"
                name="ingredientName"
                
                />
                <button className="bg-black text-white py-1.5 px-3 border rounded-sm flex  first-letter:text-xl before:content-['+'] before:mr-1  cursor-pointer">
                    Add ingredients
                </button>
            </form>
            <ul className="flex items-center flex-col">
                {ingredientsListItems}
            </ul>
           
        </main>
        </>
    )
}
export default Main