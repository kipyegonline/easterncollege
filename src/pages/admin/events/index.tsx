import { Link } from "gatsby";
import {
  Typography,
  Box,
  CircularProgress,
  TableContainer,
  Fab,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Button,
} from "@material-ui/core";
import { Error, Add } from "@material-ui/icons";
import React from "react";
import AdminLayout from "../adminLayout";
import { Pagination } from "@material-ui/lab";

type EventProps = {
  id: number;
  title: string;
  details: string;
  startdate: string;
  enddate: string;
  venue: string;
  addedon: string;
};
export default function Events() {
  const [events, setEvents] = React.useState<EventProps[]>([]);
  const [err, setErr] = React.useState("");
  const [spinner, setSpinner] = React.useState(false);
  const [current, setCurrent] = React.useState(0);
  // pagination
  const perpage = events.length > 9 ? 10 : events.length;
  const pages = Math.ceil(events.length / perpage);
  const start = current * perpage,
    end = current * perpage + perpage;

  const handlePage = (e: React.ChangeEvent<unknown>, p: number) =>
    setCurrent(p - 1);

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

  const handleDelete = (id: number) => {
    if (confirm("Delete event?")) {
      fetch(`../../server/index.php?deleteevent=true&eventId=${id}`)
        .then(res => {
          setEvents(events.filter(event => event.id !== id));
        })
        .catch(error => console.log(error));
    }
  };
  React.useEffect(() => {
    fetchData();
    // setTimeout(() => setEvents(mm), 5000);
  }, []);

  return (
    <AdminLayout>
      <Box>
        {!!events.length ? (
          <>
            <Typography variant="body1" className="font-bold" align="center">
              {events.length} event(s).
            </Typography>
            <EventsTable
              events={events.slice(start, end)}
              start={start}
              handleDelete={handleDelete}
            />
            {events.length > 9 && (
              <Pagination
                count={pages}
                color="primary"
                page={current + 1}
                onChange={handlePage}
              />
            )}
            <Link className="text-blue-600" to="/admin/events/add-event">
              Add Event
            </Link>
          </>
        ) : spinner ? (
          <Box className="text-center p-4 mx-auto">
            <CircularProgress color="primary" size="3rem" />
            <Typography>Loading events...</Typography>
          </Box>
        ) : (
          <>
            <Typography className="text-center p-4 mx-auto">
              <Error color="secondary" /> {err}
            </Typography>
            <Link className="text-blue-600" to="/admin/events/add-event">
              Add Event
            </Link>
          </>
        )}
      </Box>
    </AdminLayout>
  );
}

const EventsTable: React.FC<{
  events: EventProps[];
  handleDelete: (id: number) => void;
  start: number;
}> = ({ events, handleDelete, start }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Event</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Venue</TableCell>
            <TableCell>Remove</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {events.map((event, index) => (
            <EventTable
              key={event.id}
              {...event}
              handleDelete={() => handleDelete(event.id)}
              index={index + start}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
type Index = { index: number; handleDelete: (id: number) => void };
const EventTable = ({
  index,
  title,
  startdate,
  enddate,
  venue,
  details,
  handleDelete,
}: EventProps & Index) => (
  <TableRow>
    <TableCell>{index + 1}.</TableCell>
    <TableCell>{title}</TableCell>
    <TableCell>
      {new Date(startdate).toDateString()}{" "}
      {enddate ? `-${new Date(enddate).toDateString()}` : ""}
    </TableCell>
    <TableCell>{venue}</TableCell>
    <TableCell>
      <Button
        onClick={handleDelete}
        variant="contained"
        size="small"
        color="secondary"
      >
        Delete
      </Button>
    </TableCell>
  </TableRow>
);
const mm = [...Array(32)].map((item, i) => ({
  id: i + 1,
  eventname: "Graduation ceremony",

  startdate: "2020/14/02",
  enddate: "2020/14/02",
  venue: "Graduation square",
  addedon: new Date().toDateString(),
}));
