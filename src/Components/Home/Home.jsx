import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setdata] = useState(null);
  function getProducts() {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
      .then((res) => {
        setdata(res.data.meals);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getProducts();
  }, []);

  function handleMealClick(mealId) {
    localStorage.setItem("Details", mealId);
  }

  return (
    <>
      {data ? (
        <div className="grid grid-cols-1 h-auto sm:grid-cols-2 mb-5 lg:grid-cols-4 gap-4">
          {data?.map((product) => {
            return (
              <Link
                to="/home/ProductDetail"
                key={product.idMeal}
                onClick={() => handleMealClick(product.idMeal)}
                className="relative group overflow-hidden rounded-lg"
              >
                <img
                  src={product.strMealThumb}
                  alt={product.strMeal}
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
                    {product.strMeal}
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

export default Home;
