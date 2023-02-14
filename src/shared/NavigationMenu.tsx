import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import classes from "./NavigationMenu.module.css";

const NavigationMenu = () => {
  return (
    <Box sx={{ padding: "10px 20px" }}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              {(navData) => (navData.isActive ? <b>USERS</b> : "USERS")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/places"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              {(navData) => (navData.isActive ? <b>PLACES</b> : "PLACES")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/places/new"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              {(navData) =>
                navData.isActive ? <b>NEW PLACES</b> : "NEW PLACES"
              }
            </NavLink>
          </li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </Box>
  );
};

export default NavigationMenu;
