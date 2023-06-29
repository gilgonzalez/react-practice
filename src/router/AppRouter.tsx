import { Route, Routes } from "react-router";
import LoginPage from "../auth/pages/LoginPage";
import HeroesRoutes from "../heroes/routes/HeroesRoutes";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoutes";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AppRouter;
