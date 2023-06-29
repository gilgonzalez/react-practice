import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const {
    state: { logged },
  } = useContext(AuthContext);

  return logged ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
