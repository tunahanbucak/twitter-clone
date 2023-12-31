import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import { useState } from "react";
import {
  AccordionSummary,
  AccordionDetails,
  Typography,
  Link,
  Box,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { setModal } from "../store/modal/action";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

export default function MoreSettings() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const closePopover = () => {
    setIsOpen(false);
  };
  return (
    <Box>
      <Accordion
        expanded={isOpen}
        onChange={handleToggle}
        sx={{
          background: " var(--background-primary)",
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: isOpen ? " var(--color-primary)" : "var(--color-base)",
              }}
            />
          }
          sx={{
            "&:hover": {
              backgroundColor: " var(--background-secondary)",
            },
          }}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography
            sx={{
              fontSize: "15px",
              color: "var(--color-base)",
              textTransform: "none",
              fontWeight: "bold",
              fontFamily: "inherit",
            }}
          >
            Ayarlar ve Destek
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            ml: -2,
          }}
        >
          <Link
            sx={{
              width: "100%",
              textDecoration: "none",
              display: "flex",
              color: "var(--color-base)",
              alignItems: "center",
              paddingLeft: "0.75rem",
              paddingRight: "0.75rem",
              gap: "0.75rem",
              fontSize: "15px",
              fontWeight: 500,
              padding: "11px",
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: "var(--background-secondary)",
              },
            }}
            href="/"
          >
            <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
              <path
                fill="currentColor"
                d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"
              ></path>
            </svg>
            <Typography> Ayarlar ve Gizlilik</Typography>
          </Link>
          <Link
            sx={{
              width: "100%",
              textDecoration: "none",
              display: "flex",
              color: "var(--color-base)",
              alignItems: "center",
              paddingLeft: "0.75rem",
              paddingRight: "0.75rem",
              gap: "0.75rem",
              fontSize: "15px",
              fontWeight: 500,
              padding: "11px",
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: "var(--background-secondary)",
              },
            }}
            href="/"
          >
            <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
              <path
                fill="currentColor"
                d="M11.57 11.96l.99-.79c.33-.26.56-.53.7-.8.15-.27.22-.57.22-.91 0-.41-.12-.74-.38-.97s-.62-.35-1.09-.35-.85.12-1.13.37c-.26.25-.4.59-.4 1.03 0 .2.03.42.08.65l-2.07-.15c-.06-.29-.09-.55-.09-.79 0-.84.33-1.51.98-2.01.67-.49 1.55-.74 2.66-.74 1.17 0 2.07.24 2.71.73.63.48.95 1.16.95 2.04 0 .98-.47 1.86-1.4 2.65l-.87.73c-.17.15-.29.28-.36.4-.06.11-.09.26-.09.45v.46h-2.1v-.67c0-.3.06-.55.17-.75.12-.2.29-.39.52-.58zm-.52 5.17c.24.25.56.37.93.37.39 0 .7-.12.94-.37.25-.25.37-.56.37-.94 0-.39-.12-.7-.37-.95-.24-.25-.55-.37-.94-.37-.37 0-.69.12-.93.37s-.36.56-.36.95c0 .38.12.69.36.94zM22.25 12c0 5.66-4.59 10.25-10.25 10.25S1.75 17.66 1.75 12 6.34 1.75 12 1.75 22.25 6.34 22.25 12zM12 20.25c4.56 0 8.25-3.69 8.25-8.25S16.56 3.75 12 3.75 3.75 7.44 3.75 12s3.69 8.25 8.25 8.25z"
              ></path>
            </svg>
            <Typography>Yardım Merkezi</Typography>
          </Link>
          <Button
            onClick={() => {
              closePopover();
              setModal("appearance");
            }}
            sx={{
              width: "100%",
              textDecoration: "none",
              display: "flex",
              color: "var(--color-base)",
              alignItems: "center",
              paddingRight: "0.75rem",
              gap: "0.75rem",
              fontSize: "15px",
              fontWeight: 500,
              padding: "11px",
              transition: "background-color 0.3s",
              justifyContent: "flex-start",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "var(--background-secondary)",
                width: "100%",
              },
            }}
          >
            <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
              <path
                fill="currentColor"
                d="M20 12h2v6.5c0 1.38-1.12 2.5-2.5 2.5h-15C3.12 21 2 19.88 2 18.5v-13C2 4.12 3.12 3 4.5 3H11v2H4.5c-.28 0-.5.22-.5.5v13c0 .28.22.5.5.5h15c.27 0 .5-.22.5-.5V12zm2.31-6.78l-6.33 7.18c-.2 2.02-1.91 3.6-3.98 3.6H8v-4c0-2.07 1.58-3.78 3.6-3.98l7.18-6.33c.99-.88 2.49-.83 3.43.1.93.94.98 2.44.1 3.43zm-1.52-2.01c-.19-.19-.49-.2-.69-.02l-6.08 5.36c.59.35 1.08.84 1.43 1.43l5.36-6.08c.18-.2.17-.5-.02-.69z"
              ></path>
            </svg>
            <Typography>Görünüm</Typography>
          </Button>
          <Link
            sx={{
              width: "100%",
              textDecoration: "none",
              display: "flex",
              color: "var(--color-base)",
              alignItems: "center",
              paddingLeft: "0.75rem",
              paddingRight: "0.75rem",
              gap: "0.75rem",
              fontSize: "15px",
              fontWeight: 500,
              padding: "11px",
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: "var(--background-secondary)",
              },
            }}
            href="/"
          >
            <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
              <path
                fill="currentColor"
                d="M11.999 22.25c-5.652 0-10.25-4.598-10.25-10.25S6.347 1.75 11.999 1.75 22.249 6.348 22.249 12s-4.598 10.25-10.25 10.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25-3.701-8.25-8.25-8.25zm.445 6.992c1.747-.096 3.748-.689 3.768-.695l.575 1.916c-.077.022-1.616.48-3.288.689v.498c.287 1.227 1.687 2.866 2.214 3.405l-1.428 1.4c-.188-.191-1.518-1.576-2.286-3.144-.769 1.568-2.098 2.952-2.286 3.144l-1.428-1.4c.527-.54 1.927-2.178 2.214-3.405v-.498c-1.672-.209-3.211-.667-3.288-.689l.575-1.916c.02.006 2.021.6 3.768.695m0 0c.301.017.59.017.891 0M12 6.25c-.967 0-1.75.78-1.75 1.75s.783 1.75 1.75 1.75 1.75-.78 1.75-1.75-.784-1.75-1.75-1.75z"
              ></path>
            </svg>
            <Typography>Klavye Kısayolları</Typography>
          </Link>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
