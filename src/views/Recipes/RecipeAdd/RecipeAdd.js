import { useHistory } from "react-router-dom";
import { Window } from "../../../components/ui/";
import { Form } from "../../../components/layout";
import { addRecipe } from "../../../utils/api/requests";

const RecipeAdd = () => {
  const history = useHistory();

  function addRecipeHandler(newRecipeData) {
    addRecipe(newRecipeData).then(() => {
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
