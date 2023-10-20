import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
interface UserCardProps {
  user: {
    id: number;
    username: string;
    fullName: string;
    avatar: string;
  };
}
export default function UserCard({ user }: UserCardProps) {
  const [following, setFollowing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Button
      sx={{
        py: 1.3,
        px: 2,
        display: "flex",
        gap: 3,
        transition: "background-color 0.3s",
        "&:hover": { backgroundColor: "#5555" },
      }}
    >
      <Box
        sx={{
          flex: "1 1 0%",
          display: "flex",
          gap: "0.75rem",
        }}
      >
        <img
          style={{
            borderRadius: "9999px",
            objectFit: "cover",
            width: "2.5rem",
            height: "2.5rem",
          }}
          src={user.avatar}
          alt=""
        />
        <Box sx={{ textAlign: "left", width: "calc(100%-3.25rem)" }}>
          <Typography
            sx={{
              lineHeight: "1.25rem",
              color: "var(--color-base)",
              fontWeight: 700,
              fontSize: "14px",
              textOverflow: "ellipsis",
              overflow: "hidden",
              textTransform: "none",
            }}
          >
            {user.fullName}
          </Typography>
          <Typography
            sx={{
              color: "var(--color-base-secondary)",
              textOverflow: "ellipsis",
              overflow: "hidden",
              lineHeight: "20px",
              fontWeight: 400,
              fontSize: "13px",
              textTransform: "none",
            }}
          >
            @{user.username}
          </Typography>
        </Box>
      </Box>
      <Box>
        {following ? (
          <Button
            sx={{
              height: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              background: isHovered ? "#FF0000" : "#5555",
              border: "1px solid gray",
              borderRadius: "9999px",
              padding: "0px 1rem 0px 1rem",
              "&:hover": {
                background: "red",
              },
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setFollowing(false)}
          >
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: "0.875rem",
                textTransform: "none",
                fontWeight: 700,
              }}
            >
              {isHovered ? "Takibi bırak" : "Takip ediliyor"}
            </Typography>
          </Button>
        ) : (
          <Button
            sx={{
              height: "2rem",
              padding: "0px 1rem 0px 1rem",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#fff",
              borderRadius: "9999px",
              "&:hover": {
                background: "#fff",
              },
            }}
            onClick={() => setFollowing(true)}
          >
            <Typography
              sx={{
                color: "black",
                fontSize: "0.875rem",
                textTransform: "none",
                fontWeight: 700,
              }}
            >
              Takip et
            </Typography>
          </Button>
        )}
      </Box>
    </Button>
  );
}
