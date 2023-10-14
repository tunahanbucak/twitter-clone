import React, { useState } from "react";
import { numberFormat } from "../utils/formats";
import { Box, Button, Link, Popover, Typography } from "@mui/material";

interface TopicsProps {
  item: {
    title: string;
    topic: {
      type: string;
      value: string;
    };
    postCount?: number;
  };
}

export default function Topic({ item }: TopicsProps) {
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
    <Link
      sx={{
        display: "flex",
        alignItems: "center",
        py: 1,
        mb: 0.5,
        textDecoration: "none",
        px: 2,
        transition: "colors",
        "&:hover": {
          backgroundColor: "#5555",
        },
        position: "relative",
      }}
      href="/"
    >
      <Box>
        <Box>
          <Typography
            sx={{
              lineHeight: "16px",
              fontSize: "13px",
              fontWeight: 400,
              color: "#71767b",
            }}
          >
            {item.title}
          </Typography>
          <Typography
            sx={{
              mt: 0.7,
              fontSize: "15px",
              fontWeight: 700,
              lineHeight: "20px",
              color: "#e7e9ea",
            }}
          >
            {item.topic.type === "tag" && "#"}
            {item.topic.value}
          </Typography>
        </Box>
        {item.postCount && (
          <Box>
            <Typography
              sx={{
                color: "#71767b",
                mt: 0.7,
                lineHeight: "16px",
                fontSize: "13px",
                fontWeight: 400,
              }}
            >
              {numberFormat(item.postCount)} posts
            </Typography>
          </Box>
        )}
      </Box>
      <Button
        sx={{
          marginLeft: "auto",
          outline: "none",
          borderRadius: "9999px",
          width: "34.75px",
          height: "34.75px",
          color: "#71767b",
          display: "inline-flex",
          right: "-1.2rem",
          alignItems: "center",
          marginBottom: "auto",
          paddingLeft: 1,
          justifyContent: "center",
          "&:hover": {
            color: "var(--color-primary)",
          },
          position: "absulote",
        }}
        onClick={handleClick}
      >
        <svg
          viewBox="0 0 24 24"
          style={{
            height: "1.172rem",
          }}
        >
          <path
            fill="currentColor"
            d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
          />
        </svg>
      </Button>
      <Popover
        sx={{
          ml: -15,
        }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <Box
          sx={{
            width: "100%",
            height: 88,
            p: 2,
            background: " black ",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            zIndex: 2,
          }}
        >
          <Button
            type="button"
            sx={{
              "&:hover": {
                backgroundColor: "#5555",
              },
              transition: "color",
              textAlign: "left",
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 3,
              fontWeight: "bold",
            }}
          >
            <svg viewBox="0 0 24 24" style={{ height: "1.172rem" }}>
              <path
                fill="currentColor"
                d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"
              />
            </svg>
            İlgimi çekmiyor
          </Button>
          <Button
            type="button"
            sx={{
              "&:hover": {
                backgroundColor: "var(--background-secondary)",
              },
              transition: "color",
              textAlign: "left",

              display: "flex",
              alignItems: "center",
              gap: 3,
              fontWeight: "bold",
            }}
          >
            <svg viewBox="0 0 24 24" style={{ height: "1.172rem" }}>
              <path
                fill="currentColor"
                d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"
              />
            </svg>
            Bu gündem başlığı zararlı veya spam içeriyor
          </Button>
        </Box>
      </Popover>
    </Link>
  );
}

{
  /* <Box
          sx={{
            background: "black",
            width: 300,
            height: 132,
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow:
              "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px",
          }}
        >
        <Button>
            <Typography>Var olan bir hesap ekle</Typography>
          </Button>
          <Button>
            <Typography>hesabından çıkış yap</Typography>
          </Button> */
}
