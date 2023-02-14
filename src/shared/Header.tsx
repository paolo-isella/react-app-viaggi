import { Box } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        alignItems: "center",
        background: "#0680bd",
        color: "#fcfeff",
      }}
    >
      <div>LOGO</div>
      <Box sx={{ fontSize: "30px" }}>TITOLO</Box>
      <div>LOGIN/LOGOUT</div>
    </Box>
  );
};

export default Header;
