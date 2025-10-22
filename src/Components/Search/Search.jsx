import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const Search = () => {
  const [searchByName, setSearchByName] = useState("");
  const [searchByLetter, setSearchByLetter] = useState("");
  const [meals, setMeals] = useState([]);
  function handleMealClick(mealId) {
    localStorage.setItem("Details", mealId);
  }

  useEffect(() => {
    if (searchByName.trim() !== "") {
      axios
        .get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchByName}`
        )
        .then((res) => {
          setMeals(res.data.meals);
        })
        .catch((err) => console.error(err));
    } else if (searchByLetter === "") {
      setMeals([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchByName]);

  useEffect(() => {
    if (searchByLetter.trim() !== "") {
      axios
        .get(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchByLetter}`
        )
        .then((res) => {
          setMeals(res.data.meals);
        })
        .catch((err) => console.error(err));
    } else if (searchByName === "") {
      setMeals([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchByLetter]);

  return (
    <>
      <div className="flex flex-col items-center gap-10 mt-10">
        <div className="flex flex-col sm:flex-row justify-center gap-5 w-full items-center">
          <input
            type="text"
            placeholder="Search By Name"
            value={searchByName}
            onChange={(e) => {
              setSearchByName(e.target.value);
              setSearchByLetter("");
            }}
            className="border border-gray-400 rounded-md px-4 py-2 bg-transparent text-white w-[80%] sm:w-[40%]"
          />
          <input
            type="text"
            placeholder="Search By First Letter"
            value={searchByLetter}
            maxLength={1}
            onChange={(e) => {
              setSearchByLetter(e.target.value);
              setSearchByName("");
            }}
            className="border border-gray-400 rounded-md px-4 py-2 bg-transparent text-white w-[80%] sm:w-[40%]"
          />
        </div>

        <Link
          to="/search/productDetail"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-[90%]"
        >
          {meals?.length > 0
            ? meals.map((meal) => (
                <div
                  key={meal.idMeal}
                  onClick={() => handleMealClick(meal?.idMeal)}
                  className="bg-white/10 rounded-lg overflow-hidden text-center text-white hover:scale-105 transition"
                >
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="w-full"
                  />
                  <h3 className="py-2 text-lg font-semibold">{meal.strMeal}</h3>
                </div>
              ))
            : ""}
        </Link>
      </div>
    </>
  );
};

export default Search;
