import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "@reach/router";
import Layout from "../components/layout";
import { rootState } from "../redux/reducer";
import { RenderList } from "./index";
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
} from "@material-ui/core";
import { addNotice } from "../redux/updatesReducer/actions";
function Notice(): React.ReactNode {
  const path = useLocation();
  const dispatch = useDispatch();
  const { notices, notice } = useSelector((state: rootState) => ({
    notices: state.updates.notices,
    notice: state.updates.notice,
  }));

  React.useEffect(() => {
    if (path.search) {
      const keyword = path.search.split("-");
      const id = Number(keyword[keyword.length - 1]);
      if (!!id) {
        console.log("Drew", id);
        dispatch(addNotice(id));
      } else {
        console.log("Drew", id);
      }
    } else {
      console.log("Load data");
    }
  }, []);
  console.log(notice);
  return (
    <Layout siteTitle="post">
      <Grid container justify="center" alignItems="flex-start">
        <Grid item md={8} xs={12} lg={8}>
          <Card>
            <CardHeader
              title={
                <Typography align="center" variant="h6" className="font-bold">
                  {notice.title || ""}
                </Typography>
              }
            />
            <CardContent>{notice.body || ""}</CardContent>
          </Card>
        </Grid>
        <Grid item md={4} xs={12} lg={4} className="ml-2 ">
          <Typography
            align="center"
            className="font-bold bg-yellow-500 py-2 text-white "
          >
            Recent Notices
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
}
export default Notice;

/*
< !DOCTYPE html > 
<html class="no-js">
    <head>
       <?php require getenv("DOCUMENT_ROOT") . "/views/includes/header.inc.php";?>       
       <title><?php echo $this->title; ?></title>
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
                    <h5 class="alert alert-primary text-center"> <?php echo ucfirst($this->loadPost['n_title']); ?></h5>                
                    <div class=" ml-3 mr-2 " >
                        <div class="alert"> 
                            <?php
                               $file = $this->loadPost['n_file'];
                               $path = getenv('DOCUMENT_ROOT') . '/views/assets/uploads/' . $file;
                               if (file_exists($path) && !empty($file)) { 
                            ?>
                            <a href="/views/assets/uploads/<?php echo $file; ?>" download><button class="btn btn-success"><i class="fa download"></i> Download file</button></a>
                            <?php   }   ?>                            
                            <div class="card-body">
                                <p><?php echo $this->loadPost['n_content']; ?></p>
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
