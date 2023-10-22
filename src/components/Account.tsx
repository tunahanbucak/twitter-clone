import { Box, Button, Typography } from "@mui/material";
import Popover from "@mui/material/Popover";
import React, { useState } from "react";
import { useAccounts } from "../store//auth/hooks";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { useAppearance } from "../store/appearance/hooks";

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
            backgroundColor: "var(--background-third)",
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
                color: "var(--color-base)",
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
                color: "var(--color-base-secondary)",

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
              color: "var(--color-base)",
            }}
          />
        </Box>
      </Button>
      <Popover
        sx={{
          "& .MuiPopover-paper": {
            mt: -10,
            ml: -3,
            width: "300px",
            height: "112px",
            minWidth: "260px",
            minHeight: "30px",
            maxWidth: "360px",
            maxHeight: "480px",
            overflow: "auto",
            paddingBottom: "12px",
            paddingTop: "12px",
            backgroundColor: " var(--background-primary)",
            borderRadius: "16px",
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
            paddingBottom: "12px",
            paddingTop: "12px",
            paddingRight: "16px",
            paddingLeft: "20px",
            width: "100%",
            transition: "bacgroundcolor 0.3s",
            justifyContent: "flex-start",
            background: " var(--background-primary)",
            "&:hover": {
              backgroundColor: "var(--background-secondary)",
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "15px",
              lineHeight: "20px",
              color: "var(--color-base)",
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
            paddingBottom: "12px",
            paddingTop: "12px",
            paddingRight: "40px",
            paddingLeft: "16px",
            width: "100%",
            transition: "bacgroundcolor 0.3s",
            justifyContent: "flex-start",
            background: " var(--background-primary)",
            flexShrink: 1,
            "&:hover": {
              backgroundColor: "var(--background-secondary)",
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "15px",
              lineHeight: "20px",
              color: "var(--color-base)",
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
