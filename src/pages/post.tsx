import { CircularProgress, Paper, Typography } from "@material-ui/core";
import React from "react";
import Layout from "../components/layout";

function Post(): React.ReactNode {
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => setLoaded(true), 3000);
  }, []);
  return (
    <Layout siteTitle="post">
      <Paper className="sm:mx-auto p-2 my-2 md:mx-10 my-3 p-2 lg:mx-20 p-4 my-4">
        {loaded ? (
          <Typography className="text-center my-4">
            There are no news items at the moment...<b>Check back soon </b>
          </Typography>
        ) : (
          <div className="text-center my-4 py-3">
            <CircularProgress size="4rem" />
            <span>Loading news</span>
          </div>
        )}
      </Paper>
    </Layout>
  );
}
export default Post;

/*

< !DOCTYPE html > 
<html class="no-js">
    <head>
       <?php require getenv("DOCUMENT_ROOT") . "/views/includes/header.inc.php";?>       
       <title><?php echo $this->title; ?></title>
       <meta name='description' content="<?php echo empty($this->loadPost['b_description']) ? substr($this->loadPost['b_content'], 0, 165) : $this->loadPost['b_description']; ?>">
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
                    <h5 class="alert alert-primary text-center"> <?php echo ucfirst($this->loadPost['b_title']); ?></h5>                
                    <div class=" ml-3 mr-2 " >
                        <div class="alert"> 
                            <?php
                            

                               $file = $this->loadPost['b_file'];
                               $path = getenv('DOCUMENT_ROOT') . '/views/assets/uploads/';
                               if (!file_exists($path . $file))                               
                                    $file = 'diris.png';
                               
                            ?>
                            <img src="/views/assets/uploads/<?php echo $file; ?>" alt="alt" class="card-img-top img-responsive" style="max-height: 400px;"> 
                            <div class="card-body">
                                <?php echo $this->loadPost['b_content']; ?>
                            </div>   
                            <div class="card-footer">
                                <div class="row">
                                    <div class="col-md-4">
                                        <p><i class="fa fa-calendar"></i> Updated: <?php echo date('Y-m-d', $this->loadPost['b_date_created']); ?></p>
                                    </div>
                                    <div class="col-md-5">
                                        <p><i class="fa fa-list-ul"></i> <?php echo $this->loadPost['bc_name']; ?> Category</p> 
                                    </div>
                                    <div class="col-md-3">
                                        <p><i class="fa fa-eye"></i> <em> <?php echo "Views: " . $this->loadPost['b_views'];?></em>  </p>
                                    </div>
                                </div>
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
        var _id = "<?php echo $this->loadPost['b_ID']; ?>";
        var c_id = "<?php echo $this->loadPost['bc_ID']; ?>";
        post_view(_id, c_id);  

        $('.blog_current').css("color", "white");
    })

</script>
*/
