import * as React from "react";
import Button from "@mui/material/Button";

interface Props {
  children: React.ReactNode;
}

export default function button({ children }: Props) {
  return (
    <Button variant="contained" disableElevation>
      {children}
    </Button>
  );
}
