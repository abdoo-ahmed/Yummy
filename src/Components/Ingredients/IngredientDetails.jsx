import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { Ingredientcontext } from "../Contexts/IngredientContext";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { Link } from "react-router-dom";

const IngredientDetails = () => {
  const { TypeIngredient, setIdMeal } = useContext(Ingredientcontext);
  const { data, isLoading } = useQuery({
    queryKey: ["IngredientDetail"],
    queryFn: getIngredientDetail,
    enabled: !!TypeIngredient,
    refetchOnMount: "always",
    refetchOnWindowFocus: false,
    staleTime: 0,
  });
  async function getIngredientDetail() {
    const DataIngredientDetail = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${TypeIngredient}`
    );
    return DataIngredientDetail.data.meals;
  }
  function detictIDDetailsIngredient(IDData) {
    setIdMeal(IDData);
    localStorage.setItem("Details", IDData);
  }
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <div className="grid grid-cols-1 h-auto sm:grid-cols-2 mb-5 lg:grid-cols-4 gap-4">
        {data?.map((IngredientDetail) => {
          return (
            <Link
              to="/ingredients/ingredientsDetails/ProductDetail"
              key={IngredientDetail.idMeal}
              onClick={() => detictIDDetailsIngredient(IngredientDetail.idMeal)}
              className="relative group overflow-hidden rounded-lg"
            >
              <img
                src={IngredientDetail.strMealThumb}
                alt={IngredientDetail.strMeal}
                className="w-full rounded-lg transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className="
                absolute bottom-0 left-0 w-full h-0
                bg-white/75
                text-center
                opacity-0
                flex
                items-center
                transition-all duration-500
                group-hover:h-full group-hover:opacity-100
                "
              >
                <p className="text-black mt-3 xl:text-3xl md:text-2xl sm:text-[15px] font-bold">
                  {IngredientDetail.strMeal}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default IngredientDetails;
