import React from "react";

interface UserCardProps {
  user: {
    id: number;
    username: string;
    fullName: string;
    avatar: string;
  };
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <div>
      KULLANICI PROFILI ISMI
      <div></div>
    </div>
  );
}
