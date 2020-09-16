import React from "react";
import { Paper, Typography } from "@material-ui/core";
import Layout from "../components/layout";
import SEO from "../components/seo";

function Research() {
  return (
    <Layout siteTitle="Research and development">
      <SEO
        title="Contact Us"
        meta="Eastern College"
        description="research and development"
        lang="en"
      />
      <RD />
    </Layout>
  );
}
export default Research;

const RD = () => {
  return (
    <Paper
      style={{ background: "#ddd" }}
      className=" rounded sm:mx-auto my-2 p-2 md:mx-10 p-2 my-2 lg:mx-20 p-4 my-2 "
    >
      <Typography
        variant="h6"
        align="center"
        className=" border-b border-green-500"
      >
        {" "}
        Speakout Curriculum
      </Typography>
      <Typography
        style={{ textIndent: 16 }}
        align="justify"
        className="sm:mx-auto p-2  md:p-2 my-1 lg:p-3 my-2 "
      >
        <b>SPEAKOUT</b> is the English language course that includes video
        content from the BBC to engage students and make teaching easier. It
        follows a balanced approach to topics, language development and skills
        work. Speaking activities are prominent, but not at the expense of the
        other core skills of reading, writing and listening, which are developed
        systematically throughout.
      </Typography>
      <Typography
        align="justify"
        style={{ textIndent: 16 }}
        className="sm:mx-auto p-2  md:p-2 my-1 lg:p-3 my-2 "
      >
        At EASTERN COLLEGE, we believe in giving our students content that is a
        result of extensive research and tested globally. It is for this reason
        that we use the SPEAKOUT Curriculum in teaching our English Diploma
        courses.
      </Typography>
    </Paper>
  );
};
