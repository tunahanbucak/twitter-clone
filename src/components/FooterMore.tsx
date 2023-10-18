import { Box, Button, Popover, Typography } from "@mui/material";
import React, { useState } from "react";

export default function FooterMore() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const titles = [
    "Hakkında",
    "X uygulamasını indir",
    "Durum",
    "İşletmeler için X",
    "Geliştiriciler",
  ];

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
        onClick={handleClick}
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
      <Popover
        sx={{
          "& .MuiPopover-paper": {
            ml: -10,
            mt: -3,
            backgroundColor: "black",
            maxHeight: "calc(100vh - 474.788px)",
            width: "188.5px",
            height: "225px",
            maxWidth: "calc(384px)",
            borderRadius: "12px",
            position: "fixed",
            boxShadow:
              "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px",
          },
        }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        {titles.map((title) => (
          <Button
            sx={{
              justifyContent: "flex-start",
              width: "100%",
              padding: "12px 16px 12px 16px",
              "&:hover": {
                backgroundColor: "#5555",
              },
            }}
          >
            <Typography
              sx={{
                color: "rgb(231,233,234)",
                fontWeight: 700,
                fontSize: "15px",
                lineHeight: "20px",
                textTransform: "none",
                fontFamily:
                  '"TwitterChirp",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
              }}
            >
              {title}
            </Typography>
          </Button>
        ))}
      </Popover>
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
