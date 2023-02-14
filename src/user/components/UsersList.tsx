import { Box } from "@mui/material";
import React from "react";
import { User } from "../pages/Users";

import UserItem from "./UserItem";
// import "./UsersList.css";

const UsersList = ({ items }: { items: ReadonlyArray<User> }) => {
  if (items.length === 0) {
    return (
      <div className="center">
        <h2>No users found.</h2>
      </div>
    );
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      {items.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </Box>
  );
};

export default UsersList;
