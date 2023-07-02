

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useGetUserIDt } from "../hooks/useGetUsetIDT";

function SavedRecipes() {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userID = useGetUserIDt();

  useEffect(() => {
    const fetchSavedRecipe = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
        console.log(response.data.savedRecipes);
      } catch (error) {
        console.error(error);
      }
    };


    fetchSavedRecipe();
  }, []);


 

  return (
    <div>
      <h1>Saved Recipes</h1>
      <ul>
        {savedRecipes.map((recipe) => (
          <li key={recipe._id}>
            {/* {savedRecipes.includes(recipe._id)&& <h1>already saved</h1>} */}
            <div>
              <h2>{recipe.name}</h2>
             
            </div>
            <div className="instructions">
              <p>{recipe.instructions}</p>
            </div>
            <img src={recipe.imageUrl} alt={recipe.name} />
            <p>Cooking Time: {recipe.cookingTime} (minutes)</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default  SavedRecipes;
