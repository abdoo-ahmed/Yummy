import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const Details = () => {
  const IdDetails = localStorage.getItem("Details");
  const { data, isLoading } = useQuery({
    queryKey: ["Detail"],
    queryFn: Details,
    enabled: !!IdDetails,
  });

  async function Details() {
    const DataDetail = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${IdDetails}`
    );
    return DataDetail.data.meals;
  }

  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <React.Fragment>
      <div className="grid grid-cols-1 pb-12 md:grid-cols-12 gap-5">
        <div className="md:col-span-3">
          {data.map((product, index) => {
            return (
              <div key={index}>
                <img
                  className="w-full rounded-md"
                  src={product.strMealThumb}
                  alt={product.strMeal}
                />
                <p className="text-2xl font-bold mt-4"> {product.strMeal} </p>
              </div>
            );
          })}
        </div>

        <div className="md:col-span-7 text-white">
          <h2 className="font-medium mb-2 text-4xl">Instructions</h2>

          {data.map((product, index) => {
            return (
              <div key={index}>
                <p className="font-normal mb-3">{product.strInstructions}</p>
                <p className="text-2xl font-bold">{`Area : ${product.strArea}`}</p>
                <p className="text-2xl font-bold">{`Category : ${product.strCategory}`}</p>
                <p className="text-2xl font-bold mb-3">{`Recipes :`}</p>
                <div>
                  {arr.map((iteratevalue, index) => {
                    const measure = product[`strMeasure${iteratevalue}`];
                    const ingredient = product[`strIngredient${iteratevalue}`];
                    if (!measure || !ingredient) return null;
                    return (
                      <p
                        key={index}
                        className="inline-block bg-[#CFF4FC] m-2 p-1.5 rounded-xl text-[#055160]"
                      >
                        {`${measure} ${ingredient}`}
                      </p>
                    );
                  })}
                </div>
                <p className="text-3xl font-bold mb-5">{`Tags :`}</p>

                <a
                  target="_blank"
                  href={product.strSource}
                  className="bg-green-700 hover:bg-green-800 mr-3 p-2 px-3 rounded"
                >
                  Source
                </a>
                <a
                  target="_blank"
                  href={product.strYoutube}
                  className="bg-red-700 hover:bg-red-800 p-2 px-3 rounded"
                >
                  Youtube
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Details;
