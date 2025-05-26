import "./App.css";
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
