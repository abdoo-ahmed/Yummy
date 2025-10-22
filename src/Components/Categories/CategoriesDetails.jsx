import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { Categorycontext } from "../Contexts/CategoryContext";
import { Link } from "react-router-dom";

const CategoriesDetails = () => {
  const { TypeFood, setIdMeal } = useContext(Categorycontext);
  const { data, isLoading } = useQuery({
    queryKey: ["CategoryDetail"],
    queryFn: getCategoriesDetail,
    enabled: !!TypeFood,
    refetchOnMount: "always",
    refetchOnWindowFocus: false,
    staleTime: 0,
  });
  async function getCategoriesDetail() {
    const DataCategoriesDetail = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${TypeFood}`
    );
    return DataCategoriesDetail.data.meals;
  }
  function detictIDDetailsCategory(IDData) {
    setIdMeal(IDData);
    localStorage.setItem("Details", IDData);
  }
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <div className="grid grid-cols-1 h-auto sm:grid-cols-2 mb-5 lg:grid-cols-4 gap-4">
        {data?.map((CategoryDetail) => {
          return (
            <Link
              to="/categories/categoriesDetails/ProductDetail"
              key={CategoryDetail.idMeal}
              onClick={() => detictIDDetailsCategory(CategoryDetail.idMeal)}
              className="relative group overflow-hidden rounded-lg"
            >
              <img
                src={CategoryDetail.strMealThumb}
                alt={CategoryDetail.strMeal}
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
                  {CategoryDetail.strMeal}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default CategoriesDetails;
