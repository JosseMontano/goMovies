import { Index as Login } from "./public/Auth";
import { Index as Home } from "./public/Home";
import { Index as Register } from "./public/Register";
import { Index as Loading } from "./public/loading";
import { Index as Welcome } from "./public/welcome";

export const RouteMap = [
  {
    path: "/",
    element: <Loading />,
  },
  {
    path: "/welcome",
    element: <Welcome />,
  },
  {
    path: "/login",
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
