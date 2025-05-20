import { createBrowserRouter } from "react-router-dom";
import LayoutWrapper from "../../components/Layout";
import Homepage from "../../app/Homepage";
import About from "../../app/About";
import Products from "../../app/Products";
import Collections from "../../app/Collections";
import CheckoutContainer from "../../app/Checkout";
import Dashboard from "../../app/Dashboard";
import Login from "../../app/Login";
import ProtectedRoute from "./ProtectedRoutes";
import DashboardLayout from "../../app/Dashboard/components/Layout";
import ProductsTab from "../../app/Dashboard/components/Products";
import CategoryTab from "../../app/Dashboard/components/Category";
import OrdersTab from "../../app/Dashboard/components/Orders";
import dashboardChildRoutes from "../../app/Dashboard/routes";
import { selectLoginData } from "../../redux/selectors";
import { useSelector } from "react-redux";
import path from "path";
import Payment from "../../app/Payment/Payment";

//Check for Authentication
const isAuthenticated = localStorage.getItem("isAuthenticated");

const childrenRoutes = [
  { path: "/", element: <Homepage /> },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/collections/:categoryy", element: <Collections /> },
  { path: "/products/:productId", element: <Products /> },
  { path: "/checkout", element: <CheckoutContainer /> },
  { path: "/checkout/payment", element: <Payment /> },
];

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWrapper />,
    children: childrenRoutes,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: dashboardChildRoutes,
  },
]);

export default AppRoutes;
