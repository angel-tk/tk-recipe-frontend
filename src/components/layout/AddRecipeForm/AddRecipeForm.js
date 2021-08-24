import { useRef } from "react";
import { Button } from "../../ui";
import { InputWrapper, Label, InputTag, TextArea } from "../../forms";

const AddRecipeForm = props => {
  const nameInputRef = useRef();
  const descriptionInputRef = useRef();
  const ingredientsInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredIngredients = ingredientsInputRef.current.value;

    const newRecipeData = {
      name: enteredName,
      description: enteredDescription,
      ingredients: enteredIngredients.split(",").map(val => ({ name: val.trim() }))
    };

    props.onAddRecipeData(newRecipeData);
  }
  return (
    <form onSubmit={submitHandler}>
      <InputWrapper>
        <Label htmlFor="name">Recipe name</Label>
        <InputTag type="text" name="name" id="name" required placeholder="Don't be too creative, short and sweet does the trick ;)" ref={nameInputRef} />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="ingredients">Ingredients</Label>
        <InputTag type="text" name="ingredients" id="ingredients" required placeholder="Separate each ingredient with a comma" ref={ingredientsInputRef} />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="description">Recipe description</Label>
        <TextArea name="description" id="description" required placeholder="Add your description for the recipe here. And be as detailed as possible!" ref={descriptionInputRef}></TextArea>
      </InputWrapper>
      <div>
        <Button>Add recipe</Button>
      </div>
    </form>
  );
};

export default AddRecipeForm;
