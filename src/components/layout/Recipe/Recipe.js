import { Link } from "react-router-dom";
import { RecipeWrapper } from "./Recipe.styles";
import { Button } from "../../ui";

const Recipe = props => {
  return (
    <RecipeWrapper>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <Link to={`/recipes/${props.id}/`}>
        <Button>View recipe</Button>
      </Link>
    </RecipeWrapper>
  );
};

export default Recipe;
