import ProductsTab from "../components/Products";
import Home from "../components/Home";
import Users from "../components/Users";

const dashboardChildRoutes = [
  {
    path: "/dashboard",
    element: <Home />,
  },
  {
    path: "products",
    element: <ProductsTab />,
  },
  {
    path: "users",
    element: <Users />,
  },
];

export default dashboardChildRoutes;
