import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import More from "./More";
import { mainMenu } from "../utils/consts";
import ButtonComponent from "./ButtonComponent";

export default function Menu() {
  return (
    <Box
      sx={{
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
                  width: "169px",
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
      <Box
        sx={{
          paddingBottom: "6.3rem",
          paddingTop: "1.2rem",
          width: "90%",
        }}
      >
        <ButtonComponent size="large">Gönder</ButtonComponent>
      </Box>
    </Box>
  );
}
