import React, { createContext, useContext } from "react";

interface TabContextProps {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

const TabContext = createContext<TabContextProps | undefined>(undefined);

const useTab = () => {
  const context = useContext(TabContext);
  if (context === undefined) {
    throw new Error("useTab must be used within a TabProvider");
  }
  return context;
};

export { TabContext, useTab };
