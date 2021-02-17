import {
  Box,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Button,
} from "@material-ui/core";
import { ArrowRight, Error } from "@material-ui/icons";
import { Link } from "gatsby";
import React from "react";
import AdminLayout from "../adminLayout";

type Data = {
  id?: string | number;
  des?: string;
  addedon?: string;
  filename?: string;
  dtimes: number;
};
export default function Downloads(): JSX.Element {
  const [downloads, setDownloads] = React.useState<Data[]>([]);
  const [spinner, setSpinner] = React.useState(false);
  const [errmsg, setError] = React.useState("");

  const fetchDownloads = async () => {
    try {
      setSpinner(true);
      const res = await fetch("../../server/index.php?fetchdownloads=true");
      const data = await res.json();
      if (Array.isArray(data)) {
        setDownloads(data);
        setSpinner(false);
      }
    } catch (error) {
      setSpinner(false);
      // setDownloads(faker);
      error.message
        ? setError(error.message)
        : setError("There are no downloads.");
    }
  };
  const handleDelete = (id: number) => {
    if (confirm("Delete download?")) {
      fetch(`../../server/index.php?deletedownload=true&id=${id}`)
        .then(res => res.json())
        .then(res => {
          setDownloads(downloads.filter(item => item.id !== id));
        })
        .catch(error => console.log(error.message));
    }
  };

  React.useEffect(() => {
    fetchDownloads();
  }, []);

  return (
    <AdminLayout>
      {!!downloads.length ? (
        <ShowDownloads downloads={downloads} handleDelete={handleDelete} />
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
      <Link to="/admin/downloads/add-download" className="text-blue-600">
        <ArrowRight /> Add download
      </Link>
    </AdminLayout>
  );
}
const ShowDownloads: React.FC<{
  downloads: Data[];
  handleDelete: (id: number) => void;
}> = ({ downloads = [], handleDelete }) => {
  return (
    <Box>
      <Typography align="center" variant="h6">
        {downloads.length} downloads
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Details</TableCell>
            <TableCell>Added on</TableCell>
            <TableCell>Downloaded</TableCell>
            <TableCell>Remove</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {downloads.map((item, i) => (
            <DownloadsTable
              key={item.id}
              {...item}
              index={i}
              handleDelete={handleDelete}
            />
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
type Index = { index: number; handleDelete: (id: number) => void };
const DownloadsTable: React.FC<Data & Index> = ({
  index,
  filename,
  des,
  addedon,
  id,
  dtimes,
  handleDelete,
}) => {
  return (
    <TableRow>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{filename}</TableCell>
      <TableCell>{des}</TableCell>
      <TableCell>{new Date(addedon).toDateString()}</TableCell>
      <TableCell>{dtimes}</TableCell>
      <TableCell>
        <Button
          onClick={() => handleDelete(id)}
          variant="contained"
          color="secondary"
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};
const faker = [...Array(30)].map((item, i) => ({
  id: i + 1,
  filename: "Jules",
  des: "Blinding lights",
  addedon: "20202/02/14",
}));
