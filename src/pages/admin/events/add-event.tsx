import React from "react";
import axios from "axios";
import { Link } from "gatsby";
import {
  Box,
  TextField,
  Grid,
  Button,
  Typography,
  FormHelperText,
} from "@material-ui/core";
import AdminLayout from "../adminLayout";
import { FormInput, Spinner } from "../../contact-us";
import { Add } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";

export default function AddEvent() {
  const [eventname, setEventName] = React.useState("");
  const [startdate, setStartDate] = React.useState("");
  const [enddate, setEndDate] = React.useState("");
  const [venue, setVenue] = React.useState("");
  const [details, setDetails] = React.useState("");
  const [errmsg, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");
  const [spinner, setSpinner] = React.useState(false);
  const form = React.useRef<HTMLFormElement | null>(null!);

  const getValue = (name: string, value: string) => {
    const setState = eval("set" + name);
    setState(value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!eventname.trim().length) {
      setError("Enter event name");
      setTimeout(() => setError(""), 3000);
    } else if (!startdate.trim().length) {
      setError("Enter start date");
      setTimeout(() => setError(""), 3000);
    } else if (new Date(startdate) < new Date()) {
      setError("Kindly choose a date in future");
      setTimeout(() => setError(""), 3000);
    } else if (!venue.trim().length) {
      setError("Enter venue ");
      setTimeout(() => setError(""), 3000);
    } else if (!details.trim().length) {
      setError("Enter event details");
      setTimeout(() => setError(""), 3000);
    } else if (
      eventname.length > 4 &&
      startdate.length > 4 &&
      venue.length &&
      details.length > 5
    ) {
      setSpinner(true);
      axios
        .post("../../server/index.php?addevent=true", {
          eventname,
          startdate,
          enddate,
          venue,
          details,
        })
        .then(res => {
          const { data } = res;
          if (data.status === 200) {
            setSpinner(false);
            setSuccess(data.msg);
            setEventName("");
            setStartDate("");
            setEndDate("");
            setVenue("");
            setDetails("");
            if (form.current) form.current.reset();
            setTimeout(() => setSuccess(""), 4000);
          } else {
            throw new ReferenceError(data.msg);
          }
        })
        .catch(error => {
          setError(error.message);
        })
        .finally(() => {
          setSpinner(false);
        });
    } else {
      setError("Ensure all fields have fields, end date is optional.");
      setTimeout(() => setError(""), 3000);
    }
  };
  return (
    <AdminLayout>
      <Box>
        <form
          style={{ padding: 16, background: "#ccc" }}
          onSubmit={handleSubmit}
          ref={form}
        >
          <Typography variant="h6" align="center">
            Add upcoming event details.
          </Typography>
          <Grid container justify="space-evenly" alignItems="flex-start">
            <Grid item xs={12} md={6} lg={6} className="p-2">
              <FormInput
                type="text"
                label="1. Event Name"
                name="EventName"
                getValue={getValue}
                value={eventname}
              />
              <TextField
                type="datetime-local"
                helperText="2. Select start date"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setStartDate(e.target.value)
                }
              />

              <TextField
                type="date"
                helperText="3. Select end date (Optional)"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEndDate(e.target.value)
                }
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6} className="p-2">
              <FormInput
                type="text"
                name="Venue"
                label="4. Enter event Venue"
                getValue={getValue}
                multiline
                value={venue}
              />
              <TextField
                type="text"
                label="Enter event details."
                multiline
                rows={4}
                style={{ width: "100%" }}
                variant="filled"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setDetails(e.target.value)
                }
                value={details}
              />
              <Box className="py-2">
                {spinner && <Spinner />}
                {!!errmsg && (
                  <Alert variant="filled" severity="error">
                    <FormHelperText className="text-white text-md">
                      {errmsg}
                    </FormHelperText>
                  </Alert>
                )}
                {!!success && (
                  <Alert variant="filled" severity="success">
                    <FormHelperText className="text-white text-md">
                      {success}
                    </FormHelperText>
                  </Alert>
                )}
              </Box>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                style={{ display: "block", width: "100%", marginTop: 10 }}
              >
                Add Event
              </Button>
            </Grid>
          </Grid>
        </form>
        <Link to="/admin/events" className="text-blue-600 my-2">
          View events
        </Link>
      </Box>
    </AdminLayout>
  );
}
