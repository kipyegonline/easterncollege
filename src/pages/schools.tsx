import React from "react";
import { CircularProgress, Paper, Typography } from "@material-ui/core";
import Layout from "../components/layout";

function Schools(): React.ReactNode {
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => setLoaded(true), 3000);
  });
  return (
    <Layout siteTitle="Schools">
      <Paper className="mx-3 p-2 my-3 md:mx-10 p-3 lg:mx-20 p-4">
        {loaded ? (
          <div className="text-center p-4 my-3">
            <Typography>
              Schools are currently unavailable. Kindly check back soon.
            </Typography>
          </div>
        ) : (
          <div className="text-center p-4 my-3">
            <CircularProgress size="3rem" />
            <Typography>Setting up schools..</Typography>
          </div>
        )}
      </Paper>
    </Layout>
  );
}
export default Schools;
