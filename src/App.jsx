import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Components/Routes/Routers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AreaContext from "./Components/Contexts/AreaContext";
import { CategoryContext } from "./Components/Contexts/CategoryContext";
import IngredientsContext from "./Components/Contexts/IngredientContext";

const Client = new QueryClient();

const App = () => {
  return (
    <React.Fragment>
      <IngredientsContext>
        <CategoryContext>
          <AreaContext>
            <QueryClientProvider client={Client}>
              <RouterProvider router={router} />
            </QueryClientProvider>
          </AreaContext>
        </CategoryContext>
      </IngredientsContext>
    </React.Fragment>
  );
};

export default App;
