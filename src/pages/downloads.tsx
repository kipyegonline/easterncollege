import React from "react";
import axios from "axios";
import {
  CircularProgress,
  Typography,
  TableContainer,
  TableRow,
  TableCell,
  Button,
  Paper,
  Table,
  TableHead,
  TableBody,
} from "@material-ui/core";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { ArrowDropDownCircle, Error } from "@material-ui/icons";

type Data = {
  id?: string | number;

  des?: string;
  addedon?: string;
  filename?: string;
};

type Datum = Data[];

function Downloads(): React.ReactNode {
  const [data, setData] = React.useState<Datum>([]);
  const [spinner, setSpinner] = React.useState(false);
  const [err, setError] = React.useState("");

  const fetchDownloads = async (url: string) => {
    setSpinner(true);
    try {
      const res = await axios.get(url);

      const { data } = res;
      if (!Array.isArray(data) || !!!data.length) {
        throw new ReferenceError("No data found");
      } else {
        setData(data);
        setSpinner(false);
      }
    } catch (error) {
      //setSpinner(false);
      setTimeout(() => setSpinner(false), 3000);

      setError("There are no downloads at the moment");
    }
  };
  React.useEffect(() => {
    if (!!!data.length)
      fetchDownloads("../../server/index.php?fetchdownloads=true");
  }, []);

  const spinEl = (
    <Layout siteTitle="Downloads">
      <Paper className="lg:mx-20 md:mx-2 sm:mx-2 p-2 my-2">
        <div className="text-center my-4">
          <CircularProgress size="4rem" />
        </div>
      </Paper>
    </Layout>
  );
  const errEl = (
    <Layout siteTitle="Downloads">
      <SEO
        title="Eastern College courses"
        description="Downloads"
        lang="en"
        meta=""
      />
      <Paper className="lg:mx-20 md:mx-2 sm:mx-2 p-2 my-2">
        <Typography className="text-red-600 text-center">
          <Error /> {err}
        </Typography>
      </Paper>
    </Layout>
  );

  const downloadsEl = (
    <Layout siteTitle="Downloads">
      <Paper className="lg:mx-20 md:mx-2 sm:mx-2 p-2 my-2">
        <Typography variant="h6" align="center" className="my-2 p-1">
          Downloads
        </Typography>
        <DownloadsTable data={data} />
      </Paper>
    </Layout>
  );
  return !!data.length ? downloadsEl : spinner ? spinEl : errEl;
}
export default Downloads;

const DownloadsTable: React.FC<{ data: Datum }> = ({
  data = [],
}): JSX.Element => {
  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Added</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item: Data, index: number) => (
            <DownloadsFile key={item.id} {...item} index={index} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
type index = { index: number };
const DownloadsFile: React.FC<Data & index> = ({
  index,
  id,
  filename,
  des,
  addedon,
}) => {
  const fileurl = `../server/index.php?fetchdownload=true&id=${id}`;
  return (
    <TableRow>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{filename}</TableCell>
      <TableCell>{des}</TableCell>
      <TableCell>{new Date(addedon).toDateString()}</TableCell>
      <TableCell>
        <Button
          onClick={() => window.open(fileurl)}
          variant="contained"
          component="a"
          color="primary"
          size="medium"
          startIcon={<ArrowDropDownCircle />}
        >
          Download
        </Button>
      </TableCell>
    </TableRow>
  );
};
