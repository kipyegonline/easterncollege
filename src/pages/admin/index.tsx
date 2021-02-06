import { Typography, Box } from "@material-ui/core";
import React from "react";
import AdminLayout from "./adminLayout";
import { ReactCarousel } from "../../components/carousel";
import { Skeleton } from "@material-ui/lab";
export default function AdminHome() {
  return (
    <AdminLayout>
      <Typography variant="h6">
        Welcome to Eastern College website admin panel....
      </Typography>
      <Box>
        <Skeleton width={500} height={500} animation="wave"></Skeleton>
      </Box>
    </AdminLayout>
  );
}
