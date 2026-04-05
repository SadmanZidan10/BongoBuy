import Home from "./pages/Home";
import About from "./pages/About";
import CategoriesPage from "./pages/CategoriesPage";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import SearchResults from "./pages/SearchResults";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/",            element: <Home /> },
  { path: "/about",       element: <About /> },
  { path: "/categories",  element: <CategoriesPage /> },
  { path: "/product/:id", element: <ProductDetail /> },
  { path: "/cart",        element: <Cart /> },
  { path: "/checkout",    element: <Checkout /> },
  { path: "/search",      element: <SearchResults /> },
]);

export default router;