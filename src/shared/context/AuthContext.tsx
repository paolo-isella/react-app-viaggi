import { createContext, PropsWithChildren, useCallback, useState } from "react";

type AuthType = {
  isLogged: boolean;
  userId: string | undefined;
  login: () => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthType>({
  isLogged: false,
  userId: undefined,
  login: () => {},
  logout: () => {},
});

const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [isLogged, setIsLogged] = useState(false);
  const [userId, setuserId] = useState<string>();

  const login = useCallback(() => {
    setIsLogged(true);
    setuserId("u1");
  }, []);

  const logout = useCallback(() => {
    setIsLogged(false);
    setuserId(undefined);
  }, []);

  return (
    <AuthContext.Provider value={{ isLogged, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
