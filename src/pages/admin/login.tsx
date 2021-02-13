import React from "react";
import axios from "axios";
import { v4 } from "uuid";
import { navigate } from "gatsby";
import ErrorIcon from "@material-ui/icons/Error";
import {
  Box,
  FormControl,
  Input,
  InputLabel,
  Paper,
  Typography,
  Button,
  Link,
  FormHelperText,
  LinearProgress,
} from "@material-ui/core";
import Layout from "../../components/layout";

const style = { display: "block", width: "100%" };

export default function Login() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [useremail, setUserEmail] = React.useState("");
  const [userpassword, setUserPassword] = React.useState("");
  const [usercpassword, setUsercPassword] = React.useState("");
  const [errormsg, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");
  const [spinner, setSpinner] = React.useState(false);
  const form = React.useRef<HTMLFormElement | null>(null);

  const [isLogin, setLogin] = React.useReducer(
    (a: boolean, b: boolean) => (b = !a),
    true
  );
  React.useEffect(() => {
    const user: any = JSON.parse(
      localStorage.getItem("local-user-token") as any
    );
    //if (user) window.location.pathname = "/admin/sermons"
  }, []);
  const handleLogin = e => {
    e.preventDefault();
    if (!email && !password) {
      setError("Enter email and password to log in");
      setTimeout(() => setError(""), 3000);
    } else if (email.trim().length < 7) {
      email.length < 1
        ? setError("Enter an email address ")
        : setError("Enter a valid  email ");

      setTimeout(() => setError(""), 3000);
    } else if (password.trim().length < 5) {
      setError("Enter a password ");
      setTimeout(() => setError(""), 3000);
    } else if (email.length > 6 && password.length > 5) {
      setSpinner(true);
      axios
        .post("../../server/index.php?loginuser=true", {
          password,
          email,
        })
        .then(res => {
          const { data } = res;
          if (data.status === 200) {
            setPassword("");
            setEmail("");
            localStorage.setItem("eastern-user", JSON.stringify(data));
            setTimeout(
              () => localStorage.removeItem("eastern-user") as any,
              6e4 * 30
            );
            location.pathname = "/admin/";
            //setTimeout(() => setSuccess(""), 3000)
          } else {
            throw new Error(data.msg);
          }
        })
        .catch(error => {
          console.log(error);
          error.message
            ? setError(error.message)
            : setError("Error logging in. Check network and try again");
        })
        .finally(() => {
          setSpinner(false);
          setTimeout(() => setError(""), 3000);
        });
    } else {
      setError("Enter email and password to login");
      setTimeout(() => setError(""), 3000);
    }
  };
  const handleSignUP = e => {
    e.preventDefault();
    if (username.trim().length < 5) {
      setError("Kindly add a username");
      setTimeout(() => setError(""), 3000);
    } else if (useremail.trim().length < 6 || !useremail.trim().includes("@")) {
      useremail.trim().length < 6
        ? setError("Email address is required")
        : setError("invalid email address");

      setTimeout(() => setError(""), 3000);
    } else if (userpassword.trim().length < 4) {
      setError("Enter a  password (atleast 6 characters)");
      setTimeout(() => setError(""), 3000);
    } else if (usercpassword.trim().length < 4) {
      setError("Confirm password");
      setTimeout(() => setError(""), 3000);
    } else if (userpassword.trim() !== usercpassword.trim()) {
      setError("The passwords do not match");
      setTimeout(() => setError(""), 3000);
    } else if (
      usercpassword.length > 3 &&
      userpassword.length > 3 &&
      useremail.length > 8
    ) {
      //send to server
      setSpinner(true);
      axios
        .post("../../server/index.php?signupuser=true", {
          userpassword,
          useremail,
          username,
          altId: v4(),
        })
        .then(res => {
          const { data } = res;
          setTimeout(() => {
            if (data.status === 200) {
              setSpinner(false);
              setSpinner(false);
              setSuccess(data.msg);
              setUserPassword("");
              setUsercPassword("");
              setUserEmail("");
              if (form.current) form.current.reset();
              setTimeout(() => setSuccess(""), 3000);
            } else {
              throw new Error(data.msg);
            }
          }, 2000);
        })
        .catch(error => {
          setSpinner(false);
          console.log(error);
          !!error.message
            ? setError(error.message)
            : setError("Error signing up. Check network and try again");
        })
        .finally(() => {
          setTimeout(() => setError(""), 3000);
        });
    } else {
      setError("All fields are required");
      setTimeout(() => setError(""), 3000);
    }
  };
  const handlesignlog = () => {
    setLogin(isLogin);
    if (form.current) form.current.reset();
    setUserPassword("");
    setUsercPassword("");
    setUserEmail("");
    setPassword("");
    setEmail("");
  };
  const signlog = (
    <Typography
      variant="subtitle1"
      className="text-primary p-2 my-2 "
      onClick={handlesignlog}
      align="center"
    >
      {isLogin ? "Sign up" : "Login"}
    </Typography>
  );
  const login = (
    <form
      onSubmit={handleLogin}
      style={{ maxWidth: 400 }}
      className="p-4"
      ref={form}
    >
      <Typography className="alert alert-info text-center mb-3">
        Admin login section{" "}
      </Typography>

      <FormControl style={style}>
        <InputLabel>Enter email address....</InputLabel>
        <Input
          type="email"
          fullWidth
          onChange={e => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl style={style}>
        <InputLabel>Enter password....</InputLabel>
        <Input
          type="password"
          fullWidth
          onChange={e => setPassword(e.target.value)}
        />
      </FormControl>
      <Box>
        {errormsg && (
          <FormHelperText error>
            <ErrorIcon color="secondary" className="mr-2" fontSize="small" />
            {errormsg}
          </FormHelperText>
        )}
        {success && (
          <FormHelperText className="text-center text-green-700">
            {success}
          </FormHelperText>
        )}
        {spinner && <LinearProgress color="primary" className="my-2" />}
      </Box>
      <Button
        type="submit"
        color="primary"
        variant="contained"
        className="mt-2 "
        style={style}
        disabled={spinner}
      >
        {spinner ? "Logging in" : "Log in"}
      </Button>
      {signlog}
    </form>
  );

  const signup = (
    <form
      onSubmit={handleSignUP}
      style={{ maxWidth: 400 }}
      className="p-4"
      ref={form}
    >
      <Typography className="alert alert-info text-center mb-3">
        Admin sign up section.....
      </Typography>
      <FormControl style={style}>
        <InputLabel>Enter username...</InputLabel>
        <Input
          type="text"
          fullWidth
          onChange={e => setUsername(e.target.value)}
        />
      </FormControl>
      <FormControl style={style}>
        <InputLabel>Enter email address....</InputLabel>
        <Input
          type="email"
          fullWidth
          onChange={e => setUserEmail(e.target.value)}
        />
      </FormControl>
      <FormControl style={style}>
        <InputLabel>Enter password....</InputLabel>
        <Input
          type="password"
          fullWidth
          onChange={e => setUserPassword(e.target.value)}
        />
      </FormControl>
      <FormControl style={style}>
        <InputLabel>Confirm password....</InputLabel>
        <Input
          type="password"
          fullWidth
          onChange={e => setUsercPassword(e.target.value)}
        />
      </FormControl>
      <Box className="my-2">
        {errormsg && (
          <FormHelperText error className="text-center p-1 ">
            <ErrorIcon color="secondary" className="mr-2" fontSize="small" />{" "}
            {errormsg}
          </FormHelperText>
        )}
        {success && (
          <FormHelperText className="alert alert-success">
            {success}
          </FormHelperText>
        )}
        {spinner && <LinearProgress color="primary" />}
      </Box>
      <Button
        type="submit"
        color="primary"
        variant="contained"
        className="mt-2 "
        style={style}
        disabled={spinner}
      >
        signUp
      </Button>
      {signlog}
    </form>
  );

  return (
    <Layout siteTitle="Login">
      <Paper className="mx-auto my-4 p-4" style={{ maxWidth: 500 }}>
        {isLogin ? login : signup}
      </Paper>
    </Layout>
  );
}
