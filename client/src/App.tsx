import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./global/components/protectedRoute";
import { RouteMap } from "./route";

function App() {
  return (
    <HashRouter>
      <Routes>
        {RouteMap.map((v) => (
          <Route
            element={<ProtectedRoute children={v.element} path={v.path} />}
            path={v.path}
            key={v.path}
          />
        ))}
      </Routes>
    </HashRouter>
  );
}

export default App;
