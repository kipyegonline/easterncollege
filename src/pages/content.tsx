import React from "react";
import { Paper, Typography } from "@material-ui/core";
import Layout from "../components/layout";
import SEO from "../components/seo";

function Content(): React.ReactNode {
  return (
    <Layout siteTitle="Content">
      <SEO title="Content" description="Student tales" lang="en" meta="" />

      <StudentTales />
    </Layout>
  );
}
export default Content;

const StudentTales = () => {
  return (
    <Paper
      className=" rounded  sm:mx-auto my-2 p-2 md:mx-10 my-2 p-3 lg:mx-20 my-3 p-4   "
      id="student-tales"
      style={{ background: "#ddd" }}
    >
      <Typography
        variant="h6"
        className="text-center font-bold border-b border-green-500"
      >
        Abdihakim Hussein
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        style={{ textIndent: 16 }}
        className="p-2 my-1"
      >
        One day, my father called me to his office and told me he wanted me to
        learn English, mentioning why it was important for me, especially in the
        coming years in Somalia.Filled with fear of going against the wishes of
        my father and curiosity, we went to Mogadishu in search of colleges that
        offer English courses.
      </Typography>{" "}
      <Typography
        variant="body1"
        align="justify"
        style={{ textIndent: 16 }}
        className="p-2 my-1"
      >
        We visited a number but none impressed us that much. When we were almost
        giving up, a friend of mine referred me to a newly opened English
        College, where I decided to look at it and find more information about
        it. This was in 2018 and the college, EASTERN COLLEGE.
      </Typography>{" "}
      <Typography
        variant="body1"
        align="justify"
        style={{ textIndent: 16 }}
        className="p-2 my-1"
      >
        The first day was a nervous one full of anxiety since it was my first
        time in a class that is taught by a foreign teacher, specifically a
        teacher of English. Initially I used to attend classes where Somali
        teachers translated things for us but in here no one was going to do
        that. It looked like I was in for some tough ride, considering I had a
        very negligible knowledge of English but no speaking capability at all.
      </Typography>
      <Typography
        variant="body1"
        align="justify"
        style={{ textIndent: 16 }}
        className="p-2 my-1"
      >
        Today as one of inaugural graduates, I can proudly say I have improved
        my speech and knowledge of English language largely like I always wanted
        to do. This is a dream come true for me and I will forever be grateful
        to my teachers and the management of the College, especially Mr Nur who
        always encouraged us to continue being committed and consistent since
        day one.
      </Typography>{" "}
      <Typography
        variant="body1"
        align="justify"
        style={{ textIndent: 16 }}
        className="p-2 my-1"
      >
        To me this is a statement of ability made real by EASTERN COLLEGE.{" "}
        <br />
        MAHADSANID
      </Typography>
    </Paper>
  );
};

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
                    <h5 class="alert alert-primary text-center"> <?php echo ucfirst($this->loadPost['cont_title']); ?></h5>                
                    <div class=" ml-3 mr-2 " >
                        <div class="alert"> 
                                                      
                            <div class="card-body">
                                <p><?php echo $this->loadPost['content']; ?></p>
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
