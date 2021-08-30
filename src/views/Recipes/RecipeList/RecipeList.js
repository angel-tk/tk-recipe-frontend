import { useState, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import { Window, Button } from "../../../components/ui";
import { AllRecipes } from "../../../components/layout";
import { getRecipes } from "../../../utils/api/requests";

const RecipesList = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedRecipes, setLoadedRecipes] = useState([]);

  useLayoutEffect(() => {
    getRecipes()
      .then(data => {
        setIsLoading(false);
        setLoadedRecipes(data);
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }, []);

  function handleClick() {
    history.push("/new-recipe/");
  }

  return isLoading ? (
    <Window title="Recipe list">Loading...</Window>
  ) : (
    <Window title="Recipe list">
      {loadedRecipes.length <= 0 ? (
        <>
          <p>Sorry, it seems like there are no recipes yet :(</p>
          <Button onClick={() => handleClick()}>Add the first recipe!</Button>
        </>
      ) : (
        <AllRecipes recipes={loadedRecipes} />
      )}
    </Window>
  );
};

export default RecipesList;
