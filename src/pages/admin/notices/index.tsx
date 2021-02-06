import React from "react";
import axios from "axios";
import { Typography, Box, TextField, Button, Grid } from "@material-ui/core";
import AdminLayout from "../adminLayout";
import { FormInput, Spinner } from "../../contact-us";
import { Add, DeleteForever } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";

export default function News() {
  const [spinner, setSpinner] = React.useState(false);
  const [success, setSuccess] = React.useState("");
  const [errmsg, setError] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [news, setNews] = React.useState<string[]>([]);

  const [date, setDate] = React.useState("");

  const form = React.useRef<null | HTMLFormElement>(null!);
  const sendValue = (name: string, value: string) => {
    const setState = eval("set" + name);
    setState(value);
  };
  const handlePara = () => {
    if (body) {
      setNews([...news, body]);
      setBody("");
    }
  };
  const handleClear = () => {
    if (window.confirm("CLear notice?")) {
      setNews([]);
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim().length) {
      setError("Enter title.");
      setTimeout(() => setError(""), 3000);
    } else if (!news.length) {
      setError("Enter news body");
      setTimeout(() => setError(""), 3000);
    } else if (!date.trim().length) {
      setError("Kindly select date");
      setTimeout(() => setError(""), 3000);
    } else if (news.length > 0 && date.length > 5 && title.length > 5) {
      setError("");
      setSpinner(true);

      const payload = {
        date,
        body: news.join("*"),
        title,
        addedBy: 1,
      };

      axios
        .post("../../server/index.php?addnotice=true", payload)
        .then(res => {
          const { data } = res;
          if (data.status === 200) {
            setSuccess(data.msg);
            setDate("");
            setTitle("");
            setBody("");
            setNews([]);
            setTimeout(() => setSuccess(""), 4000);
          } else {
            throw new TypeError(data.msg);
          }
        })
        .catch(error => {
          setError(error.message);
        })
        .finally(() => {
          setSpinner(false);
          setError("");
        });
    } else {
      setError("Ensure all fields have values");
      setTimeout(() => setError(""), 3000);
    }
  };
  return (
    <AdminLayout>
      <Grid container justify="space-evenly">
        <Grid item xs={12} md={6} lg={6}>
          <Box>
            <form
              style={{
                maxWidth: 500,
                padding: 16,
                border: "1px solid #ccc",
                background: "#ddd",
                margin: "1rem ",
              }}
              onSubmit={handleSubmit}
              ref={form}
            >
              <Typography align="center" variant="h6">
                Add Notice
              </Typography>
              <FormInput
                label="Enter news title"
                type="text"
                getValue={sendValue}
                name="Title"
              />
              <FormInput
                label="Enter date"
                type="date"
                getValue={sendValue}
                name="Date"
              />
              <TextField
                type="text"
                error={!!!news.length}
                helperText="Paste each  paragraph ofthe notice"
                multiline
                rows={4}
                value={body}
                fullWidth
                variant="filled"
                onChange={e => setBody((e.target as HTMLInputElement).value)}
              />
              <div className="clearfix mb-2">
                {!spinner && (
                  <Button
                    size="small"
                    className="mb-2 float-right"
                    color="secondary"
                    style={{ display: "block" }}
                    onClick={handlePara}
                    variant="outlined"
                  >
                    {" "}
                    Add notice paragraph.
                  </Button>
                )}
              </div>
              <Box>
                {spinner && Spinner}
                {!!success && (
                  <Alert severity="success" className="my-2" variant="filled">
                    <Typography variant="body2">{success}</Typography>
                  </Alert>
                )}
                {!!errmsg && (
                  <Alert severity="error" className="my-2" variant="filled">
                    <Typography variant="body2">{errmsg}</Typography>
                  </Alert>
                )}
              </Box>

              <Button
                startIcon={<Add />}
                variant="contained"
                color="primary"
                style={{ width: "100%" }}
                type="submit"
                disabled={!!!news.length || spinner}
              >
                {spinner ? "Publishing notice" : "Publish notice"}
              </Button>
            </form>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Box className="p-4">
            {news.map((item, i) => (
              <Typography key={i}>{item}</Typography>
            ))}
            {!!news.length && (
              <Button
                variant="contained"
                color="secondary"
                onClick={handleClear}
                endIcon={<DeleteForever />}
              >
                Clear Notice
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>
    </AdminLayout>
  );
}
