import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

function Faqs(): React.ReactNode {
  return (
    <Layout siteTitle="Frequently Asked questions">
      <SEO
        title="Eastern College courses"
        description="Frequently Asked questions"
        lang="en"
        meta=""
      />
      <p>FAQ</p>
    </Layout>
  );
}
export default Faqs;

/*< !DOCTYPE html >
<html class="no-js">
    <head>
       <?php require "views/includes/header.inc.php";?> 
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
                <h3 class="alert alert-primary text-center">Fequently Asked Questions 
                    <a href="#fqs_modal" data-toggle="modal" class="<?php echo $editor;?>"> <i class="fa fa-pencil initial " ></i> </a>
                </h3>                
                <div class=" ml-3 mr-2 " >
                    <div class="alert">
                        <div class="alert" id="faqs_content">  
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

        
       
         var slidTextId = "faqs_content";
        var getValue = "faqs";
        var id2 = "faqstextarea";
        getText(getValue, slidTextId, id2);

        //edit slider text
        $("#faqs_form").submit(function(e){
        e.preventDefault();
        var content = CKEDITOR.instances.faqstextarea.getData();
        var faqs = "faqs";
        //alert(content)
            updateText2(content, faqs);
            getText(getValue, slidTextId, id2);
        })
    

    })

</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ckeditor/4.8.0/ckeditor.js"></script>
<script type="text/javascript">
    //<![CDATA[
    CKEDITOR.replace( 'faqstextarea');
    //]]>
    </script>
*/
