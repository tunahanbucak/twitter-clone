import React from "react";
import Drawer from "@mui/material/Drawer";
import { Box } from "@mui/material";
import Logo from "./Logo";
import Menu from "./Menu";

function Sidebar() {
  return (
    <Box
      sx={{
        width: 275,
        height: 500,
        padding: 1,
        // maxHeight: "100vh",
        // backgroundColor: "#FF0000",
      }}
    >
      <Logo />
      <Menu />
    </Box>
  );
}

export default Sidebar;
