import { Index as Login } from "./public/Auth";
import { Index as Home } from "./public/Home";

export const RouteMap = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
];
