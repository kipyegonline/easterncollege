import React from "react";
import { Box, TextField, Grid, Button, Typography } from "@material-ui/core";
import AdminLayout from "../adminLayout";
import { FormInput, Spinner } from "../../contact-us";
import { Add } from "@material-ui/icons";

export default function AddEvent() {
  const [eventname, setEventName] = React.useState("");
  const [startdate, setStartDate] = React.useState("");
  const [enddate, setEndDate] = React.useState("");
  const [venue, setVenue] = React.useState("");
  const [details, setDetails] = React.useState("");

  const getValue = (name: string, value: string) => {
    const setState = eval("set" + name);
    setState(value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ eventname, startdate, enddate, venue, details });
  };
  return (
    <AdminLayout>
      <Box>
        <form
          style={{ padding: 16, background: "#ccc" }}
          onSubmit={handleSubmit}
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
              />
              <TextField
                type="date"
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
              <FormInput
                type="text"
                name="Venue"
                label="4. Enter event Venue"
                getValue={getValue}
                multiline
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6} className="p-2">
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
              />
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
      </Box>
    </AdminLayout>
  );
}
