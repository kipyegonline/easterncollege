import React from "react";
import { Box, Typography, Button, TextField } from "@material-ui/core";
import AdminLayout from "../adminLayout";
import { FormInput, Spinner } from "../../contact-us";

export default function AddCareers() {
  const [career, setCareerName] = React.useState("");
  const [reference, setReference] = React.useState("");
  const [deadline, setDeadline] = React.useState("");
  const [jobfile, setFile] = React.useState<FileList | null | undefined>(
    undefined
  );
  const [details, setDetails] = React.useState("");

  const getValue = (name: string, value: string) => {
    const setState = eval("set" + name);
    setState(value);
  };
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.files[0]) {
      setFile(target?.files[0]);

      console.log(target?.files[0]);
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ career, reference, deadline, jobfile, details });
  };

  return (
    <AdminLayout>
      <Box>
        <form
          onSubmit={handleSubmit}
          style={{ maxWidth: 400, background: "#ccc", padding: 20 }}
        >
          <Typography>Add careers.</Typography>
          <FormInput
            label="1. Enter career name"
            type="text"
            getValue={getValue}
            name="CareerName"
          />
          <FormInput
            label="2. Enter reference number"
            type="text"
            getValue={getValue}
            name="Reference"
          />
          <TextField
            type="date"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDeadline(e.target.value)
            }
            helperText="Enter application deadline"
          />
          <TextField
            type="file"
            helperText="Attach file"
            onChange={handleFile}
          />
          <TextField
            type="text"
            multiline
            variant="filled"
            className="my-2"
            style={{ width: "100%" }}
            helperText="Enter career details"
            rows={4}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDetails(se.target.value)
            }
          />
          <Button
            color="primary"
            style={{ marginTop: 10, width: "100%" }}
            variant="contained"
            type="submit"
          >
            Add Career
          </Button>
        </form>
      </Box>
    </AdminLayout>
  );
}
