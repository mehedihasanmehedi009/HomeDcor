import { createBrowserRouter } from "react-router";
import Home from "./Home/Home";
import Products from "./Home/Products";
import MainLayout from "../../Layouts/MainLayout";
import ErrorPages from "./Home/ErrorPages";
import Wishlist from "./Home/Wishlist";
export const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    errorElement:<ErrorPages/>,
    hydrateFallbackElement:<p>Loading.....</p>,
    children:[
   
    {
    index:true,
    element:<Home/>,
  }
  ,
  {
    path: "/Products",
    element:<Products/>
  }
  ,
  {
    path:"/Wishlist",
    element:<Wishlist/>
  }
 ],
} 

// {
// path:"*"
// ,
// element:<ErrorPages/>
// }
]);
