import { Box } from "@mui/material";
import React, { ReactNode, useEffect } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Rightbar from "../components/Rightbar";
import { useModal } from "../store/modal/hooks";
import Modal from "../modals/Modal";
import { useAppearance } from "../store/appearance/hooks";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  const modal = useModal();
  const appearance = useAppearance();

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--background-primary",
      appearance.backgroundColor.primary
    );
    document.documentElement.style.setProperty(
      "--background-primary-alpha",
      appearance.backgroundColor.primary + "a6"
    );
    document.documentElement.style.setProperty(
      "--background-secondary",
      appearance.backgroundColor.secondary
    );
    document.documentElement.style.setProperty(
      "--background-third",
      appearance.backgroundColor.third
    );
    document.documentElement.style.setProperty(
      "--background-modal",
      appearance.backgroundColor.modal
    );

    document.documentElement.style.setProperty(
      "--color-primary",
      appearance.color.primary
    );
    //	document.documentElement.style.setProperty('--color-primary-alpha', appearance.color.primary + '12')
    document.documentElement.style.setProperty(
      "--color-secondary",
      appearance.color.secondary
    );
    document.documentElement.style.setProperty(
      "--color-base",
      appearance.color.base
    );
    document.documentElement.style.setProperty(
      "--color-base-secondary",
      appearance.color.baseSecondary
    );

    document.documentElement.style.setProperty(
      "--box-shadow",
      appearance.boxShadow
    );

    document.documentElement.style.setProperty(
      "--font-size",
      appearance.fontSize + "px"
    );
  }, [appearance]);
  return (
    <Box
      sx={{
        maxWidth: 1275,
        mx: "auto",
        display: "flex",
        paddingLeft: 1,
      }}
    >
      {modal && <Modal />}
      <Sidebar />
      <Box
        sx={{
          flex: 2,
          borderLeft: "1px solid var(--background-third)",
        }}
      >
        {children}
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          gap: "30px",
        }}
      >
        <Box
          sx={{
            flex: 1,
            borderRight: "1px solid var(--background-third)",
            maxWidth: 600,
          }}
        >
          <Outlet />
        </Box>
        <Rightbar />
      </Box>
    </Box>
  );
}
