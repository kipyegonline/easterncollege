import {
  Backdrop,
  Typography,
  Card,
  CircularProgress,
} from "@material-ui/core";
import React from "react";
import Layout from "../components/layout";

const logo = require("../../public/images/logomm.png");
function Maintenance(): React.ReactNode {
  return (
    <Layout siteTitle="Site under maintenance">
      <Card
        className="z-100 w-full  fixed top-0 left-0 bg-gray-800 "
        style={{ height: "100%", zIndex: 2000, background: "gray" }}
      >
        <div className="text-center my-40">
          <img
            src={logo}
            className="my-2 mx-auto border border-gray-300 p-2"
            alt="Eastern college"
          />
          <CircularProgress size={100} />
          <Typography align="center" variant="h5" className="py-auto my-auto">
            The website is under routine maintenance...Try again later today...
          </Typography>
          <Typography variant="body1" className="font-bold block">
            {new Date().toDateString()}
          </Typography>
          <small>inconvenience regretted</small>
        </div>
      </Card>
    </Layout>
  );
}
export default Maintenance;
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
