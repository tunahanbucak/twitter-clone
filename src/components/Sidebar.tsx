import React from "react";
import Drawer from "@mui/material/Drawer";
import { Box } from "@mui/material";
import Logo from "./Logo";
import Menu from "./Menu";
import Account from "./Account";

function Sidebar() {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        maxHeight: "100vh",
        maxWidth: "275px",
        padding: "3px",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      <Logo />
      <Menu />
      <Account />
    </Box>
  );
}

export default Sidebar;
