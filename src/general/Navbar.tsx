import { NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const onLogout = () => {
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
          <h3 className="text-gray-800 dark:text-gray-200">
            FRANCISCO JAVIER GIL{" "}
          </h3>
        </div>
        <div>
          <button
            onClick={onLogout}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};
