import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function FooterMore() {
  return (
    <Box
      sx={{
        display: "inline-flex",
        flexWrap: "wrap",
        mt: -0.7,
        ml: -1,
      }}
    >
      <Button
        sx={{
          color: "#71767b",
          outline: "none",

          "&:hover": {
            textDecoration: "underline",
          },
          display: "inline-flex",
          alignItems: "center",
        }}
        // onClick={handleClick}
      >
        <Typography
          sx={{
            fontSize: "13px",
            lineHeight: "16px",
            fontWeight: 400,
            textTransform: "none",
          }}
        >
          Daha fazla
        </Typography>
        <svg
          viewBox="0 0 24 24"
          style={{ height: "1em", paddingLeft: 2 }}
          className="h-[1em] px-0.5"
        >
          <path
            fill="currentColor"
            d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
          />
        </svg>
      </Button>
      <Typography
        sx={{
          paddingRight: "12px",
          lineHeight: "16px",
          fontSize: "13px",
          fontWeight: 400,
          color: "#71767b",
          mt: 0.7,
        }}
      >
        &copy; 2023 X Corp.
      </Typography>
    </Box>
  );
}
