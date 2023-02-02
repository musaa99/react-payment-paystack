import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Paystack from "./components/Paystack";
import Body from "./Main/Body";
// import Cart from "./pages/cart";

// import Home from "./Payment/Home";
// import Pay from "./Payment/Pay";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
     
     
    },
    {
      path: "/paystack",
      element: <Paystack />,
     
     
    },
   
    
  ]);
  return <RouterProvider router={router} />;
}

export default App;


