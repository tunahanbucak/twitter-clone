import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import Items from "./Items";
import Item from "./Item";
import Content from "./Content";
import { TabContext } from "./Context";
import { Box } from "@mui/material";
import StickyHeader from "../StickyHeader";

interface Props {
  children: ReactNode;
  activeTab: string;
}

export default function Tab({ children, activeTab }: Props) {
  const [active, setActive] = useState(activeTab);
  const contents = React.Children.toArray(children).filter(
    (child) =>
      React.isValidElement(child) && (child as ReactElement).type === Content
  );
  const stickyHeader = React.Children.toArray(children).filter(
    (child) =>
      React.isValidElement(child) &&
      (child as ReactElement).type === StickyHeader
  );
  const items = stickyHeader[0];
  const content = React.Children.toArray(children).find(
    (child) =>
      React.isValidElement(child) && (child as ReactElement).props.id === active
  );

  const data = {
    active,
    setActive,
  };
  useEffect(() => {
    setActive(activeTab);
  }, [activeTab]);

  return (
    <TabContext.Provider value={data}>
      {items}
      {content}
    </TabContext.Provider>
  );
}

Tab.Items = Items;
Tab.Item = Item;
Tab.Content = Content;
