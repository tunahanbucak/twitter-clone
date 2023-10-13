import { Box, Button, Link, Popover, Typography } from "@mui/material";
import React, { useState } from "react";
import FooterMore from "./FooterMore";

export default function Footer() {
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
        mt: 3,
        mb: 4,
        paddingLeft: "16px",
        paddingRight: "16px",
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
        fontSize: "15px",
      }}
    >
      <Link
        href=""
        sx={{
          color: "#71767b",

          textDecoration: "none",
          "&:hover": { textDecoration: "underline" },
        }}
      >
        <Typography
          sx={{
            lineHeight: "16px",
            fontSize: "13px",
            fontWeight: 400,
            paddingRight: "2px",
          }}
        >
          Hizmet Şartları
        </Typography>
      </Link>
      <Link
        href="/"
        sx={{
          color: "#71767b",
          textDecoration: "none",

          "&:hover": { textDecoration: "underline" },
        }}
      >
        <Typography
          sx={{
            lineHeight: "16px",
            fontSize: "13px",
            fontWeight: 400,
            paddingRight: "2px",
          }}
        >
          Gizlilik Politikası
        </Typography>
      </Link>
      <Link
        href="/"
        sx={{
          color: "#71767b",
          textDecoration: "none",

          "&:hover": { textDecoration: "underline" },
        }}
      >
        <Typography
          sx={{
            lineHeight: "16px",
            fontSize: "13px",
            fontWeight: 400,
            paddingRight: "12px",
          }}
        >
          Çerez Politikası
        </Typography>
      </Link>
      <Link
        href="/"
        sx={{
          color: "#71767b",
          textDecoration: "none",

          "&:hover": { textDecoration: "underline" },
        }}
      >
        <Typography
          sx={{
            lineHeight: "16px",
            fontSize: "13px",
            fontWeight: 400,
            paddingRight: "2px",
          }}
        >
          Imprint
        </Typography>
      </Link>
      <Link
        href="/"
        sx={{
          color: "#71767b",
          textDecoration: "none",

          "&:hover": { textDecoration: "underline" },
        }}
      >
        <Typography
          sx={{
            lineHeight: "16px",
            fontSize: "13px",
            fontWeight: 400,
            paddingRight: "2px",
          }}
        >
          Erişilebilirlik
        </Typography>
      </Link>
      <Link
        href="/"
        sx={{
          color: "#71767b",
          textDecoration: "none",

          "&:hover": { textDecoration: "underline" },
        }}
      >
        <Typography
          sx={{
            lineHeight: "16px",
            fontSize: "13px",
            fontWeight: 400,
            paddingRight: "12px",
          }}
        >
          Reklam bilgisi
        </Typography>
      </Link>
      <FooterMore />
    </Box>
  );
}
