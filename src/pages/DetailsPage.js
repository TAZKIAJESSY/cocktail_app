import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetailsPage() {
  const { idDrink } = useParams();

  const [detailsData, set_detailsData] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
      );

      console.log("3Rd page dynamic datas?", response);
      set_detailsData(response.data.drinks);
    }

    fetchData();
  }, [idDrink]);

  return (
    <div>
      {detailsData ? (
        <div style={{ marginTop: 300 }}>
          {detailsData.map((drink, index) => {
            return (
              <div key={index}>
                <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                <h2>{drink.strDrink}</h2>

                <h3>{drink.strAlcoholic}</h3>
                <h4>{drink.strMeasure1}</h4>
                <p style={{ fontSize: 20, color: "orange" }}>
                  Instructions: {drink.strInstructions}
                </p>
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
export default DetailsPage;
