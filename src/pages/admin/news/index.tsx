import React from "react";
import { Link } from "gatsby";
import {
  Box,
  CircularProgress,
  Typography,
  Table,
  TableContainer,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Button,
} from "@material-ui/core";
import { ArrowRight, Error } from "@material-ui/icons";

import AdminLayout from "../adminLayout";

type Data = {
  id: number;
  title: string;
  body: string;
  date: string;
  addedon: string;
};

export default function News() {
  const [news, setNews] = React.useState<Data[]>([]);
  const [spinner, setSpinner] = React.useState(false);
  const [errmsg, setError] = React.useState("");

  const fetchDownloads = async () => {
    try {
      setSpinner(true);
      const res = await fetch("../../server/index.php?fetchnews=true");
      const data = await res.json();
      if (Array.isArray(data)) {
        setNews(data);
        setSpinner(false);
      }
    } catch (error) {
      setSpinner(false);

      error.message
        ? setError(error.message)
        : setError("There are no news items.");
    }
  };
  const handleDelete = (id: number) => {
    if (confirm("Delete news item?")) {
      fetch(`../../server/index.php?deletenews=true&id=${id}`)
        .then(res => res.json())
        .then(res => {
          setNews(news.filter(item => item.id !== id));
        })
        .catch(error => console.log(error.message));
    }
  };
  React.useEffect(() => {
    fetchDownloads();
  }, []);

  return (
    <AdminLayout>
      {!!news.length ? (
        <ShowNews news={news} handleDelete={handleDelete} />
      ) : spinner ? (
        <Box className="p-4 mx-auto my-4 text-center">
          <CircularProgress size="3rem" color="primary" />
        </Box>
      ) : (
        <Typography variant="h6" align="center">
          {" "}
          <Error color="secondary" />
          {errmsg}
        </Typography>
      )}
      <Link to="/admin/news/add-news" className="text-blue-500">
        <ArrowRight /> Add news..
      </Link>
    </AdminLayout>
  );
}

const ShowNews: React.FC<{
  news: Data[];
  handleDelete: (id: number) => void;
}> = ({ news = [], handleDelete = f => f }) => {
  return (
    <Box>
      <Typography align="center" variant="h6">
        {news.length} news items.
      </Typography>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell> title</TableCell>
              <TableCell>news</TableCell>
              <TableCell>Date</TableCell>

              <TableCell>Remove</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {news.map((item, i) => (
              <NewsTable
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
const NewsTable: React.FC<Data & Index> = ({
  index,
  title,
  body,
  id,
  date,
  handleDelete,
}) => {
  return (
    <TableRow>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{body}</TableCell>
      <TableCell>{new Date(date).toDateString()}</TableCell>
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
const faker = [...Array(11)].map((item, i) => ({
  id: i + 1,
  title: "Daisies",
  body: "They cover me in Daisies",
  date: "2021/02/15",
  addedon: "2021/02/15",
}));
