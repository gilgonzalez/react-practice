import { createContext, useReducer } from "react";
import { TAuthAction, authReducer } from "./authReducer";

export interface AuthState {
  logged: boolean;
  user?: string;
}
const initialState: AuthState = {
  logged: false,
};
type AuthContextType = {
  state: AuthState;
  dispatch: React.Dispatch<TAuthAction>;
};

export const AuthContext = createContext<AuthContextType>({
  state: initialState,
  dispatch: () => null,
});
const init = () => {
  const user: string | null = localStorage.getItem("user");
  if (user) {
    return {
      logged: true,
      user,
    };
  }
  return {
    logged: false,
  };
};

export const AuthProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [state, dispatch] = useReducer(authReducer, initialState, init);
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
