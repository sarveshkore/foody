import { createBrowserRouter } from "react-router-dom";
import AboutUs from "./AboutUs";
import Cart from "./Cart";
import ContactUs from "./ContactUs";
import Menu from "./Menu";
import Body from "./Body";
import App from "../App";
import Errorpage from "./Errorpage";
const appRouter = createBrowserRouter([

      {
        path:"/",
        element:<App />,
        errorElement:<Errorpage/>,
        children:[
          {
            path:"about",
            element:<AboutUs/>,
            
          },
        //   {
        //     path:"contact",
        //     element:<ContactUs/>,
            
        //   },
          {
            path:"cart",
            element:<Cart/>,
            
          },
          {
            path:"",
            element:<Body/>,
          },
          {
            path:"contact",
            element:<ContactUs/>,
          },
          {
            path:"menu/:id",
            element:<Menu/>,
          },
        ]
      }
      ]);
  
  export default appRouter;

