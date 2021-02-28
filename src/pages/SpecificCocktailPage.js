import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

function SpecificCocktailPage() {
  const { strCategory } = useParams();

  const [cocktailData, set_cocktailData] = useState();

  useEffect(() => {
    async function fetchData() {
      //const request_param = encodeURIComponent(strCategory);
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${strCategory}`
      );
      console.log("What are dynamic datas?", response);
      set_cocktailData(response.data.drinks);
    }
    fetchData();
  }, [strCategory]);

  return (
    <div>
      {cocktailData ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            marginTop: 100,
          }}
        >
          {cocktailData.map((drink, index) => {
            return (
              <div key={index}>
                <h2>{drink.strDrink}</h2>
                <img src={drink.strDrinkThumb} alt={drink.strDrink} />
              </div>
            );
          })}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SpecificCocktailPage;
