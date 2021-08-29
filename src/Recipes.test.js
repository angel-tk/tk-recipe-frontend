import { waitFor, fireEvent, render, screen, within, waitForElementToBeRemoved } from "@testing-library/react";
import { getRecipes } from "./utils/api/requests";
import RecipeList from "./views/Recipes/RecipeList/RecipeList";

jest.mock("./utils/api/requests");

const testData = {
  id: 1,
  name: "Jest test recipe",
  description: "Test description... not very interesting but it'll do.",
  ingredients: [{ name: "Ingredient 2" }, { name: "ingredient 2" }]
};

beforeEach(() => {
  getRecipes.mockReset();
  getRecipes.mockResolvedValue([testData]);
});

test("Renders all available recipes at call", async () => {
  render(<RecipeList />);
  expect(await screen.findByText("Jest test recipe")).toBeInTheDocument();
  expect(await screen.findByText("View recipe")).toBeInTheDocument();
  expect(getRecipes).toHaveBeenCalledTimes(1);
});
