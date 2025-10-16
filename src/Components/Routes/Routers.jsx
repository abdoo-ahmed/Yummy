import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Area from "../Area/Area";
import Categories from "../Categories/Categories";
import NotFound from "../NotFound/NotFound";

export const router = createBrowserRouter([
  {path:'' , element : <Layout/> , children : [
    {path:'' , element: <Area/> },
    {path:'/area' , element: <Area/> },
    {path:'/categories' , element: <Categories/> },
    {path:'*' , element: <NotFound/> },

  ]}
])
