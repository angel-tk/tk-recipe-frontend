import { Recipe } from "../../layout";

const AllRecipes = props => {
  return (
    <>
      {props.recipes.map(recipe => (
        <Recipe key={recipe.id} id={recipe.id} name={recipe.name} description={recipe.description} ingredients={recipe.ingredients} />
      ))}
    </>
  );
};

export default AllRecipes;
