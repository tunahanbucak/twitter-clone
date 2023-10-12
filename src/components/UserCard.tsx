import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";

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
  return (
    <Button
      sx={{
        py: 3,
        px: 4,
        display: "flex",
        gap: 3,
        transition: "background-color 0.3s",
        "&:hover": { backgroundColor: "var(--background-third)" },
      }}
    >
      <Box sx={{ flex: "1", display: "flex", gap: "3" }}>
        <img
          style={{
            width: "10",
            height: "10",
            borderRadius: "50%",
            objectFit: "cover",
          }}
          src={user.avatar}
          alt=""
        />
        <Box sx={{ width: "calc(100% - 3.25rem)", textAlign: "left" }}>
          <Box>
            <Typography
              sx={{
                lineHeight: "1.25",
                fontWeight: "bold",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {user.fullName}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "var(--color-base-secondary)",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              @{user.username}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        {following ? (
          <Button onClick={() => setFollowing(false)}>
            <ButtonComponent size={"small"} onClick={() => setFollowing(false)}>
              <Box className="flex group-hover:hidden">Takibi bırak</Box>
              <Box className="hidden group-hover:flex">Takip ediliyor</Box>
            </ButtonComponent>
          </Button>
        ) : (
          <Button onClick={() => setFollowing(true)}>
            <ButtonComponent size={"small"} onClick={() => setFollowing(true)}>
              Takip et
            </ButtonComponent>
          </Button>
        )}
      </Box>
    </Button>
  );
}
