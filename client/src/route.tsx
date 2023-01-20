import { Index as Login } from "./public/Auth";
import { Index as Home } from "./public/Home";
import { Index as Register } from "./public/Register";

export const RouteMap = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/sign-up",
    element: <Register />,
  },
];
