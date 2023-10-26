import { Box, Button, Link, Popover, Typography } from "@mui/material";
import React, { useState } from "react";
import FooterMore from "./FooterMore";

export default function Footer() {
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
          color: "var(--color-base-secondary)",

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
          color: "var(--color-base-secondary)",
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
          color: "var(--color-base-secondary)",
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
          color: "var(--color-base-secondary)",
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
          color: "var(--color-base-secondary)",
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
          color: "var(--color-base-secondary)",
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
