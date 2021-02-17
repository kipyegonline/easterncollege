import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  FormHelperText,
  CircularProgress,
} from "@material-ui/core";
import axios from "axios";
import UploadIcon from "@material-ui/icons/CloudUpload";
import React from "react";
import { Link } from "gatsby";
import Alert from "@material-ui/lab/Alert";
import { Upload } from "antd";
import ArrowRight from "@material-ui/icons/ArrowRight";
import AdminLayout from "../adminLayout";

export default function AddDownload() {
  const [filename, setFilename] = React.useState("");
  const [file, setFile] = React.useState<Blob | undefined>(undefined);
  const [des, setDes] = React.useState("");
  const [errmsg, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");
  const [spinner, setSpinner] = React.useState(false);

  const form = React.useRef<HTMLFormElement | null>(null!);
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];

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
      setError("Kindly add a file name");
      setTimeout(() => setError(""), 4000);
    } else if (!file) {
      setError("Kindly add a file to upload");
      setTimeout(() => setError(""), 4000);
    } else if (filename.length > 1 && file) {
      const formData = new FormData();

      formData.set("filedata", file);
      formData.set("filename", filename);
      formData.set("des", des);
      //formData.forEach(item => console.log(item, formData));
      setError("");
      setSpinner(true);
      axios
        .post(
          "../../server/index.php?adddownload=true",

          formData,

          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        )
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
      setError("Kindly ensure filename and the file itself exist.");
      setTimeout(() => setError(""), 4000);
    }
  };
  return (
    <AdminLayout>
      <Box>
        <form
          onSubmit={handleSubmit}
          ref={form}
          style={{ maxWidth: 400, padding: 16, background: "#ccc" }}
        >
          <Typography align="center" className="p-3" variant="h6">
            Add downloads
          </Typography>
          <TextField
            type="text"
            fullWidth
            label="Enter filename"
            className="mb-3"
            variant="outlined"
            style={{ marginBottom: 10 }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFilename(e.target.value)
            }
          />
          <TextField
            type="file"
            fullWidth
            className="my-4 p-2"
            inputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <UploadIcon />
                </InputAdornment>
              ),
              accept: ".pdf, .docx",
            }}
            style={{ padding: 8, marginBottom: 10 }}
            helperText="add file"
            onChange={handleFile}
          />
          <TextField
            type="text"
            fullWidth
            variant="filled"
            helperText="Enter file description"
            multiline
            rows={5}
            style={{ marginBottom: 10 }}
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
            {spinner && (
              <div className="text-center">
                <CircularProgress color="primary" size="3rem" />
                <Typography>Submitting...</Typography>
              </div>
            )}
          </Box>
          <Button
            variant="contained"
            color="primary"
            disabled={false}
            type="submit"
            style={{ margin: 10, width: "100%" }}
          >
            Add Download
          </Button>
        </form>
        <Link to="/admin/downloads" className="text-blue-600">
          {" "}
          <ArrowRight /> See downloads
        </Link>
      </Box>
    </AdminLayout>
  );
}
