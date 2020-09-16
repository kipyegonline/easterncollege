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

type Data = {
  id?: string | number;
  file?: string;
  target?: string;
  date?: string;
  title?: string;
};

type Datum = Data[];

const fake: Datum = [
  {
    id: 1,
    file: "download.pdf",
    target: "Faculty",
    date: "10/09/20202",
    title: "News",
  },
  {
    id: 2,
    file: "newsletter.pdf",
    target: "School",
    date: "10/09/20202",
    title: "News",
  },
];
function Downloads(): React.ReactNode {
  const [data, setData] = React.useState<Datum>([]);
  const [spinner, setSpinner] = React.useState(false);
  const [err, setError] = React.useState("");

  const fetchDownloads = async (url: string) => {
    setSpinner(true);
    try {
      const res = await axios.get(url);
      console.log(res);
      const { data } = res;
      if (typeof data !== "object" || data.length < 1) {
        throw new Error("No data found");
      } else {
        setData(data);
        setSpinner(false);
      }
    } catch (error) {
      //setSpinner(false);
      setTimeout(() => setSpinner(false), 3000);
      setError(error.message);
      setTimeout(() => setError(""), 3000);
    }
  };
  React.useEffect(() => {
    if (!!!data.length) fetchDownloads("");
  }, []);

  if (spinner)
    return (
      <Layout siteTitle="Downloads">
        <Paper className="lg:mx-20 md:mx-2 sm:mx-2 p-2 my-2">
          <div className="text-center my-4">
            <CircularProgress size="4rem" />
          </div>
        </Paper>
      </Layout>
    );
  if (!!err)
    return (
      <Layout siteTitle="Downloads">
        <SEO
          title="Eastern College courses"
          description="Downloads"
          lang="en"
          meta=""
        />
        <Paper className="lg:mx-20 md:mx-2 sm:mx-2 p-2 my-2">
          <Typography className="text-red-600 text-center">{err}</Typography>
        </Paper>
      </Layout>
    );

  return (
    <Layout siteTitle="Downloads">
      <Paper className="lg:mx-20 md:mx-2 sm:mx-2 p-2 my-2">
        <Typography variant="h6" align="center" className="my-2 p-1">
          Downloads
        </Typography>
        <DownloadsTable data={fake} />
      </Paper>
    </Layout>
  );
}
export default Downloads;

const DownloadsTable: React.FC<{ data: Datum }> = ({
  data = [],
}): JSX.Element => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Target</TableCell>
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
  title,
  target,
  file,
  date,
}) => {
  return (
    <TableRow>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{target}</TableCell>
      <TableCell>{date}</TableCell>
      <TableCell>
        <Button
          href={file}
          variant="contained"
          component="a"
          target="_blank"
          color="primary"
          size="medium"
        >
          Download
        </Button>
      </TableCell>
    </TableRow>
  );
};
