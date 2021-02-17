import {
  Box,
  CircularProgress,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  TableContainer,
} from "@material-ui/core";
import { ArrowRight, CloudDownload, Error } from "@material-ui/icons";
import { Link } from "gatsby";
import React from "react";
import AdminLayout from "../adminLayout";

type Data = {
  id: number;
  tendername: string;
  tendertype: string;
  reference: string;
  addedon: string;
  details: string;
  dtimes: number;
};
export default function Downloads() {
  const [tenders, setTenders] = React.useState([]);
  const [spinner, setSpinner] = React.useState(false);
  const [errmsg, setError] = React.useState("");

  const fetchDownloads = async () => {
    try {
      setSpinner(true);
      const res = await fetch("../../server/index.php?fetchtenders=true");
      const data = await res.json();
      if (Array.isArray(data)) {
        setTenders(data);
        setSpinner(false);
      }
    } catch (error) {
      setSpinner(false);

      error.message
        ? setError(error.message)
        : setError("There are no tenders.");
    }
  };
  const handleDelete = (id: number) => {
    if (confirm("Delete tender?")) {
      fetch(`../../server/index.php?deletetender=true&id=${id}`)
        .then(res => res.json())
        .then(res => {
          setTenders(tenders.filter(item => item.id !== id));
        })
        .catch(error => console.log(error.message));
    }
  };
  React.useEffect(() => {
    fetchDownloads();
  }, []);

  return (
    <AdminLayout>
      {!!tenders.length ? (
        <ShowDownloads tenders={tenders} handleDelete={handleDelete} />
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
      <Link to="/admin/tenders/add-tender" className="text-blue-600">
        <ArrowRight /> Add Tenders
      </Link>
    </AdminLayout>
  );
}
const ShowDownloads: React.FC<{
  tenders: Data[];
  handleDelete: (id: number) => void;
}> = ({ tenders = [], handleDelete = f => f }) => {
  //return table
  return (
    <Box>
      <Typography align="center" variant="h6">
        {tenders.length} tenders
      </Typography>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Details</TableCell>
              <TableCell>Added on</TableCell>
              <TableCell>
                {" "}
                <CloudDownload />
                Downloaded
              </TableCell>
              <TableCell>Remove</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {tenders.map((item, i) => (
              <DownloadsTable
                key={item.id}
                {...item}
                index={i}
                handleDelete={handleDelete}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
type Index = { index: number; handleDelete: (id: number) => void };
const DownloadsTable: React.FC<Data & Index> = ({
  index,
  id,
  tendername,
  tendertype,
  reference,
  addedon,
  details,
  dtimes,
  handleDelete,
}) => {
  return (
    <TableRow>
      <TableCell>{index + 1}</TableCell>
      <TableCell>
        {tendername} {!!reference ? `(${reference})` : ""}
      </TableCell>
      <TableCell>{tendertype}</TableCell>
      <TableCell>{details}</TableCell>
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

const faker = [...Array(15)].map((item, i) => ({
  id: i + 1,
  tendername: "Jules",
  tendertype: "RFQ",
  refence: i % 2 === 0 ? "www/2021/EC" : "",
  details: "Blinding lights",
  addedon: "20202/02/14",
}));
