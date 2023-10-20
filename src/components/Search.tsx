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
            backgroundColor: "var(--background-third)",
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
              color: focus ? "#1d9bf0" : "var(--color-base-secondary)",
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
              minHeight: "100px",
              maxHeight: "calc(80vh - 53px)",
              position: "absolute",
              width: "100%",
              height: 100,
              borderRadius: "8px",
              background: " var(--background-primary)",
              boxShadow:
                "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px",

              zIndex: 1,
            }}
          >
            <Typography
              sx={{
                color: "var(--color-base-secondary)",
                fontSize: "15px",
                fontWeight: 400,
                lineHeight: "20px",
                fontFamily:
                  '"TwitterChirp",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
                padding: "12px",
                paddingTop: "20px",
                textAlign: "center",
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
