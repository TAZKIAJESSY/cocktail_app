import "./App.css";
import { Switch, Route } from "react-router-dom";
import CocktailCategoryPage from "./pages/CocktailCategoryPage";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import SpecificCocktailPage from "./pages/SpecificCocktailPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route
          exact
          path="/cocktail/:strCategory"
          component={SpecificCocktailPage}
        />
        <Route exact path="/cocktail" component={CocktailCategoryPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
