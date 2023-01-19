import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../store/user";

interface Type {
  children: JSX.Element;
  path: string;
}

interface RouteType {
  [key: string]: () => void;
}

const ProtectedRoute = ({ children, path }: Type) => {
  const { user } = useUser();
  const navigate = useNavigate();

  const noLogged = () => {
    if (user.email == "") {
      navigate("/");
    }
  };

  const logged = () => {
    if (user.email != "") {
      navigate("/home");
    }
  };

  const verify = () => {
   /*  logged();
    noLogged(); */
  };

  useEffect(() => {
    verify();
  }, [user]);

  return <>{children}</>;
};

export default ProtectedRoute;
