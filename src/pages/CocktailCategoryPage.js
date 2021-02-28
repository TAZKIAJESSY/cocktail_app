import { useState } from "react";
import axios from "axios";
import CocktailCategoryItem from "../components/CocktailCategoryItem";
import { useEffect } from "react";

function CocktailCategoryPage() {
  const [cocktail, set_cocktail] = useState([]);
  useEffect(() => {
    async function fetchData() {
      //const query_param = encodeURIComponent(searchText);
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
      );
      console.log("what is list?", response);
      set_cocktail(response.data.drinks);
    }
    fetchData();
  }, []);

  return (
    <div>
      <u>
        {!cocktail ? ( //use this condition every time to check for as promises take time to resolve.
          <h1>Laoding....</h1>
        ) : (
          <div>
            {cocktail.map((c, index) => {
              return (
                <CocktailCategoryItem key={index} strCategory={c.strCategory} />
              );
            })}
          </div>
        )}
      </u>
    </div>
  );
}

export default CocktailCategoryPage;
