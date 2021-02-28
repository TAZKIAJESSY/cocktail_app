import { Link } from "react-router-dom";

function CocktailCategoryItem(props) {
  console.log("wHAT ARE PROSP?", props);
  return (
    <div style={{ marginTop: 50 }}>
      <Link style={{ color: "violet" }} to={`/category/${props.strCategory}`}>
        <h1>{props.strCategory}</h1>
      </Link>
    </div>
  );
}

export default CocktailCategoryItem;
