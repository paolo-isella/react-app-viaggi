import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavigationMenu from "./NavigationMenu";

const MainLayout = () => {
  return (
    <Box sx={{ flexDirection: "row" }}>
      <Header />
      <NavigationMenu />
      <Outlet />
    </Box>
  );
};

export default MainLayout;
