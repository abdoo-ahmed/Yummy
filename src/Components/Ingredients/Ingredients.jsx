import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { Ingredientcontext } from "../Contexts/IngredientContext";
import { Link } from "react-router-dom";
import IconsIngredient from "../Icons/IconsIngredient";

const Ingredients = () => {
  const { setTypeIngredient } = useContext(Ingredientcontext);
  const { data, isLoading } = useQuery({
    queryKey: ["Area"],
    queryFn: getAreas,
    refetchOnMount: "always",
    refetchOnWindowFocus: false,
    staleTime: 0,
  });

  async function getAreas() {
    const DataArea = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
    );
    return DataArea.data.meals;
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  function catchIngredients(Ingredient) {
    setTypeIngredient(Ingredient);
    localStorage.setItem("TypeIngredient", Ingredient);
  }

  return (
    <>
      <div className="grid grid-cols-1 h-auto sm:grid-cols-2 mb-5 lg:grid-cols-4 gap-7">
        {data?.slice(0, 20).map((Ingredient, index) => {
          return (
            <Link
              to="/ingredients/ingredientDetail"
              key={index}
              onClick={() => catchIngredients(Ingredient.strIngredient)}
              className="text-center w-full m-auto font-bold"
            >
              <IconsIngredient />
              <p className="text-2xl">{Ingredient.strIngredient}</p>
              <p className="text-[17px] font-normal">
                {" "}
                {Ingredient.strDescription
                  ?.split(" ")
                  .slice(0, 20)
                  .join(" ")}{" "}
              </p>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Ingredients;
