import React from "react";
import { Link } from "gatsby";
import { Typography } from "@material-ui/core";

import AdminLayout from "../adminLayout";

export default function Careers() {
  return (
    <AdminLayout>
      <Typography>This is the careers page</Typography>
      <Link className="text-blue-600" to="/admin/careers/add-careers">
        Add Career
      </Link>
    </AdminLayout>
  );
}
