import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PublicRoute = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const {
    state: { logged },
  } = useContext(AuthContext);

  return !logged ? children : <Navigate to="/Marvel-Comics" />;
};

export default PublicRoute;
