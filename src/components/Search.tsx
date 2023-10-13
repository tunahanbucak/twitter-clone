import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Box, Button, Typography } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "999px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  marginRight: theme.spacing(2),
  marginLeft: -1,
  width: "100%",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [focus, setFocus] = useState(false);

  const handleClickAway = () => {
    setFocus(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box
        sx={{
          mb: 2,
          mt: 1,
          position: "relative",
        }}
      >
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Ara"
            inputProps={{ "aria-label": "search" }}
            onFocus={() => setFocus(true)}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && focus && (
            <Button
              type="button"
              onClick={() => setQuery("")}
              sx={{
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                backgroundColor: "var(--color-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                cursor: "pointer",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                right: "8px",
                "& svg": {
                  fontSize: "10px",
                  color: "#000",
                },
              }}
            >
              <svg
                viewBox="0 0 15 15"
                width={15}
                height={15}
                style={{
                  background: "#fff",
                  borderRadius: "50%",
                }}
              >
                <path
                  fill="black"
                  d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z"
                />
              </svg>
            </Button>
          )}
        </Search>
        {focus && (
          <Box
            sx={{
              border: "1px solid red",
              position: "relative",

              width: "100%",
              left: 0,
              bottom: "100%",
              p: 2,
              borderRadius: "8px",
              backgroundColor: "var(--background-primary)",
              boxShadow: (theme) =>
                theme.palette.mode === "dark"
                  ? theme.shadows[3]
                  : "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Typography
              sx={{
                color: "var(--color-base-secondary)",
                fontSize: "16px",
                lineHeight: "1.25",
              }}
            >
              Kişileri, listeleri veya anahtar kelimeleri aramayı dene
            </Typography>
          </Box>
        )}
      </Box>
    </ClickAwayListener>
  );
}
