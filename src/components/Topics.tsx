// Topics.tsx
import React from "react";
import Agendas from "./Agendas";
import { topics } from "../utils/consts";
import Topic from "./Topic";

export default function Topics() {
  return (
    <Agendas title="İlgini çekebilecek gündemler" more="/trends">
      {topics.map((topic, index) => (
        <Topic item={topic} key={index} />
      ))}
    </Agendas>
  );
}
