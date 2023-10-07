import React from "react";
import MainLayout from "../layouts/MainLayout";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { slug } = useParams();

  return (
    <MainLayout>
      profile page - {slug}
      <div></div>
    </MainLayout>
  );
}
