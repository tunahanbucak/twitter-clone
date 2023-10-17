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
            backgroundColor: "#1f2937",
            color: "#ffffff",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          },
        }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Box
          sx={{
            padding: "12px 16px 12px 16px",
            background: "black",
            width: "100%",
            height: 146,
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow:
              "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px",
          }}
        >
          <Button
            sx={{
              display: "block",
              marginBottom: 1,
              width: "100%",
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
                textAlign: "left",
              }}
            >
              Hakkında
            </Typography>
          </Button>
          <Button
            sx={{
              display: "block",

              marginBottom: 1,
              width: "100%",
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
                textAlign: "left",
              }}
            >
              Durum
            </Typography>
          </Button>
          <Button
            sx={{
              display: "block",
              marginBottom: 1,

              width: "100%",
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
                textAlign: "left",

                textTransform: "none",
              }}
            >
              İşletmeler için X
            </Typography>
          </Button>
          <Button
            sx={{
              display: "block",
              marginBottom: 1,

              width: "100%",
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
                textAlign: "left",
              }}
            >
              Geliştriciler
            </Typography>
          </Button>
        </Box>
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
