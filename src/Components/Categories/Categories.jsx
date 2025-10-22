import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { Categorycontext } from "../Contexts/CategoryContext";
import { Link } from "react-router-dom";

const Categories = () => {
  const { setTypeFood } = useContext(Categorycontext);
  const [Data, SetData] = useState(null);
  async function getCatigoris() {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        SetData(res.data.categories);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getCatigoris();
  }, []);

  function catchCategory(Food) {
    localStorage.setItem("TypeFood", Food);
    setTypeFood(Food);
  }

  return (
    <>
      {Data ? (
        <div className="grid grid-cols-1 h-auto sm:grid-cols-2 mb-5 lg:grid-cols-4 gap-4">
          {Data?.map((Category) => {
            return (
              <Link
                to="/categories/categoriesDetails"
                onClick={() => catchCategory(Category.strCategory)}
                key={Category.idCategory}
                className="relative group overflow-hidden rounded-lg"
              >
                <img
                  src={Category.strCategoryThumb}
                  alt={Category.strCategory}
                  className="w-full rounded-lg transition-transform duration-500 group-hover:scale-110"
                />

                <div
                  className="
                absolute bottom-0 left-0 w-full h-0 
                bg-white/70
                text-center
                opacity-0 
                transition-all duration-500 
                group-hover:h-full group-hover:opacity-100
                "
                >
                  <p className="text-black mt-3 text-xl font-bold">
                    {Category.strCategory}
                  </p>
                  <p className="text-black text-[18px] font-normal">
                    {Category.strCategoryDescription
                      ?.split(" ")
                      .slice(0, 10)
                      .join(" ")}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default Categories;
