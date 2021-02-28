import { Link } from "react-router-dom";

function CocktailCategoryItem(props) {
  console.log("wHAT ARE PROSP?", props);
  return (
    <div>
      <Link to={`/cocktail/${props.strCategory}`}>
        <h1>{props.strCategory}</h1>
      </Link>
    </div>
  );
}

export default CocktailCategoryItem;
