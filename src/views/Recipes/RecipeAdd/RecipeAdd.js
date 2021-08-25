import { useHistory } from "react-router-dom";
import { Window } from "../../../components/ui/";
import { Form } from "../../../components/layout";

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
      history.push("/");
    });
  }

  return (
    <Window title="Add new recipe">
      <Form onAddRecipeData={addRecipeHandler} />
    </Window>
  );
};

export default RecipeAdd;
