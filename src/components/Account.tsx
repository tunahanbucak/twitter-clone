import {
  Box,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  IconButton,
} from "@mui/material";
import Popover from "@mui/material/Popover";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
    <Box sx={{ marginTop: "auto" }}>
      <Button
        aria-describedby={id}
        sx={{
          color: "white",
          borderRadius: "full",
          "&:hover": {
            backgroundColor: "#efffa",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Gölge efekti
          },
          width: "full",
          display: "flex",
          textAlign: "left",
          alignItems: "center",
          transition: "background-color 0.3s, box-shadow 0.3s", // Geçiş efekti süresi
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
      {/* <Popover
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
        <Button
          sx={{
            color: "white",
            borderRadius: "full",
            "&:hover": {
              backgroundColor: "#efffa",
            },
            width: "full",
            display: "flex",
            textAlign: "left",
            alignItems: "center",
            transition: "background-color 0.3s",
            outline: "none",
          }}
        >
          <img src={account[0].avatar} alt="" />
        </Button>
        <Accordion sx={{ color: "white" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            ACILACAK YER
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>
      </Popover> */}
    </Box>
  );
}
