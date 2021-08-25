import { useState, useLayoutEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Window } from "../../../components/ui/";
import { Form } from "../../../components/layout";

const RecipeAdd = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedRecipe, setLoadedRecipe] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  useLayoutEffect(() => {
    fetch(`http://localhost:8000/recipes/${id}/`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setIsLoading(false);
        setLoadedRecipe(data);
      });
  }, [id]);

  function editRecipeHandler(newRecipeData) {
    console.log(newRecipeData);
    fetch(`http://localhost:8000/recipes/${id}/`, {
      method: "PATCH",
      body: JSON.stringify(newRecipeData),
      headers: {
        "Content-type": "application/json"
      }
    }).then(() => {
      history.replace(`/recipes/${id}/`);
    });
  }

  return isLoading ? (
    <Window title="Loading recipe...">Loading...</Window>
  ) : (
    <Window title={`Edit ${loadedRecipe.name}`}>
      <Form recipeId={id} recipeTitle={loadedRecipe.name} recipeDescription={loadedRecipe.description} recipeIngredients={loadedRecipe.ingredients} onAddRecipeData={editRecipeHandler} />
    </Window>
  );
};

export default RecipeAdd;
