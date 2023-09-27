import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { mainMenu } from "../utils/consts";
import button from "./Button";

export default function Menu() {
  return (
    <Box
      sx={{
        mt: 2,
        mb: 4,
      }}
    >
      {mainMenu.map((menu, index) => (
        <NavLink
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
                "&:hover": {
                  backgroundColor: isActive ? "#eff3f41a" : "initial",
                  width: 197,
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

      <Button
        sx={{
          ml: -1,
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
            <svg
              viewBox="0 0 24 24"
              width={26.25}
              height={26.25}
              style={{ display: "block" }}
            >
              <path
                fill="#e7e9ea"
                d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"
              ></path>
            </svg>
          </Box>
          <Typography
            sx={{
              color: "#e7e9ea",
              textTransform: "none",
              fontSize: "1.25rem",
              paddingRight: "16px",
              fontWeight: "bold",
            }}
          >
            Daha fazla
          </Typography>
        </Box>
      </Button>
      <button>gonder</button>
    </Box>
  );
}
