import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../shared/context/AuthContext";

const ProtectedRoutes = () => {
  const { isLogged } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate("/auth");
    }
  }, [isLogged, navigate]);

  return <Outlet />;
};

export default ProtectedRoutes;
