import { Box, CircularProgress, Typography } from "@material-ui/core";
import { ArrowRight, Error } from "@material-ui/icons";
import { Link } from "gatsby";
import React from "react";
import AdminLayout from "../adminLayout";

export default function Downloads() {
  const [downloads, setDownloads] = React.useState<Blob[]>([]);
  const [spinner, setSpinner] = React.useState(false);
  const [errmsg, setError] = React.useState("");

  const fetchDownloads = async () => {
    try {
      const res = await fetch("../../server/index.php?fetchdownloads=true");
      const data: Blob[] = await res.blob();
      setDownloads(data);
    } catch (error) {
      error.message
        ? setError(error.message)
        : setError("There are no downloads.");
    }
  };
  React.useEffect(() => {
    fetchDownloads();
  }, []);
  return (
    <AdminLayout>
      {!!downloads.length ? (
        <ShowDownloads downloads={downloads} />
      ) : spinner ? (
        <Box className="text-center mx-auto p-4">
          <CircularProgress size="3rem" color="primary" />
        </Box>
      ) : (
        <Box className="text-center mx-auto p-4">
          <Typography align="center">
            <Error color="secondary" />
            {errmsg}
          </Typography>
        </Box>
      )}
      <Link to="/admin/downloads/add-download">
        <ArrowRight /> Add download
      </Link>
    </AdminLayout>
  );
}
const ShowDownloads = ({ downloads = [] }) => {
  return (
    <Box>
      <Typography>Downloads here... {downloads.length}</Typography>
    </Box>
  );
};
