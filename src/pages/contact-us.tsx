import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import {
  Box,
  Typography,
  IconButton,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  TextField,
  Grid,
  Snackbar,
  Button,
  CircularProgress,
} from "@material-ui/core";

import Alert from "@material-ui/lab/Alert";
import CheckIcon from "@material-ui/icons/CheckOutlined";
import ErrorIcon from "@material-ui/icons/ErrorOutlined";
import Mail from "@material-ui/icons/Mail";
import Telephone from "@material-ui/icons/PhoneInTalk";
import Pin from "@material-ui/icons/PinDrop";
import Email from "@material-ui/icons/Email";
import Call from "@material-ui/icons/Call";
import Subject from "@material-ui/icons/Subject";
import Message from "@material-ui/icons/Message";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Edit } from "@material-ui/icons";

const useStyles = makeStyles({
  iframe: {
    border: 0,
    width: "100%",
    minWidth: 300,
    height: 400,
    maxWidth: 1260,
    padding: ".5rem",
    margin: "0 auto",

    "@media (max-width:480px)": {
      height: 200,
    },
    "@media (max-width:768px)": {
      height: 300,
    },
  },
  form: {
    width: 500,
    background: "#fff",
    padding: "1.3rem",
    margin: " .5rem 1rem",

    "@media (max-width:768px)": {
      padding: 10,
      width: 500,

      margin: "1rem auto",
    },
    "@media (max-width:480px)": {
      padding: 10,

      width: 340,
      margin: ".5rem ",
    },
  },
  formControl: {
    width: "100%",
    padding: ".5rem",
    margin: " .25rem",
  },

  label: {
    padding: ".5rem",
  },
  input: {
    padding: ".5rem",
  },
  textarea: {
    padding: ".5rem",
    margin: " 0 .5rem",
  },
  btn: {
    outline: "none",
    display: "block",
    width: "100%",
    margin: ".5rem auto",
  },
});

function ContactUs(): React.ReactNode {
  return (
    <Layout siteTitle="Contact us">
      <SEO title="Contact us" meta="Eastern College" />
      <Box>
        <Typography align="center">
          You are always welcome to visit Eastern College.
        </Typography>
        <Map />
      </Box>
      <Grid container>
        <Grid item lg={4} xs={12} md={4}>
          <EasternContacts />
        </Grid>
        <Grid item lg={4} xs={12} md={4}>
          {" "}
          <ContactForm />
        </Grid>
      </Grid>
    </Layout>
  );
}
export default ContactUs;
export const EasternContacts = () => (
  <Box
    className="m-2 p-2 md:mx-auto"
    style={{ boxShadow: "2px 2px 5px #fff", background: "none", maxWidth: 400 }}
  >
    <Typography
      variant="h6"
      className="border-b border-green-500"
      align="center"
    >
      Reach Us
    </Typography>

    <Typography variant="body1" className="my-1 py-1">
      <IconButton>
        <Telephone />
      </IconButton>
      +252-613-778-899
    </Typography>
    <Typography variant="body1" className="my-1 py-1 text-yellow-900">
      <IconButton>
        <Mail />
      </IconButton>
      info@easterncollege.so
    </Typography>
    <div>
      <address className="my-1 py-1 break-words ">
        <IconButton>
          <Pin />
        </IconButton>
        Makkah Al-mukarah street, <wbr /> KM5 ( Soobe), Hodan ,
        <span className="ml-8 md:ml-2 sm:ml-2"> Mogadishu, Somalia </span>
      </address>
    </div>
  </Box>
);
const Map = () => {
  const classes = useStyles();
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.2443492108187!2d45.32665021432442!3d2.058193759464508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d58433f2603c0f7%3A0x1bdb0b2afcd8ebc6!2sEastern%20College!5e0!3m2!1sen!2ske!4v1599652819372!5m2!1sen!2ske"
      frameBorder="0"
      title="Eastern college coords"
      className={classes.iframe}
      allowFullScreen={true}
      aria-hidden={false}
    ></iframe>
  );
};

const ContactForm = () => {
  const [message, setMessage] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [errmsg, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");
  const [spinner, setSpinner] = React.useState(false);
  const form = React.useRef<HTMLFormElement | null>(null!);

  const classes = useStyles();

  const getValue = (name: string, value: string) => {
    const setState = eval("set" + name);

    setState(value);
  };
  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    setMessage(target.value);
  };
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      message.trim().length > 0 &&
      email.trim().length > 9 &&
      phone.trim().length > 5 &&
      subject.trim().length > 5
    ) {
      setSpinner(true);
      axios
        .post("./server/index.php?websiteform=true", {
          message,
          phone,
          email,
          subject,
        })
        .then(res => {
          const { data } = res;

          if (data.status === 200) {
            setSpinner(false);
            setSuccess("Message submittted. We will revert shortly");
            setPhone("");
            setMessage("");
            setSubject("");
            setEmail("");

            setTimeout(() => {
              setSuccess("");
              if (form.current) form.current.reset();
            }, 4000);
          } else {
            throw new Error(data.msg);
          }
        })
        .catch(error => {
          setSpinner(false);

          setError(error.message);
          setTimeout(() => setError(""), 4000);
        });
    } else {
      setError("All fields are required");
      setTimeout(() => setError(""), 4000);
    }
  };

  return (
    <form
      className={classes.form}
      name="contact-form"
      data-netlify="true"
      onSubmit={handleSubmit}
      ref={form}
      data-netlify-honeypot="bot-field"
    >
      <Typography align="center" className="border-b border-green-500">
        {" "}
        <Message />
        Direct Message
      </Typography>
      <input type="hidden" name="form-name" value="contact-form" />
      <FormInput
        name="Email"
        type="email"
        Icon={Email}
        getValue={getValue}
        label="Enter email address"
      />
      <FormInput
        name="Phone"
        type="number"
        Icon={Call}
        getValue={getValue}
        label="Enter Phone number"
      />
      <FormInput
        name="Subject"
        type="text"
        Icon={Subject}
        getValue={getValue}
        label="Enter subject"
      />
      <TextField
        variant="filled"
        multiline
        onChange={handleMessage}
        className={classes.textarea}
        rows={3}
        label="Enter message"
        value={message}
        fullWidth={true}
      />
      <div className="text-center p-2">
        {spinner ? <CircularProgress /> : null}
      </div>
      <FormHelperText error>{errmsg}</FormHelperText>
      <Button
        type="submit"
        disabled={spinner}
        className={classes.btn}
        variant="contained"
        color="primary"
      >
        Submit
      </Button>

      <Snackbar open={!!success.length}>
        <Alert
          icon={<CheckIcon />}
          variant="filled"
          color="success"
          severity="success"
        >
          {success}
        </Alert>
      </Snackbar>
    </form>
  );
};
type FormInput = {
  label: string;
  type: string;
  multiline?: boolean;
  getValue: (name: string, value: string) => void;
  Icon?: any;
  name?: string;
  value?: string;
};
export const FormInput: React.FC<FormInput> = ({
  label,
  type = "text",
  getValue = f => f,
  multiline = false,
  Icon = Edit,
  name = "",
}) => {
  const classes = useStyles();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    getValue(target.name, target.value);
  };
  return (
    <FormControl className={classes.formControl}>
      <InputLabel className={classes.label}> {label} </InputLabel>
      <Input
        onChange={handleChange}
        type={type}
        multiline={multiline}
        name={name}
        className={classes.input}
        fullWidth={true}
        startAdornment={
          <InputAdornment position="start">
            <Icon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export const Spinner = () => (
  <Box className="text-center p-1 m-1">
    <CircularProgress size="2rem" color="primary" />
  </Box>
);
