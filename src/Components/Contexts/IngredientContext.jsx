import React, { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const Ingredientcontext = createContext();
export const IngredientsContext = ({ children }) => {
  const [TypeIngredient, setTypeIngredient] = useState(null);
  const [idMeal, setIdMeal] = useState(null);

  const IngredientValue = localStorage.getItem("TypeIngredient");
  useEffect(() => {
    if (IngredientValue != null) {
      setTypeIngredient(IngredientValue);
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
      <Ingredientcontext.Provider
        value={{ setTypeIngredient, TypeIngredient, idMeal, setIdMeal }}
      >
        {children}
      </Ingredientcontext.Provider>
    </>
  );
};

export default IngredientsContext;
