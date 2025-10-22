import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Area from "../Area/Area";
import Categories from "../Categories/Categories";
import CategoriesDetails from "../Categories/CategoriesDetails";
import NotFound from "../NotFound/NotFound";
import AreaDetail from "../Area/AreaDetail";
import Details from "../Details/Details";
import Ingredients from "../Ingredients/Ingredients";
import IngredientDetails from "../Ingredients/IngredientDetails";
import Contacts from "../Contacts/Contacts";
import Search from "../Search/Search";
import Home from "../Home/Home";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "home/ProductDetail", element: <Details /> },
      { path: "search", element: <Search/> },
      { path: "search/productDetail", element: <Details /> },
      { path: "area", element: <Area /> },
      { path: "area/areaDetail", element: <AreaDetail /> },
      { path: "area/areaDetail/ProductDetail", element: <Details /> },
      { path: "categories", element: <Categories /> },
      { path: "categories/categoriesDetails", element: <CategoriesDetails /> },
      { path: "categories/categoriesDetails/ProductDetail",element: <Details />},
      { path: "ingredients", element: <Ingredients /> },
      { path: "ingredients/ingredientDetail", element: <IngredientDetails /> },
      { path: "ingredients/ingredientsDetails/ProductDetail",element: <Details />,},
      { path: "contactUs", element: <Contacts />},
      { path: "*", element: <NotFound /> },
    ],
  },
]);
