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
import { ArrowRight, Error } from "@material-ui/icons";
import { Link } from "gatsby";
import React from "react";
import AdminLayout from "../adminLayout";

type Data = {
  id: number;
  careername: string;
  reference: string;
  deadline: string;

  fileattached: string;
  addedon: string;
  details: string;
  dtimes: number;
};

export default function Careers() {
  const [careers, setCareers] = React.useState([]);
  const [spinner, setSpinner] = React.useState(false);
  const [errmsg, setError] = React.useState("");

  const fetchDownloads = async () => {
    try {
      setSpinner(true);
      const res = await fetch("../../server/index.php?fetchcareers=true");
      const data = await res.json();
      if (Array.isArray(data)) {
        setCareers(data);
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
    if (confirm("Delete career?")) {
      fetch(`../../server/index.php?deletecareer=true&id=${id}`)
        .then(res => res.json())
        .then(res => {
          setCareers(careers.filter(item => item.id !== id));
        })
        .catch(error => console.log(error.message));
    }
  };
  React.useEffect(() => {
    fetchDownloads();
  }, []);

  return (
    <AdminLayout>
      {!!careers.length ? (
        <ShowDownloads careers={careers} handleDelete={handleDelete} />
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
      <Link to="/admin/careers/add-careers" className="text-blue-600">
        <ArrowRight /> Add Careers
      </Link>
    </AdminLayout>
  );
}

const ShowDownloads: React.FC<{
  careers: Data[];
  handleDelete: (id: number) => void;
}> = ({ careers = [], handleDelete = f => f }) => {
  return (
    <Box>
      <Typography align="center" variant="h6">
        {careers.length} careers
      </Typography>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Details</TableCell>
              <TableCell>Deadline</TableCell>
              <TableCell>Added on</TableCell>
              <TableCell>Downloaded</TableCell>
              <TableCell>Remove</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {careers.map((item, i) => (
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
  careername,
  deadline,
  reference,
  addedon,
  details,
  dtimes,
  fileattached,
  handleDelete,
}) => {
  return (
    <TableRow>
      <TableCell>{index + 1}.</TableCell>
      <TableCell>
        {careername} {!!reference ? `(${reference})` : ""}
      </TableCell>

      <TableCell>{details}</TableCell>
      <TableCell>{deadline}</TableCell>
      <TableCell>{new Date(addedon).toDateString()}</TableCell>
      <TableCell>{!!Number(fileattached) ? dtimes : "no file"}</TableCell>
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
