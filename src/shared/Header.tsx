import { Avatar, Box } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = () => {
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
      <NavLink style={{ textDecoration: "none", color: "white" }} to="/auth">
        {(navData) => (navData.isActive ? <b>Login</b> : "Login")}
      </NavLink>
    </Box>
  );
};

export default Header;
