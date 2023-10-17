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
        width: "275px",
        maxHeight: "100vh",
        minHeight: "100vh",
        paddingX: "2",
        display: "flex",
        flexDirection: "column",
        position: "sticky",
        top: "0",
        paddingLeft: 1,
      }}
    >
      <Logo />
      <Menu />
      <Account />
    </Box>
  );
}

export default Sidebar;
