import { render, screen } from "@testing-library/react";
import { getRecipes } from "../../../utils/api/requests";
import RecipeList from "./RecipeList";

jest.mock("../../../utils/api/requests");

test("Renders all available recipes at call", async () => {
  const testData = {
    id: 1,
    name: "Jest test recipe",
    description: "Test description... not very interesting but it'll do.",
    ingredients: [{ name: "Ingredient 1" }, { name: "Ingredient 2" }]
  };
  getRecipes.mockReset();
  getRecipes.mockResolvedValue([testData]);

  render(<RecipeList />);

  expect(await screen.findByText("Jest test recipe")).toBeInTheDocument();
  expect(await screen.findByText("View recipe")).toBeInTheDocument();
  expect(getRecipes).toHaveBeenCalledTimes(1);
});
