import { Avatar, Box, Link } from "@mui/material";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

const Header = () => {
  const { isLogged, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 50px",
        alignItems: "center",
        background: "#0680bd",
        color: "#fcfeff",
      }}
    >
      <NavLink to="/">
        <Avatar
          alt=""
          src="https://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19705.png"
          sx={{ width: 56, height: 56 }}
        />
      </NavLink>
      <Box sx={{ fontSize: "30px" }}>TITOLO</Box>
      {isLogged && (
        <Link
          style={{ textDecoration: "none", color: "white" }}
          component="button"
          variant="body2"
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          Logout
        </Link>
      )}
      {!isLogged && (
        <NavLink style={{ textDecoration: "none", color: "white" }} to="/auth">
          {(navData) => (navData.isActive ? "Login" : "Login")}
        </NavLink>
      )}
    </Box>
  );
};

export default Header;
