import React from "react"
import Layout from "../components/layout"

function PrivacyAndTerms(): React.ReactNode {
  return (
    <Layout siteTitle="privacy and terms">
      <p>Privacy and Terms</p>
    </Layout>
  )
}
export default PrivacyAndTerms

/*

< !DOCTYPE html > 
<html class="no-js">
    <head>
       <?php require "views/includes/header.inc.php";?>       
       <title><?php echo $this->title ?></title>
    </head>
    <body>
    <!-------------------------header----------------------------->
    <header>
        <?php include 'views/includes/navbar.inc.php'; ?>
    </header>
    <!-------------------------body----------------------------->
    
    <!-----------------------about------------------------------->
    <section class="container-fluid card"> 
    <div class="containers">         
                <div class="card mt-3 mb-1 card-team">
                    <h3 class="alert alert-primary text-center">Privacy Policy and Terms of Use <a href="#privacyandterms" data-toggle="modal" class="<?php echo $editor;?>"> <i class="fa fa-pencil <?php ?> " style="color: black"></i> </a></h3>                
                    <div class=" ml-3 mr-2 " >
                        <div class="alert">
                            <div class="alert" id="privacy_content">  
                            </div>
                        </div>
                    </div> 
                </div>
               
        </div>  
    </section>

</body>
   
    <footer class="footer">
        <?php require "views/includes/footer.inc.php";?> 
    </footer>     
</html>
<script src='views/assets/about.js'></script>
<script>
    $(function(){

        
       
         var slidTextId = "privacy_content";
        var getValue = "privacy";
        var id2 = "privacytextarea";
        getText(getValue, slidTextId, id2);

        //edit slider text
        $("#privacy_Modal").submit(function(e){
        e.preventDefault();
        var content = CKEDITOR.instances.privacytextarea.getData();
        var privacy = "privacy";
        //alert(content)
            updateText2(content, privacy);
            getText(getValue, slidTextId, id2);
        })
   

    })

</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ckeditor/4.8.0/ckeditor.js"></script>
<script type="text/javascript">
    //<![CDATA[
    CKEDITOR.replace( 'privacytextarea');
    //]]>
</script>
*/
