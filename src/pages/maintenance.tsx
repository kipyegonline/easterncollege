import React from "react"
import Layout from "../components/layout"

function Maintenance(): React.ReactNode {
  return (
    <Layout siteTitle="post">
      <p>TPost</p>
    </Layout>
  )
}
export default Maintenance
/*

<html>
    <head>
        <?php require "views/includes/header.inc.php";?>
    </head>
    <body>
    <?php //require "views/includes/navbar.inc.php";?>
        <div class="container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-6">
                        <div class="card alert text-center mt-2">
                            <h5><?php echo $this->msg; ?></h5>
                            <p class="text-center"><i class="fa fa-frown-o" style="color:brown; font-size: 150px;"></i></p>
                            <p>We apologize for any inconvenience! Please comback later</p>
                            <?php //echo CustomFunctions::getIpAddress(); ?>
                        </div>
                    </div>
                    <div class="col-md-3"></div>
                </div>
            </div>
        </div>
    </body>
</html>
*/
