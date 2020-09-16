import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
function CourseDescription(): React.ReactNode {
  return (
    <Layout siteTitle="Content">
      <SEO
        title="Course description"
        description="Course description"
        lang="en"
        meta=""
      />
      <p>Course description</p>
    </Layout>
  );
}
export default CourseDescription;

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
                    <h5 class="alert alert-primary text-center"> <?php echo ucfirst($this->loadPost['c_name']); ?></h5>                
                    <div class=" ml-3 mr-2 " >
                        <div class="alert">
                            <div class="card-body">
                                <p><?php echo $this->loadPost['c_desc']; ?></p>
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

    })

</script>
*/
