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
        sx={{}}
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
          </Button>
        </Box>
      </Popover>
    </Link>
  );
}
