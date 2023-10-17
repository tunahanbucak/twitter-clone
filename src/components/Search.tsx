import React, { useState } from "react";
import { alpha, useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Box, Button, Typography } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import ClearIcon from "@mui/icons-material/Clear";

export default function SearchBar() {
  const theme = useTheme();
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
        <Box
          sx={{
            position: "relative",
            borderRadius: "999px",
            backgroundColor: "rgb(22,24,28)",
            marginLeft: -1,
            width: "100%",
            border: focus ? "1px solid #1d9bf0" : "none",
          }}
        >
          <Box
            sx={{
              padding: theme.spacing(0, 2),
              height: "100%",
              position: "absolute",
              pointerEvents: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: focus ? "#1d9bf0" : "none",
            }}
          >
            <SearchIcon />
          </Box>
          <InputBase
            placeholder="Ara"
            inputProps={{ "aria-label": "search" }}
            onFocus={() => setFocus(true)}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            sx={{
              color: "inherit",
              "& .MuiInputBase-input": {
                padding: theme.spacing(1, 1, 1, 0),
                paddingLeft: `calc(1em + ${theme.spacing(4)})`,
                transition: theme.transitions.create("width"),
                width: "100%",
                [theme.breakpoints.up("md")]: {
                  width: "28ch",
                },
              },
            }}
          />
          {query && focus && (
            <Button
              onClick={() => setQuery("")}
              variant="contained"
              style={{
                borderRadius: "50%",
                minWidth: "auto",
                width: "32px",
                height: "32px",
              }}
            >
              <ClearIcon
                sx={{
                  color: "black",
                  width: 20,
                  height: 20,
                }}
              />
            </Button>
          )}
        </Box>
        {focus && (
          <Box
            sx={{
              border: "1px solid gray",
              position: "absolute",
              width: "100%",
              left: 0,
              top: "100%",
              p: 2,
              borderRadius: "8px",
              backgroundColor: "black",
              boxShadow: (theme) =>
                theme.palette.mode === "dark"
                  ? theme.shadows[3]
                  : "0px 4px 4px rgba(0, 0, 0, 0.25)",
              zIndex: 1,
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
