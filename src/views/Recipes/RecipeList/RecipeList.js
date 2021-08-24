import { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { Window, Button } from "../../../components/ui";
import { AllRecipes } from "../../../components/layout";

const RecipesList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedRecipes, setLoadedRecipes] = useState([]);

  useLayoutEffect(() => {
    fetch("http://localhost:8000/recipes/")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setIsLoading(false);
        setLoadedRecipes(data);
      });
  }, []);

  return isLoading ? (
    <Window title="Recipe list">Loading...</Window>
  ) : (
    <Window title="Recipe list">
      {loadedRecipes.length <= 0 ? (
        <>
          <p>Sorry, it seems like there are no recipes yet :(</p>
          <Link to={"/new-recipe/"}>
            <Button>Add the first recipe!</Button>
          </Link>
        </>
      ) : (
        <AllRecipes recipes={loadedRecipes} />
      )}
    </Window>
  );
};

export default RecipesList;
