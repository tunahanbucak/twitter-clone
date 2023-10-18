import { Box, Button, Typography } from "@mui/material";
import Popover from "@mui/material/Popover";
import React, { useState } from "react";
import { useAccounts } from "../store/hooks";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

export default function Account() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const account = useAccounts();

  return (
    <Box sx={{ ml: 1 }}>
      <Button
        aria-describedby={id}
        sx={{
          color: "white",
          cursor: "pointer",
          borderRadius: "999px",
          "&:hover": {
            backgroundColor: "#5555",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          },
          width: "full",
          display: "flex",
          textAlign: "left",
          alignItems: "center",
          transition: "background-color 0.3s, box-shadow 0.3s",
          outline: "none",
        }}
        onClick={handleClick}
      >
        <img
          src={account[0].avatar}
          alt=""
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
          }}
        />
        <Box
          sx={{
            display: "flex",
            gap: 6,
          }}
        >
          <Box
            sx={{
              ml: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                color: "#E7E9EA",
                fontWeight: "bold",
                textTransform: "none",
                alignItems: "center",
                lineHeight: "20px",
              }}
            >
              {account[0].fullName}
            </Typography>
            <Typography
              sx={{
                fontSize: "15px",
                color: "#71767B",
                fontWeight: "bold",
                textTransform: "none",
              }}
            >
              @{account[0].username}
            </Typography>
          </Box>
          <MoreHorizOutlinedIcon
            sx={{
              alignItems: "center",
              justifyContent: "center",
              mt: 1,
            }}
          />
        </Box>
      </Button>
      <Popover
        sx={{
          "& .MuiPopover-paper": {
            mt: -8,
            width: "300px",
            minWidth: "260px",
            minHeight: "30px",
            maxWidth: "360px",
            maxHeight: "480px",
            overflow: "auto",
            paddingBottom: "12px",
            paddingTop: "12px",
            background: "black",
            boxShadow:
              "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px",
          },
        }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <Button
          sx={{
            padding: "12px 16px 12px 16px",
            width: "100%",
            transition: "bacgroundcolor 0.3s",
            justifyContent: "flex-start",
            background: "black",
            "&:hover": {
              backgroundColor: "#5555",
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "15px",
              lineHeight: "20px",
              color: "rgb(231, 233, 234)",
              textTransform: "none",
              fontFamily:
                '"TwitterChirp",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
            }}
          >
            Var olan bir hesap ekle
          </Typography>
        </Button>
        <Button
          sx={{
            paddingRight: "5rem",
            width: "100%",
            justifyContent: "flex-start",
            transition: "bacgroundcolor 0.3s",
            background: "black",
            "&:hover": {
              backgroundColor: "#5555",
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "15px",
              lineHeight: "20px",
              color: "rgb(231, 233, 234)",
              textTransform: "none",
              fontFamily:
                '"TwitterChirp",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
            }}
          >
            @{account[0].username} hesabından çıkış yap
          </Typography>
        </Button>
      </Popover>
    </Box>
  );
}
