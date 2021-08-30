import { render, screen, fireEvent, act, userEvent, type } from "@testing-library/react";
import { addRecipe } from "../../../utils/api/requests";
import RecipeAdd from "./RecipeAdd";

jest.mock("../../../utils/api/requests");

test("Sends request to add new recipe", async () => {
  const testData = {
    name: "Jest test recipe",
    description: "Test description... not very interesting but it'll do.",
    ingredients: [{ name: "Ingredient 1" }, { name: "ngredient 2" }]
  };

  render(<RecipeAdd />);

  expect(await screen.findByText("Add new recipe")).toBeInTheDocument();

  fireEvent.change(screen.getByLabelText("Recipe name"), "Jest test recipe");
  fireEvent.change(screen.getByLabelText("Recipe description"), "Test description... not very interesting but it'll do.");
  fireEvent.change(screen.getByLabelText("Ingredients"), "Ingredient 1, Ingredient 2");

  addRecipe.mockReset();
  addRecipe.mockResolvedValueOnce(testData);

  fireEvent.click(screen.getByText(/add recipe/i));

  expect(addRecipe).toHaveBeenCalledTimes(1);
  expect(addRecipe).toHaveBeenCalledWith(testData);
});
