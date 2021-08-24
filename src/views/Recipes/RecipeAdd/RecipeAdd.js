import { useHistory } from "react-router-dom";
import { Window } from "../../../components/ui/";
import { AddRecipeForm } from "../../../components/layout";

const RecipeAdd = () => {
  const history = useHistory();

  function addRecipeHandler(newRecipeData) {
    console.log(newRecipeData);
    fetch("http://localhost:8000/recipes/", {
      method: "POST",
      body: JSON.stringify(newRecipeData),
      headers: {
        "Content-type": "application/json"
      }
    }).then(() => {
      history.replace("/");
    });
  }

  return (
    <Window title="Add new recipe">
      <AddRecipeForm onAddRecipeData={addRecipeHandler} />
    </Window>
  );
};

export default RecipeAdd;
