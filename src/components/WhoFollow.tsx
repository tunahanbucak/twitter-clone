import React from "react";
import Agendas from "./Agendas";
import { useAccounts } from "../store/hooks";
import { whoFollowUsers } from "../utils/consts";
import UserCard from "./UserCard";

export default function WhoFollow() {
  const account = useAccounts();
  return (
    <Agendas
      title="Kimi takip etmeli"
      more={`/connect_people?user_id=${account[0].id}`}
    >
      {whoFollowUsers.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </Agendas>
  );
}
