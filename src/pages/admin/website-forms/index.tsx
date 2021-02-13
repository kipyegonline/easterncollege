import {
  Box,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Typography,
} from "@material-ui/core";
import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import AdminLayout, { UseModal } from "../adminLayout";
import { Check, Error } from "@material-ui/icons";

type FormProps = {
  id: number;
  message: string;
  phone: string;
  email: string;
  seen: number;
  subject: string;

  addedon: string;
};
export default function Index() {
  const [forms, setForms] = React.useState<FormProps[]>([]);
  const [err, setErr] = React.useState("");
  const fetchData = async () => {
    try {
      const res = await fetch("../../server/index.php?fetchforms=true");
      const data: FormProps[] = await res.json();
      if (Array.isArray(data)) {
        setForms(data);
      } else {
        throw new TypeError("No payload");
      }
    } catch (error) {
      setErr(error.message);
      console.log(error);
    }
  };
  React.useEffect(() => {
    fetchData();
    //setTimeout(() => setForms(mm), 5000);
  }, []);

  return (
    <AdminLayout>
      <div>
        {forms.length ? (
          <FormsTable messages={forms} />
        ) : !!!err ? (
          <Box className="text-center p-4">
            <CircularProgress size="3rem" color="primary" />
            <Typography>Loading website forms...</Typography>
          </Box>
        ) : (
          <Typography align="center" className="text-red-600" variant="body1">
            <Error /> {err}
          </Typography>
        )}
      </div>
    </AdminLayout>
  );
}

const FormsTable: React.FC<{ messages: FormProps[] }> = ({ messages = [] }) => {
  const [message, setMessage] = React.useState({});
  const [current, setCurrent] = React.useState(0);
  const perpage = messages.length > 9 ? 10 : messages.length;
  const pages = Math.ceil(messages.length / perpage);
  const start = current * perpage,
    end = current * perpage + perpage;
  const handlePage = (e: React.ChangeEvent<unknown>, page: number) =>
    setCurrent(page - 1);

  return (
    <>
      {message?.id && <MessageModal message={message} />}
      {messages.length && (
        <Typography align="center" className="font-bold" variant="body2">
          {messages.length} messages.
        </Typography>
      )}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Subject</TableCell>

              <TableCell>Date</TableCell>
              <TableCell>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {messages.slice(start, end).map((message: FormProps, i: number) => (
              <FormTable
                key={i}
                {...message}
                index={i + start}
                showMessage={() => setMessage(message)}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {messages.length && (
        <Pagination
          onChange={handlePage}
          count={pages}
          color="primary"
          page={current + 1}
        />
      )}
    </>
  );
};

type Index = { index: number; showMessage: () => void };
const FormTable = ({
  index,
  email,
  phone,
  subject,
  seen,
  message,
  addedon,
  showMessage,
}: FormProps & Index) => (
  <TableRow>
    {" "}
    <TableCell>
      {index + 1}.{" "}
      <span>
        <Check htmlColor={+seen === 1 ? "blue" : ""} />
      </span>
    </TableCell>
    <TableCell>{email}</TableCell>
    <TableCell>{phone}</TableCell>
    <TableCell>{subject}</TableCell>
    <TableCell>{new Date(addedon).toDateString()}</TableCell>
    <TableCell>
      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={showMessage}
      >
        View
      </Button>
    </TableCell>
  </TableRow>
);
const MessageModal: React.FC<{ message: FormProps }> = ({ message }) => {
  const [isOpen, setOpen] = React.useState(!!message.id);
  const setBlueTicks = (id: number) => {
    if (!!!Number(message.seen)) {
      fetch(`../../server/index.php?setticks=true&uuid=${id}`)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error.message));
    }
  };

  React.useEffect(() => {
    setOpen(!!message.id);
    setBlueTicks(message.id);
  }, [message]);
  const close = () => setOpen(false);
  return (
    <UseModal title={message.subject} handleClick={close} open={isOpen}>
      <Box>
        <Typography>
          <strong>Subject:</strong>
          {message.subject}
        </Typography>
        <div>
          <Typography>{message.message}</Typography>
        </div>
      </Box>
    </UseModal>
  );
};
const mm = [...Array(13)].map((item, i) => ({
  id: i + 1,
  email: "vinnykipx@gmail.com",
  phone: "0788287557",
  subject: "crush",
  message: "Website forms",
  addedon: new Date().toDateString(),
}));
