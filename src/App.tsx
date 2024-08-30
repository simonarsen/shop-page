import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductPage from "./view/components/productPage";
import Root from "./view/components/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/products/:productId",
    element: <ProductPage  />,
  },
]);

function App() {  
  return <RouterProvider router={router} />;
}

export default App;
