export const getRecipes = async () => {
  return await fetch("http://localhost:8000/recipes/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json());
};

export const getRecipe = async recipeId => {
  return await fetch(`http://localhost:8000/recipes/${recipeId}/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json());
};

export const addRecipe = async recipeData => {
  return await fetch("http://localhost:8000/recipes/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(recipeData)
  });
};

export const updateRecipe = async recipeId => {
  return await fetch(`http://localhost:8000/recipes/${recipeId}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    }
  });
};

export const deleteRecipe = async recipeId => {
  return await fetch(`http://localhost:8000/recipes/${recipeId}/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });
};
