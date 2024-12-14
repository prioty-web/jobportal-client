import {
    createBrowserRouter,
  } from "react-router-dom";
  import MainLayout from "../layouts/MainLayout";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home/Home";


  
const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h2>ROUTE NOT FOUND</h2>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:'signin',
          element:<SignIn></SignIn>
        }
        

      ]
    },
  ]);
  export default router