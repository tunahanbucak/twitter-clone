import React from "react";
import { Box, Typography } from "@mui/material";
import MainLayout from "../../layouts/MainLayout";
import Tab from "../../components/tab/Tab";
import StickyHeader from "../../components/StickyHeader";
import ForYou from "./ForYou";

export default function Home() {
  return (
    <MainLayout>
      <Tab activeTab="for-you">
        <StickyHeader title="AnaSayfa">
          <Tab.Items>
            <Tab.Item id="for-you">
              <Typography
                sx={{
                  textTransform: "none",
                }}
              >
                Sana özel
              </Typography>
            </Tab.Item>
            <Tab.Item id="followings">
              <Typography
                sx={{
                  textTransform: "none",
                }}
              >
                Takip edilenler
              </Typography>
            </Tab.Item>
          </Tab.Items>
        </StickyHeader>
        <Tab.Content id="for-you">
          <ForYou />
        </Tab.Content>
        <Tab.Content id="followings">2.content</Tab.Content>
      </Tab>
    </MainLayout>
  );
}
