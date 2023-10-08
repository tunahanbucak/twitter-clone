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
          mt: -10,
          ml: 3,
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
            background: "black",
            width: 300,
            height: 132,
            border: "1px solid rgba(255, 255, 255, 0.2)",

            boxShadow:
              "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px",
          }}
        >
          <Button
            sx={{
              height: "3.5rem",
              width: "100%",
              transition: "bacgroundcolor 0.3s",
              display: "inline-flex",
              alignItems: "center",
              gap: "1rem",
              ml: -8,
              background: "black",
              "&:hover": {
                backgroundColor: "black",
              },
            }}
          >
            <Typography
              sx={{
                paddingLeft: "1rem",
                //       fontSize: "1.25rem",
                color: "#ffffff",
                textTransform: "none",
                // fontWeight: "bold",
              }}
            >
              Var olan bir hesap ekle
            </Typography>
          </Button>
          <Button
            sx={{
              paddingLeft: "1rem",
              paddingRight: "1rem",
              height: "3.5rem",
              ml: -4,
              width: "100%",
              transition: "bacgroundcolor 0.3s",
              display: "inline-flex",
              alignItems: "center",
              gap: "1.25rem",
              background: "black",
              "&:hover": {
                backgroundColor: "black",
              },
            }}
          >
            <Typography
              sx={{
                //  paddingRight: "1rem",
                fontSize: "1.25rem",
                color: "#ffffff",
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              @{account[0].username} hesabından çıkış yap
            </Typography>
          </Button>
        </Box>
      </Popover>
    </Box>
  );
}

{
  /*  
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
            p: 2,
            backgroundColor: "black",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Box shadow
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",

            width: 300,
            height: 132,

            border: "1px solid gray",
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: "100%",
              mb: 1,
            }}
          >
            Buton 1
          </Button>
          <Button
            variant="contained"
            sx={{
              width: "100%",
            }}
          >
            Buton 2
          </Button>
        </Box>
      </Popover>
  
  
  
  
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
        ></Button>
      <Accordion sx={{ color: "white" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            ACILACAK YER
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion> */
}
