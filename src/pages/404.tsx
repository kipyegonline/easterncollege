import React from "react";
import { Link } from "gatsby";
import { Home, Error } from "@material-ui/icons";
import Paper from "@material-ui/core/Paper";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Typography } from "@material-ui/core";

const NotFoundPage: React.FC = (): JSX.Element => (
  <Layout siteTitle="404 error">
    <SEO title="404: Not found" description="Error page" lang="en" meta="" />
    <Paper className="lg:mx-20 my-4 p-4 md:mx-10 md:p-3 sm:mx-auto p-2">
      <Typography className="text-center p-2" variant="h3">
        <Error fontSize="large" color="secondary" /> Page Not Found
      </Typography>
      <Typography className="text-center p-2">
        The resource doesn't exist on this website..... <br /> Let's get you
        back home....{" "}
        <Link to={"/"}>
          <Home color="secondary" />
        </Link>{" "}
        <Link to="/" className="text-blue-500 text-center">
          Home page
        </Link>
      </Typography>
    </Paper>
  </Layout>
);

export default NotFoundPage;
