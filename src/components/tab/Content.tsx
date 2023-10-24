import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id: string;
}
export default function Content({ children, id }: Props) {
  return (
    <div>
      {children}
      <div></div>
    </div>
  );
}
