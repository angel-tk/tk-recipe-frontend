import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavBar } from "./components/layout/";
import GlobalStyle from "./GlobalStyle";
import About from "./views/General/About/About";
import RecipeAdd from "./views/Recipes/RecipeAdd/RecipeAdd";
import RecipesList from "./views/Recipes/RecipeList/RecipeList";
import RecipeItem from "./views/Recipes/RecipeItem/RecipeItem";
import RecipeEdit from "./views/Recipes/RecipeEdit/RecipeEdit";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route exact path="/">
          <RecipesList />
        </Route>
        <Route exact path="/recipes/">
          <RecipesList />
        </Route>
        <Route exact path="/new-recipe/">
          <RecipeAdd />
        </Route>
        <Route exact path="/recipes/:id/">
          <RecipeItem />
        </Route>
        <Route exact path="/recipes/:id/edit/">
          <RecipeEdit />
        </Route>
        <Route exact path="/about/">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
