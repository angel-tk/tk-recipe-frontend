import { useState, useLayoutEffect } from "react";
import { Window, Button } from "../../../components/ui";
import { useParams, useHistory } from "react-router-dom";

const RecipesList = () => {
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

  const handleDelete = recipeId => {
    fetch(`http://localhost:8000/recipes/${recipeId}/`, {
      method: "DELETE"
    })
      .then(() => {
        history.replace("/");
      })
      .catch(err => {
        console.error(err);
      });
    console.log(recipeId);
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
      <ul>{loadedRecipe.ingredients != null && loadedRecipe.ingredients.length > 0 ? loadedRecipe.ingredients.map(ingredient => <li key={ingredient.name.trim().toLowerCase()}>{ingredient.name}</li>) : "There seems to be something wrong with our data..."}</ul>
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

export default RecipesList;
