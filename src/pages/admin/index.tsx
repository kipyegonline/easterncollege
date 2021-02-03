import { Typography } from "@material-ui/core";
import React from "react";
import AdminLayout from "./adminLayout";
import { ReactCarousel } from "../../components/carousel";
export default function AdminHome() {
  return (
    <AdminLayout>
      <Typography>Site hits</Typography>
      <ReactCarousel />
    </AdminLayout>
  );
}
