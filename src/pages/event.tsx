import React from "react"
import Layout from "../components/layout"

function Event(): React.ReactNode {
  return (
    <Layout siteTitle="post">
      <p>TPost</p>
    </Layout>
  )
}
export default Event

/*

< !DOCTYPE html > 
<html class="no-js">
    <head>
       <?php require getenv("DOCUMENT_ROOT") . "/views/includes/header.inc.php";?> 
       <style>
           .fa-list-ul, .fa-calendar, .fa-user {
               font-weight: 900;
               font-size: 20px;
               font-style: italic;
           }
       </style>
    </head>
    <body>
    <!-------------------------header----------------------------->
    <header>
        <?php require getenv("DOCUMENT_ROOT") . "/views/includes/navbar.inc.php"; ?>
    </header>
    <!-------------------------body----------------------------->    
    <!-----------------------about------------------------------->
    <section class="container-fluid card"> 
    <div class="containers">
        <div class="row">
        <div class="col-md-2"> </div> 
            <div class="col-md-8">          
                <div class="card mt-3 mb-1 card-team">
                    <h5 class="alert alert-primary text-center"> <?php echo ucfirst($this->loadPost['e_title']); ?></h5>                
                    <div class=" ml-3 mr-2 " >
                        <div class="alert"> 
                            <?php
                            

                               $file = $this->loadPost['e_file'];
                               $path = getenv('DOCUMENT_ROOT') . '/views/assets/uploads/';
                               if (!file_exists($path . $file))                               
                                    $file = 'diris.png';
                               
                            ?>
                            <img src="/views/assets/uploads/<?php echo $file; ?>" alt="alt" class="card-img-top img-responsive" style="max-height: 350px;"> 
                            <div class="card-body">
                                <b>Theme: <?php echo $this->loadPost['e_theme']; ?></b>
                            </div>                                    
                        </div>
                    </div>                   
                    </div>  
                </div>
                <div class="col-md-2">
                    
                </div>
            </div>
        </div>  
    </section>

</body>
   
    <footer class="footer">
        <?php require getenv("DOCUMENT_ROOT") . "/views/includes/footer.inc.php";?> 
    </footer>     
</html>
<script src='/views/assets/about.js'></script>
<script>
    $(function(){


        $('.blog_current').css("color", "white");
    })

</script>
*/
