import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Link,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Props {
  title: string;
  content: string;
  iconColor: string;
  path: string;
}
function CustomAccordion({ title, content, iconColor, path }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Accordion
      expanded={isOpen}
      onChange={handleToggle}
      sx={{
        background: "black",
      }}
    >
      <AccordionSummary
        sx={{
          "&:hover": {
            backgroundColor: " #5555",
          },
        }}
        expandIcon={
          <ExpandMoreIcon
            sx={{
              color: isOpen ? "rgb(29, 155, 240)" : "#fff",
            }}
          />
        }
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography
          sx={{
            paddingRight: "1rem",
            fontSize: "15px",
            color: "#ffffff",
            textTransform: "none",
            fontWeight: "bold",
            fontFamily: "inherit",
          }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {content && (
          <Link
            sx={{
              textDecoration: "none",
              display: "flex",
              color: "#e7e9ea",
              alignItems: "center",
              paddingLeft: "0.75rem",
              paddingRight: "0.75rem",
              height: "2.75rem",
              gap: "0.75rem",
              fontSize: "15px",
              fontWeight: "500",
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: "rgb(85, 85, 85)",
              },
            }}
            href="/"
          >
            <svg
              viewBox="0 0 24 24"
              width={18.75}
              height={18.75}
              style={{ fill: iconColor }}
            >
              <path fill="#e7e9ea" d={path}></path>
            </svg>
            <Typography>{content}</Typography>
          </Link>
        )}
      </AccordionDetails>
    </Accordion>
  );
}

export default function App() {
  const content1 = [
    { content: "Ayarlar ve gizlilik", path: "/", iconColor: "blue" },
    { content: "Görünüm", path: "/", iconColor: "red" },
    { content: "Klavye Kısayolları", path: "/", iconColor: "green" },
  ];

  const content2 = [
    { content: "Örnek İçerik 1", path: "/", iconColor: "blue" },
    { content: "Örnek İçerik 2", path: "/", iconColor: "red" },
    { content: "Örnek İçerik 3", path: "/", iconColor: "green" },
  ];
  return (
    <Box
      sx={{
        background: "black",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <CustomAccordion
        title="İçerik Üreticisi Stüdyosu"
        content="İstatistikler"
        iconColor="red"
        path="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"
      />
      <CustomAccordion
        title="Profesyonel Araçlar"
        content="Reklamlar"
        iconColor="green"
        path="M1.996 5.5c0-1.38 1.119-2.5 2.5-2.5h15c1.38 0 2.5 1.12 2.5 2.5v13c0 1.38-1.12 2.5-2.5 2.5h-15c-1.381 0-2.5-1.12-2.5-2.5v-13zm2.5-.5c-.277 0-.5.22-.5.5v13c0 .28.223.5.5.5h15c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-15zm8.085 5H8.996V8h7v7h-2v-3.59l-5.293 5.3-1.415-1.42L12.581 10z"
      />
      <CustomAccordion
        title="Ayarlar ve Destek"
        content="Ayarlar ve gizlilik"
        iconColor="blue"
        path="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"
      />
    </Box>
  );
}
