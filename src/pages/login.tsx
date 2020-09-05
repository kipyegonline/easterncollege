import React from "react"
import Layout from "../components/layout"

function Login(): React.ReactNode {
  return (
    <Layout siteTitle="Login">
      <p>Login</p>
    </Layout>
  )
}
export default Login
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
