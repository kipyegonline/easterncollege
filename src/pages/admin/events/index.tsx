import { Link } from "gatsby";
import {
  Typography,
  Box,
  CircularProgress,
  TableContainer,
  Fab,
} from "@material-ui/core";
import { Error, Add } from "@material-ui/icons";
import React from "react";
import AdminLayout from "../adminLayout";

type EventProps = {
  id: number;
  eventname: string;
  altId: string;
  startdate: string;
  enddate: string;
  venue: string;
  addedon: string;
};
export default function Events() {
  const [events, setEvents] = React.useState<EventProps[]>([]);
  const [err, setErr] = React.useState("");
  const [spinner, setSpinner] = React.useState(false);

  const fetchData = async () => {
    try {
      setSpinner(true);
      const res = await fetch("../../server/index.php?fetchevents=true");
      const data: EventProps[] = await res.json();
      if (Array.isArray(data) && !!data.length) {
        setEvents(data);
      } else {
        throw new TypeError("No payload");
      }
    } catch (error) {
      setSpinner(false);
      setErr(error.message);
    }
  };
  React.useEffect(() => {
    fetchData();
    setTimeout(() => setEvents(mm), 5000);
  }, []);
  console.log(events);
  return (
    <AdminLayout>
      <Fab color="primary">
        <Add /> <Link to="/admin/events/add-event">Add Event</Link>
      </Fab>
      <Box>
        {!!events.length ? (
          <EventsTable events={events} />
        ) : spinner ? (
          <Box className="text-center p-4 mx-auto">
            <CircularProgress color="primary" size="3rem" />
            <Typography>Loading events...</Typography>
          </Box>
        ) : (
          <Typography className="text-center p-4 mx-auto">
            <Error color="secondary" /> {err}
          </Typography>
        )}
      </Box>
    </AdminLayout>
  );
}

const EventsTable: React.FC<{ events: EventProps }> = ({ events }) => {
  return <TableContainer></TableContainer>;
};
const mm = [...Array(32)].map((item, i) => ({
  id: i + 1,
  eventname: "Graduation ceremony",
  altId: "fffs",
  startdate: "2020/14/02",
  enddate: "2020/14/02",
  venue: "Graduation square",
  addedon: new Date().toDateString(),
}));
