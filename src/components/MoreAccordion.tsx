import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Link,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreSettings from "./MoreSettings";

interface Props {
  title: string;
  content: string;
  path: string;
}
function CustomAccordion({ title, content, path }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Accordion
      expanded={isOpen}
      onChange={handleToggle}
      sx={{
        background: " var(--background-primary)",
      }}
    >
      <AccordionSummary
        sx={{
          "&:hover": {
            backgroundColor: " var(--background-secondary)",
          },
        }}
        expandIcon={
          <ExpandMoreIcon
            sx={{
              color: isOpen ? " var(--color-primary)" : "var(--color-base)",
            }}
          />
        }
        aria-controls="panel1a-content"
        id="panel1a-header"
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
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          "&:hover": {
            backgroundColor: " #5555",
          },
        }}
      >
        {content && (
          <Link
            sx={{
              textDecoration: "none",
              display: "flex",
              color: "var(--color-base)",
              alignItems: "center",
              paddingLeft: "0.75rem",
              paddingRight: "0.75rem",
              gap: "0.75rem",
              fontSize: "15px",
              fontWeight: 500,
            }}
            href="/"
          >
            <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
              <path fill="currentColor" d={path}></path>
            </svg>
            <Typography>{content}</Typography>
          </Link>
        )}
      </AccordionDetails>
    </Accordion>
  );
}
export default function MoreAccordion() {
  return (
    <Box
      sx={{
        background: " var(--background-primary)",
      }}
    >
      <CustomAccordion
        title="İçerik Üreticisi Stüdyosu"
        content="İstatistikler"
        path="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"
      />
      <CustomAccordion
        title="Profesyonel Araçlar"
        content="Reklamlar"
        path="M1.996 5.5c0-1.38 1.119-2.5 2.5-2.5h15c1.38 0 2.5 1.12 2.5 2.5v13c0 1.38-1.12 2.5-2.5 2.5h-15c-1.381 0-2.5-1.12-2.5-2.5v-13zm2.5-.5c-.277 0-.5.22-.5.5v13c0 .28.223.5.5.5h15c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-15zm8.085 5H8.996V8h7v7h-2v-3.59l-5.293 5.3-1.415-1.42L12.581 10z"
      />
      <MoreSettings />
    </Box>
  );
}
