import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

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
            fontSize: 20,
            color: "blue",
          }}
        >
          {cocktailData.map((drink, index) => {
            return (
              <div key={index}>
                <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                <Link to={`/details/${drink.idDrink}`}>
                  <p>{drink.strDrink}</p>
                </Link>
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
