import { createBrowserRouter } from "react-router-dom";
import LayoutWrapper from "../../components/Layout";
import Homepage from "../../Container/Homepage";
import About from "../../Container/About";
import Products from "../../Container/Products";
import Collections from "../../Container/Collections";
import CheckoutContainer from "../../Container/Checkout";
import Dashboard from "../../Container/Dashboard";
import Login from "../../Container/Login";
import ProtectedRoute from "./ProtectedRoutes";
import DashboardLayout from "../../Container/Dashboard/components/Layout";
import ProductsTab from "../../Container/Dashboard/components/Products";
import CategoryTab from "../../Container/Dashboard/components/Category";
import OrdersTab from "../../Container/Dashboard/components/Orders";
import dashboardChildRoutes from "../../Container/Dashboard/routes";
import { selectLoginData } from "../../redux/selectors";
import { useSelector } from "react-redux";
import path from "path";
import Payment from "../../Container/Payment/Payment";
import Checkout from "../../Container/Checkout";
import ErrorPage from "../../Container/ErrorPage";

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
  { path: "/checkout", element: <Checkout /> },
  { path: "/checkout/payment", element: <Payment /> },
  { path: "*", element: <ErrorPage /> },
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
