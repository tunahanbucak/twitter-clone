import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { mainMenu } from "../utils/consts";
import ButtonComponent from "./ButtonComponent";
import More from "./More";
import New from "./New";

export default function Menu() {
  return (
    <Box
      sx={{
        //mb: 4,
        ml: 1,
      }}
    >
      {mainMenu.map((menu, index) => (
        <NavLink
          key={index}
          to={menu.path}
          style={{
            textDecoration: "none",
            paddingTop: "0.25rem",
            paddingBottom: "0.4rem",
            display: "block",
            margin: "1.2rem 0",
          }}
        >
          {({ isActive }) => (
            <Box
              sx={{
                borderRadius: "99px",
                "&:hover": {
                  //      backgroundColor: isActive ? "#eff3f41a" : "initial",
                  width: "100%",
                  background: "#5555",
                },
              }}
            >
              <Box
                sx={{
                  padding: "2px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  mt: -1.9,
                  ml: 0.5,
                  transition: "colors",
                }}
              >
                <Box
                  sx={{
                    width: "26.25px",
                    height: "26.25px",
                    position: "relative",
                  }}
                >
                  {menu?.notification && (
                    <Typography
                      sx={{
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        background: "#1d9bf0",
                        position: "absolute",
                        top: -6,
                        right: -4,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "11px",
                      }}
                    >
                      {menu?.notification}
                    </Typography>
                  )}

                  {isActive ? menu.icon.passive : menu.icon.active}
                </Box>

                <Typography
                  sx={{
                    color: isActive ? "#fff" : "#e7e9ea",
                    fontSize: "1.25rem",
                    paddingRight: "16px",
                    fontWeight: isActive ? "bold" : "normal",
                  }}
                >
                  {menu.title}
                </Typography>
              </Box>
            </Box>
          )}
        </NavLink>
      ))}

      <More />
      <New />
    </Box>
  );
}
