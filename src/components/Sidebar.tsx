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
        // width: 275,
        // //height: 500,
        // padding: 1,
        // display: "flex",
        // flexDirection: "column",
        // maxHeight: "100vh",
        // // backgroundColor: "#FF0000",
        width: "275px",
        maxHeight: "100vh",
        padding: "2px",
        display: "flex",
        flexDirection: "column",
        // overflowY: "auto",
      }}
    >
      <Logo />
      <Menu />
      <Account />
    </Box>
  );
}

export default Sidebar;
