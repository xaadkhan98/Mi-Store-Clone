import { Outlet } from "react-router-dom";
import "./App.css";
import LayoutWrapper from "./components/Layout";
// import AppRoutes from "./utils/routes";
import { RouterProvider } from "react-router-dom";
import AppRoutes from "./utils/routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={AppRoutes} />
    </div>
  );
}

export default App;
