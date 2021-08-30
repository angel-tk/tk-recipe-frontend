import { useState, useLayoutEffect } from "react";
import { Window, Button } from "../../../components/ui";
import { useParams, useHistory } from "react-router-dom";
import { getRecipe, deleteRecipe } from "../../../utils/api/requests";

const RecipeItem = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedRecipe, setLoadedRecipe] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  useLayoutEffect(() => {
    getRecipe(id).then(data => {
      setIsLoading(false);
      setLoadedRecipe(data);
    });
  }, [id]);

  const handleDelete = recipeId => {
    deleteRecipe(recipeId).then(() => {
      history.replace("/");
    });
  };

  const handleEdit = recipeId => {
    history.push(`/recipes/${recipeId}/edit/`);
  };

  return isLoading ? (
    <Window title="Recipe details">Loading...</Window>
  ) : (
    <Window title="Recipe details">
      <h2>{loadedRecipe.name}</h2>
      <p>Description:</p>
      <p>{loadedRecipe.description}</p>
      <p>Ingredient list:</p>
      <ul>{loadedRecipe.ingredients != null && loadedRecipe.ingredients.length > 0 ? loadedRecipe.ingredients.map((ingredient, key) => <li key={`${ingredient.name.trim().toLowerCase()}-${key}`}>{ingredient.name}</li>) : "There seems to be something wrong with our data..."}</ul>
      <Button onClick={() => handleEdit(loadedRecipe.id)}>Edit recipe</Button>
      <Button
        onClick={() => {
          if (window.confirm("Delete recipe? This action is irreversible!")) {
            handleDelete(loadedRecipe.id);
          }
        }}
      >
        Delete recipe
      </Button>
    </Window>
  );
};

export default RecipeItem;
