import { createBrowserRouter } from "react-router-dom";
import LayoutWrapper from "../../components/Layout";
import Homepage from "../../Container/Homepage";
import Products from "../../Container/Products";
import Collections from "../../Container/Collections";
import Login from "../../Container/Login";
import ProtectedRoute from "./ProtectedRoutes";
import DashboardLayout from "../../Container/Dashboard/components/Layout";
import dashboardChildRoutes from "../../Container/Dashboard/routes";
import Payment from "../../Container/Payment/Payment";
import Checkout from "../../Container/Checkout";
import ErrorPage from "../../Container/ErrorPage";
import PublicRoute from "./PublicRoutes";

const childrenRoutes = [
  { path: "/", element: <Homepage /> },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  { path: "/collections/:categoryy", element: <Collections /> },
  { path: "/products/:productId", element: <Products /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/checkout/payment", element: <Payment /> },
  { path: "*", element: <ErrorPage /> },
];

const AppRoutes = createBrowserRouter([
  // localhost:3000 Routes
  {
    path: "/",
    element: <LayoutWrapper />,
    children: childrenRoutes,
  },
  // localhost:3000/dashboard Routes
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
