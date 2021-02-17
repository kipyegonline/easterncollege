import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  FormHelperText,
  Grid,
  CircularProgress,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";
import UploadIcon from "@material-ui/icons/CloudUpload";
import React from "react";
import { Link } from "gatsby";
import { Upload } from "antd";
import ArrowRight from "@material-ui/icons/ArrowRight";
import AdminLayout from "../adminLayout";

export default function AddTender() {
  const [reference, setRef] = React.useState("");
  const [type, setType] = React.useState("");
  const [deadline, setDeadline] = React.useState("");
  const [filename, setFilename] = React.useState("");
  const [file, setFile] = React.useState<Blob | undefined>(undefined);
  const [des, setDes] = React.useState("");
  const [errmsg, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");
  const [spinner, setSpinner] = React.useState(false);

  const form = React.useRef<HTMLFormElement | null>(null!);
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    console.log("file", file?.name.endsWith(".pdf") !== true);
    if (file) {
      if (file.size > 1000000 * 20) {
        setError("file is too large");
      } else if (file?.name.endsWith(".pdf") || file?.name.endsWith(".docx")) {
        setError("");
        setFile(file);
      } else {
        setError("Kindly add a word or pdf file");
      }
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!filename.trim().length) {
      setError("Kindly add a tender name");
      setTimeout(() => setError(""), 4000);
    } else if (!reference.trim().length) {
      setError("Kindly provide tender reference number");
      setTimeout(() => setError(""), 4000);
    } else if (!deadline.trim().length) {
      setError("Kindly provide a deadline");
      setTimeout(() => setError(""), 4000);
    } else if (!des.trim().length) {
      setError("Kindly provide tender description");
      setTimeout(() => setError(""), 4000);
    } else if (!file) {
      setError("Kindly add a file to upload");
      setTimeout(() => setError(""), 4000);
    } else if (
      filename.length > 1 &&
      file &&
      deadline.length > 4 &&
      reference.length > 4 &&
      des.length > 10
    ) {
      const formData = new FormData();

      formData.append("filedata", file);
      formData.append("filename", filename);
      formData.append("deadline", deadline);
      formData.append("des", des);
      formData.append("type", type);
      formData.append("reference", reference);
      setError("");
      setSpinner(true);
      axios
        .post("../../server/index.php?addtender=true", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(res => {
          const { data } = res;
          if (data.status == 200) {
            setSuccess(data.msg);
            setFile(undefined);
            setDes("");
            setFilename("");
            setTimeout(() => setSuccess(""), 4000);
            if (form.current) form.current.reset();
          }
        })
        .catch(error => {
          setError(error.message);
          setTimeout(() => setError(""), 4000);
        })
        .finally(() => {
          setSpinner(false);
        });
    } else {
      setError("Kindly ensure tender name and the file itself exist.");
      setTimeout(() => setError(""), 4000);
    }
  };
  return (
    <AdminLayout>
      <Box>
        <form
          onSubmit={handleSubmit}
          ref={form}
          style={{ maxWidth: 800, padding: 20, background: "#ccc" }}
        >
          <Typography align="center" className="p-2 mb-3 " variant="h6">
            Add Tender
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
              <TextField
                type="text"
                fullWidth
                label="Enter tender name"
                className="mb-3"
                style={{ marginBottom: 10 }}
                variant="outlined"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFilename(e.target.value)
                }
              />
              <TextField
                type="text"
                fullWidth
                style={{ marginBottom: 10 }}
                label="Enter tender reference number"
                className="mb-3"
                variant="outlined"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setRef(e.target.value)
                }
              />
              <TextField
                type="text"
                fullWidth
                style={{ marginBottom: 10 }}
                label="Enter type of  tender "
                className="mb-3"
                variant="outlined"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setType(e.target.value)
                }
              />
              <TextField
                type="date"
                fullWidth
                style={{ marginBottom: 10 }}
                helperText="Enter tender submission deadline"
                className="mb-3"
                variant="outlined"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setDeadline(e.target.value)
                }
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <TextField
                type="file"
                fullWidth
                className="my-4 p-2"
                style={{ marginBottom: 10 }}
                inputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <UploadIcon />
                    </InputAdornment>
                  ),
                  accept: ".pdf, .docx",
                }}
                helperText="add tender file"
                onChange={handleFile}
              />
              <TextField
                type="text"
                fullWidth
                variant="outlined"
                helperText="Enter tender description"
                multiline
                rows={5}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setDes(e.target.value)
                }
              />
              <Box className="my-2 ">
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
                {spinner && <CircularProgress color="primary" size="3rem" />}
              </Box>
              <Button
                variant="contained"
                color="primary"
                disabled={false}
                type="submit"
                style={{ margin: 10, width: "100%" }}
              >
                Add Tender
              </Button>
            </Grid>
          </Grid>
        </form>
        <Link to="/admin/tenders" className="text-blue-600">
          {" "}
          <ArrowRight /> See Tenders
        </Link>
      </Box>
    </AdminLayout>
  );
}
