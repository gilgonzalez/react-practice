import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { AuthActionType } from "../context/authReducer";

export const Navbar = () => {
  const navigate = useNavigate();
  const {
    state: { user, logged },
    dispatch,
  } = useContext(AuthContext);
  const onLogout = () => {
    dispatch({ type: AuthActionType.LOGOUT });
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };
  return (
    <nav className="bg-white p-4 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="flex  items-center justify-between h-full mx-auto">
        <div className="flex items-center gap-4">
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "bg-sky-800" : ""
              } text-white font-semibold   hover:bg-sky-800 p-2 rounded w-50`
            }
            to="/Marvel-Comics"
          >
            Marvel
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "bg-sky-800" : ""
              } text-white font-semibold   hover:bg-sky-800 p-2 rounded w-50`
            }
            to="/DC-Comics"
          >
            DC
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "bg-sky-800" : ""
              } text-white font-semibold   hover:bg-sky-800 p-2 rounded w-50`
            }
            to="/gifs/*"
          >
            Gifs
          </NavLink>
        </div>
        <div>
          <h3 className="text-gray-800 dark:text-gray-200 capitalize">
            {user}
          </h3>
        </div>
        <div>
          <button
            onClick={onLogout}
            className={`${
              logged ? "bg-red-600" : "bg-sky-800"
            } text-white px-4 py-2 rounded-md`}
          >
            {logged ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </nav>
  );
};
