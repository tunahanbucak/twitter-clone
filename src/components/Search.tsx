import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  return (
    <Box
      sx={{
        minHeight: "32px",
        height: "53px",
        marginBottom: "12px",
      }}
    >
      <TextField
        label="ara"
        fullWidth
        InputLabelProps={{
          sx: {
            ml: 6,
            mt: -0.8,
            color: "#fff",
          },
          shrink: false,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              sx={{
                paddingTop: 2.7,
                // mt: 3,
              }}
            >
              <SearchIcon
                sx={{
                  color: "#fff",
                }}
              />
            </InputAdornment>
          ),
          sx: {
            display: "block",
            height: "43px",
            borderRadius: "999px",
            backgroundColor: "#202327",
          },
        }}
      />
    </Box>
  );
}
