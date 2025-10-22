import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const Categorycontext = createContext();
export const CategoryContext = ({ children }) => {
  const [TypeFood, setTypeFood] = useState(null);
  const [idMeal, setIdMeal] = useState(null);

  const FoodValue = localStorage.getItem("TypeFood");
  useEffect(() => {
    if (FoodValue != null) {
      setTypeFood(FoodValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const IDM = localStorage.getItem("Details");
  useEffect(() => {
    if (IDM != null) {
      setIdMeal(IDM);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Categorycontext.Provider
        value={{ setTypeFood, TypeFood, idMeal, setIdMeal }}
      >
        {children}
      </Categorycontext.Provider>
    </>
  );
};
