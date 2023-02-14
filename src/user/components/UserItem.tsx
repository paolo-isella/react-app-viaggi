import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { User } from "../pages/Users";

const UserItem = ({ user }: { user: User }) => {
  return (
    <NavLink style={{ textDecoration: "none" }} to={`/${user.id}/places`}>
      <Card
        sx={{
          background: "#0680bd",
          color: "#fcfeff",
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              alt={user.name}
              src={user.image}
              sx={{ width: 56, height: 56 }}
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography gutterBottom variant="h5" component="div">
                {user.name}
              </Typography>
              {user.places} {user.places === 1 ? "Place" : "Places"}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </NavLink>
  );
};

export default UserItem;
