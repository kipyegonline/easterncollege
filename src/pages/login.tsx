import React from "react";
import axios from "axios";
import {
  Card,
  Typography,
  CardHeader,
  CardContent,
  InputLabel,
  Input,
  InputAdornment,
  FormControl,
  Button,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  LinearProgress,
  Snackbar,
  CircularProgress,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Layout from "../components/layout";
import { Visibility, Email } from "@material-ui/icons";
import SEO from "../components/seo";
import { Skeleton } from "@material-ui/lab";

const logo = require("../images/logomedium.png");
const cover = require("../images/bernard-hermant-AKHh5Vie5AU-unsplash.jpg");

function Login(): React.ReactNode {
  const [resetPassword, setPassword] = React.useState(false);
  const [loaded, setLoad] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => setLoad(true), 2000);
  }, []);
  return (
    <Layout siteTitle="Login">
      <SEO title="User login" description="E-register" lang="en" meta="" />
      {!loaded ? (
        <div className="text-center my-4 p-4">
          <p>Redirecting</p>
          <Skeleton
            variant="rect"
            animation="wave"
            height={300}
            className="m-4 w-full h-full"
          />
        </div>
      ) : (
        <>
          {resetPassword ? (
            <ForgotPassword resetPassword={setPassword} />
          ) : (
            <LoginForm resetPassword={setPassword} />
          )}
        </>
      )}
    </Layout>
  );
}
export default Login;

const LoginForm = ({ resetPassword = f => f }) => {
  const [checked, setChecked] = React.useState(false);
  const [userId, setId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errormsg, setError] = React.useState("");
  const [spinner, setSpinner] = React.useState(false);
  const [success, setSuccess] = React.useState("");
  const form = React.useRef<HTMLFormElement | null>(null);

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) =>
    setChecked(e.target.checked);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userId.trim().length < 1 || userId.indexOf("@") < 0) {
      setError("Enter a valid userId/email");
      setTimeout(() => setError(""), 3000);
    } else if (password.trim().length < 5) {
      password.length < 1
        ? setError("Enter a password")
        : setError("Password is too short");
      setTimeout(() => setError(""), 3000);
    } else if (password.trim().length > 5 && userId.length > 5) {
      // send to server
      setSpinner(true);
      axios
        .post("https://www.easterncollege.so/login/processLogin", {
          userId,
          password,
          checked,
        })
        .then(res => {
          setSuccess(res.data);
        })
        .then(() => setSpinner(false))
        .catch(error => {
          setSpinner(false);
          setError(error.message);
        })
        .finally(() => {
          setTimeout(() => {
            setError("");
            setSuccess("");
          }, 3000);
        });
    }
  };

  return (
    <Card
      className="p-2 mx-auto my-2 sm:mx-auto sm:p-1 sm:my-2"
      style={{ maxWidth: 400, background: `url(${cover})` }}
    >
      <Typography align="center" variant="h6">
        Eastern College login
      </Typography>
      <CardHeader
        className="mx-auto"
        avatar={
          <img
            src={logo}
            height={50}
            className="mx-auto border-yellow-500 border-b"
            alt="Eastern College logo"
          />
        }
      />

      <CardContent>
        <form className="p-2" onSubmit={handleSubmit}>
          <FormControl className="block w-full p-2 mx-auto">
            <InputLabel>Enter login ID</InputLabel>
            <Input
              type="text"
              fullWidth
              className="my-2 p-2"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setId(e.target.value)
              }
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircleIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl className="block w-full p-2 mx-auto">
            <InputLabel>Enter password</InputLabel>
            <Input
              type="password"
              fullWidth
              className="my-2 p-2"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              startAdornment={
                <InputAdornment position="start">
                  <Visibility />
                </InputAdornment>
              }
            />
          </FormControl>
          <div className="p-2">
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={checked}
                  onChange={handleCheckbox}
                />
              }
              label="Remember me"
            />
            <Typography
              className="text-blue-500 cursor-pointer"
              variant="caption"
              onClick={() => resetPassword(true)}
            >
              Forgot password
            </Typography>
          </div>
          <div className="text-center p-2 my-0">
            {spinner ? <LinearProgress /> : null}
            <FormHelperText className="py-1 p-1" error>
              {errormsg}
            </FormHelperText>
          </div>
          <Button
            variant="contained"
            className="block w-full my-2 mx-auto rounded"
            color="primary"
            type="submit"
          >
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

const ForgotPassword = ({ resetPassword = f => f }) => {
  const [email, setEmail] = React.useState("");
  const [errormsg, setError] = React.useState("");
  const [spinner, setSpinner] = React.useState(false);
  const [success, setSuccess] = React.useState("");
  const handleReset = (): void => {
    if (email.trim().length > 9 && email.includes("@")) {
      setSpinner(true);
      axios
        .post("https://www.easterncollege.so/login/processPasswordReset", {
          email,
        })
        .then(res => {
          console.log("res", res);
          setSuccess(res.data);
        })
        .then(() => setSpinner(false))
        .catch(error => {
          console.log(error);
          setSpinner(false);
          setError(error.message);
        })
        .finally(() =>
          setTimeout(() => {
            setError("");
            setEmail("");
            setSuccess("");
          }, 3000)
        );
    } else {
      setError("Please enter a valid email address");
      setTimeout(() => setError(""), 4000);
    }
  };
  return (
    <Card className="mx-auto my-2 p-2 relative" style={{ maxWidth: 400 }}>
      <Typography variant="h6" align="center">
        Reset password..
      </Typography>
      <FormControl className="w-full p-1 my-2">
        <InputLabel className="text-2xl">Enter your email address..</InputLabel>
        <Input
          type="email"
          fullWidth={true}
          className="mb-0 px-0"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          startAdornment={
            <InputAdornment position="start">
              <Email />
            </InputAdornment>
          }
        />
      </FormControl>
      <Snackbar open={!!success.length}>
        <Typography variant="body1" align="center">
          {success}
        </Typography>
      </Snackbar>

      <Snackbar className="absolute" open={!!errormsg.length}>
        <Typography variant="body1" align="center">
          {errormsg}
        </Typography>
      </Snackbar>

      <div className="py-1">{spinner ? <LinearProgress /> : null}</div>
      <Button
        onClick={handleReset}
        className="mt-2 p-1 w-full"
        color="primary"
        variant="contained"
      >
        Submit
      </Button>
      <Typography
        variant="caption"
        className="text-center cursor-pointer  mt-2 text-blue-500"
        onClick={() => resetPassword(false)}
      >
        Back to login
      </Typography>
    </Card>
  );
};
/*



<? php 
    if (isset($_SESSION['loggedIn'])) 
        CustomFunctions::relocate('/admin');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php require_once 'views/includes/header.inc.php'; ?>  

</head>
<body>
    <!-------------------------header----------------------------->
    <header class="header_body">
        <?php require_once 'views/includes/navbar.inc.php'; ?>
    </header> 
    <!-------------------------body-----------------------------> 
    
    <div class="login-form">
        <div class="avatar_user blend"> <i class="fa fa-user"></i> </div>
    <form action="" method="post" class="lg_form">  
        <div class="form-group mt-3">
        	<div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">
                        <span class="fa fa-user"></span>
                    </span>                    
                </div>
                <input type="text" class="form-control" name="loginId" placeholder="Login id" required id="email">				
            </div>
        </div>
		<div class="form-group">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">
                        <i class="fa fa-lock"></i>
                    </span>                    
                </div>
                <input type="password" class="form-control" name="pass1" id="pass1" placeholder="Password" required="required">				
            </div>
        </div>        
        <div class="form-group">
            <button type="submit" class="btn btn-primary login-btn btn-block">Sign in</button>
        </div>
        <div class="info"></div>
        <div class="clearfix">
            <label class="float-left form-check-label"><input type="checkbox"> Remember me</label>
            <a href="#" class="float-right">Forgot Password?</a>
        </div>		
    </form>
  
</div>

    <!---------------------------X--end of mission---X------------> 
</body>
<!-------------------------footer----------------------------->
<footer>
    <?php require_once 'views/includes/footer.inc.php'; ?>
</footer>
</html>
<script>
    $(function(){

        $('.lg_form').submit(function(){
            event.preventDefault();
            //console.log(fname, lname, email, username, pnumber, pass1, pass2);
            $.ajax({
                url : "login/processLogin",
                method : "POST",
                data : $('.lg_form').serialize(),
                success : function(response){
                    $(".info").html(response);
                    setTimeout(() => {
                       // $(".info").html('');
                    }, 4000);
                }                    
            });      
 
            }); 
        
    });

</script>*/
