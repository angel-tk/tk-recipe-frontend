import { useHistory } from "react-router-dom";
import { RecipeWrapper } from "./Recipe.styles";
import { Button } from "../../ui";

const Recipe = props => {
  const history = useHistory();

  function handleClick(id) {
    history.push(`/recipes/${id}/`);
  }

  return (
    <RecipeWrapper>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <Button onClick={() => handleClick(props.id)}>View recipe</Button>
    </RecipeWrapper>
  );
};

export default Recipe;
