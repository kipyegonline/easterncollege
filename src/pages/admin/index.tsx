import {
  Typography,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import React from "react";
import axios from "axios";
import AdminLayout from "./adminLayout";
import { ReactCarousel } from "../../components/carousel";
import { Skeleton } from "@material-ui/lab";
type Stats = {
  today?: number;
  yesterday?: number;
  thisWeek?: number;
  lastWeek?: number;
  thisMonth?: number;
  lastMonth?: number;
  totalTraffic?: number;
};
export default function AdminHome() {
  const [stats, setStats] = React.useState({});
  const getStats = () => {
    axios.get("../server/index.php?getstats=true");
  };
  React.useEffect(() => {
    if (stats.today === undefined) getStats();
  }, []);
  return (
    <AdminLayout>
      <Box style={{ minWidth: 360 }}>
        <Typography align="center" variant="h6">
          Welcome to Eastern College website admin panel....
        </Typography>
        <Typography>Site stats:</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Today</TableCell>
                <TableCell>Yesterday</TableCell>
                <TableCell>This week</TableCell>
                <TableCell>Last week</TableCell>
                <TableCell>This month</TableCell>
                <TableCell>Last Month</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{stats?.today}</TableCell>
                <TableCell>{stats?.yesterday}</TableCell>
                <TableCell>{stats?.thisweek}</TableCell>
                <TableCell>{stats?.lastweek}</TableCell>
                <TableCell>{stats?.thismonth}</TableCell>
                <TableCell>{stats?.lastmonth}</TableCell>
                <TableCell>{stats?.total}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </AdminLayout>
  );
}
