import React from "react";
import { Link } from "gatsby";
import axios from "axios";
import {
  Box,
  Typography,
  Button,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import ArrowRight from "@material-ui/icons/ArrowRight";
import Alert from "@material-ui/lab/Alert";
import AdminLayout from "../adminLayout";
import { FormInput, Spinner } from "../../contact-us";

export default function AddCareers() {
  const [success, setSuccess] = React.useState("");
  const [errmsg, setError] = React.useState("");
  const [spinner, setSpinner] = React.useState(false);
  const [career, setCareerName] = React.useState("");
  const [reference, setReference] = React.useState("");
  const [deadline, setDeadline] = React.useState("");
  const [jobfile, setFile] = React.useState<FileList | null | Blob | undefined>(
    undefined
  );
  const [details, setDetails] = React.useState("");
  const form = React.useRef<HTMLFormElement | null>(null!);

  const getValue = (name: string, value: string) => {
    const setState = eval("set" + name);
    setState(value);
  };
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.files[0] !== null) {
      setFile(target?.files[0]);
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!career.trim().length) {
      setError("Enter career name");
      setTimeout(() => setError(""), 4000);
    } else if (!reference.trim().length) {
      setError("Enter a reference/subject");
      setTimeout(() => setError(""), 4000);
    } else if (!deadline.trim().length) {
      setError("Enter a deadline");
      setTimeout(() => setError(""), 4000);
    } else if (!details.trim().length) {
      setError("Kindly add some details.");
      setTimeout(() => setError(""), 4000);
    } else if (
      career.length > 5 &&
      reference.length > 0 &&
      deadline.length > 0 &&
      details.length > 1
    ) {
      setError("");
      setSpinner(true);
      const formData = new FormData();
      if (jobfile) {
        formData.append("filedata", jobfile);
      }
      formData.append("careeer", career);
      formData.append("reference", reference);
      formData.append("deadline", deadline);
      formData.append("details", details);
      axios
        .post("../../server/index.php?addcareer=true", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then(res => {
          const { data } = res;
          if (data.status === 200) {
            setSuccess(data.msg);
            setCareerName("");
            setReference("");
            setDeadline("");
            setFile(undefined);
            if (form.current) form.current.reset();
            setTimeout(() => setSuccess(""), 4000);
          } else {
            throw new Error(data.msg);
          }
        })
        .catch(error => {
          setError(error.message);
          setTimeout(() => setError(""), 3000);
        })
        .finally(() => {
          setSpinner(false);
        });
    } else {
      setError("Ensure all fields have values, file upload is optional");
      setTimeout(() => setError(""), 4000);
    }
  };

  return (
    <AdminLayout>
      <Box>
        <form
          ref={form}
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
            inputProps={{ accept: ".pdf, .docx" }}
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
              setDetails(e.target.value)
            }
          />
          <Box>
            {!!success.length && (
              <Alert severity="success" className="my-2" variant="filled">
                <Typography variant="body2">{success}</Typography>
              </Alert>
            )}
            {!!errmsg.length && (
              <Alert severity="error" className="my-2" variant="filled">
                <Typography variant="body2">{errmsg}</Typography>
              </Alert>
            )}
            {spinner && <Spinner />}
          </Box>
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
      <Link to="/admin/careers" className="text-blue-500">
        <ArrowRight /> View careers
      </Link>
    </AdminLayout>
  );
}
