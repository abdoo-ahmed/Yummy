import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Area from "../Area/Area";
import Categories from "../Categories/Categories";
import NotFound from "../NotFound/NotFound";
import AreaDetail from "../AreaDetail/AreaDetail";
import Details from "../AreaDetail/Details";

export const router = createBrowserRouter([
  {path:'' , element : <Layout/> , children : [
    {path:'area' , element: <Area/> },
    {path:'area/areaDetail' , element: <AreaDetail/>},
    {path:'area/areaDetail/ProductDetail' , element: <Details/>},
    {path:'categories' , element: <Categories/> },
    {path:'*' , element: <NotFound/> },


  ]}
])
