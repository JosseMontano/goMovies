import { Index as Login } from "./public/Auth";
import { Index as Home } from "./public/Home";
import { Index as Register } from "./public/Register";
import { Index as Loading } from "./public/loading";
import { Index as Welcome } from "./public/welcome";
import { Index as LoginBack } from "./public/loginBack";

export enum RouteEnum {
  loading = "/",
  welcome = "/welcome",
  login = "/login",
  signIn = "/sign-in",
  home = "/home",
  signUp = "/sign-up",
}

interface Map {
  path: string;
  element: JSX.Element;
}

export const RouteMap:Map[] = [
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
    path: "/sign-in",
    element: <LoginBack />,
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

