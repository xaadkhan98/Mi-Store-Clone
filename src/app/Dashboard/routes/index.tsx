import path from "path";
import CategoryTab from "../components/Category";
import OrdersTab from "../components/Orders";
import ProductsTab from "../components/Products";
import DashboardLayout from "../components/Layout";

const dashboardChildRoutes = [
  {
    path: "products",
    element: <ProductsTab />,
  },
  {
    path: "category",
    element: <CategoryTab />,
  },
  {
    path: "orders",
    element: <OrdersTab />,
  },
];

export default dashboardChildRoutes;
