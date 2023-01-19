import "./App.css";
import { Index as Login } from "./public/Auth";
import { Index as Home } from "./public/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./global/components/protectedRoute";
import { RouteMap } from "./route";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {RouteMap.map((v) => (
          <Route
            element={<ProtectedRoute children={v.element} path={v.path} />}
            path={v.path}
            key={v.path}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
