import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

function ContactUs(): React.ReactNode {
  return (
    <Layout siteTitle="Contact us">
      <SEO title="Contact us" meta="Eastern College" />
      <p>Ccontact us</p>
    </Layout>
  )
}
export default ContactUs

/* 

<? php
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'views/includes/header.inc.php'; ?>
   
</head>
<body>
    <!-------------------------header----------------------------->
    <header>
        <?php include 'views/includes/navbar.inc.php'; ?>
    </header>
    <!-------------------------body----------------------------->
    <section class="container-fluid cotact-page-main-section">
        <div class="container">
            <div class="shadow">
                <p class="alert">You are always welcome to Eastern College. To get more information other than the one provided in this website, use the contact information below to get it.</p>
            </div>
            <div class="row mt-3">
                <div class="col-md-7">
                    <div class="cards">
                        <h5 class=" btn-secondary design blend_color h5">Address</h5>
                        <div class=" mtc_left des_gray"><i class="fa fa-play design_left"></i></div>
                        <div class=" mtc_right4 des_gray"><i class="fa fa-play design_right"></i></div>
                        <p class="ml-4">Makkah Al-mukarah street, KM5 ( Soobe),</p>
                        <p class="ml-4 mt-n3">Hodan , Mogadishu</p>
                        <div class="card mt-2 ">
                            <div class="mapouter">
                                <div class="gmap_canvas">
                                    <iframe width="600" height="500" id="gmap_canvas" 
                                    src="https://maps.google.com/maps?q=<?php echo "Hodan , Mogadishu, Somalia";?>&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" 
                                    marginwidth="0">
                                    </iframe>
                                    
                                </div>
                                <style>
                                .mapouter{
                                    position:relative;
                                    text-align:right;
                                    width:cover;
                                }
                                    .gmap_canvas {
                                        overflow:hidden;
                                        background:none!important;
                                        width:cover;                    
                                    }
                                </style>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="alert card mb-3">
                        <h5 class="design blend blend_color">Telephone</h5>
                        <div class=" mtc_left blend_text"><i class="fa fa-play design_left"></i></div>
                        <div class=" mtc_right blend_text"><i class="fa fa-play design_right"></i></div>
                        <p class="ml-4"><i class="fa fa-phone"></i> +252613778899</p>
                        <p class="ml-4 mt-n2"><i class="fa fa-envelope"></i> info@easterncollege.so</p>

                    <div class="d" id="contactformresp"></div>
                        <form action="submit-form.php" method="POST" class=" mb-3" id="contactform">
                            <div class="form-group">
                                <label>Email or Phone:</label>
                                <input type='text' name='email' class="email form-control" required>
                            </div>
                            <div class="form-group">
                                <label>Subject:</label>
                                <input type='text' name='subject' class="subject form-control" required>
                            </div>
                            <div class="form-group">
                                <label>Your message:</label>
                                <textarea type='text' name='message' rows="3" required class="border-bottom form-control"></textarea>
                            </div>
                            <div class="form-group" >
                                <input type="submit" class="contact-submit btn form-control btn-primary">
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-"></div>
            </div>            
        </div>
    </section> 
</body>

<!-------------------------footer----------------------------->
<footer>
    <?php include 'views/includes/footer.inc.php'; ?>
</footer>

</html>
<script src='/assets/jquery-3.4.1-min.js'></script>
<script src='views/assets/bootstrap/js/bootstrap.min.js'></script>
<!---------------------all javascript codes------------------------>
<script>
   $(document).ready(function(){

    
    // contact form
    $(document).on('submit', '#contactform', function(e){
            e.preventDefault();
            $.ajax({
                url : "/contactus/contactform",
                method : "post",
                contentType : false,
				processData : false,
				catch : false,
                data : new FormData(this),
                success : function(response) {
                   
                   $('#contactformresp').html(response);
                }
            })
            
        });



        $('.cont_current').css("color", "white");      

    });
</script>*/
