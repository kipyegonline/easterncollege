import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Carousel from "../components/carousel";
import {
  AppBar,
  Box,
  Typography,
  Paper,
  Divider,
  List,
  ListItem,
} from "@material-ui/core";
function AboutUs(): React.ReactNode {
  let Jsx: JSX.Element = <Background />;
  const [JsxEl, setJsx] = React.useState<JSX.Element>(Jsx);
  const [current, setCurrent] = React.useState(1);
  React.useEffect(() => {
    setTimeout(
      () => window.scrollTo({ top: 50, left: 0, behavior: "smooth" }),
      500
    );
  }, []);

  const handleClick = (id: number): void => {
    window.scrollTo({ top: 50, left: 0, behavior: "smooth" });
    setCurrent(id);
    switch (id) {
      case 1:
        Jsx = <Background />;
        setJsx(Jsx);
        break;
      case 2:
        Jsx = <Mission />;
        setJsx(Jsx);
        break;
      case 3:
        Jsx = <CoreValues />;
        setJsx(Jsx);
        break;
      case 4:
        Jsx = <Policy />;
        setJsx(Jsx);
        break;

      default:
        Jsx = <Background />;
        setJsx(Jsx);
        break;
    }
  };
  const activeStyle = { background: "yellow" };
  return (
    <Layout siteTitle="About us">
      <Box>
        <Carousel />
        <Box component="div">
          <ul
            className=" m-2 py-2 leading-none bg-blue-900 text-white
             flex flex-row justify-evenly items-center 
            
             "
          >
            <li
              className="border-r border-yellow-500 pr-2"
              onClick={() => handleClick(1)}
              style={{ color: current === 1 ? " yellow" : "" }}
            >
              <Link to="/about-us#background" activeStyle={activeStyle}>
                Background{" "}
              </Link>
            </li>
            <li
              className="border-r border-yellow-500 pr-2"
              style={{ color: current === 2 ? " yellow" : "" }}
              onClick={() => handleClick(2)}
            >
              <Link to="/about-us#vision-mission" activeStyle={activeStyle}>
                Mission {"&"} Vision{" "}
              </Link>
            </li>
            <li
              className="border-r border-yellow-500 pr-2"
              style={{ color: current === 3 ? " yellow" : "" }}
              onClick={() => handleClick(3)}
            >
              <Link to="/about-us#values" activeStyle={activeStyle}>
                Our Core values{" "}
              </Link>
            </li>
            <li
              className="border-r border-yellow-500 pr-2"
              style={{ color: current === 4 ? " yellow" : "" }}
              onClick={() => handleClick(4)}
            >
              <Link to="/about-us#policy-statement" activeStyle={activeStyle}>
                Quality Policy Statement{" "}
              </Link>
            </li>
          </ul>
        </Box>
        <Box>{JsxEl}</Box>
      </Box>
    </Layout>
  );
}
export default AboutUs;

const Background = () => {
  return (
    <Paper
      id="background"
      className="p-3  mx-20 my-5 sm:w-full mx-auto p-4 my-2 md:mx-auto p-4 my-2 transition-all duration-500 ease-linear 
      "
    >
      <Typography variant="h5" align="center">
        Background
      </Typography>
      <Typography variant="body2" align="justify" style={{ textIndent: 15 }}>
        <b>Eastern College</b> is a private institution of higher learning in
        Somalia. Opening its doors in 2018, the institution started out as an
        English Language Teaching centre in Benadir Region of Mogadishu city. In
        August 2019, Eastern College changed its location to Hodan district due
        to an upsurge in the students’ number and the overall growth of the
        institution., where the college currently sits in a state-of-the-art
        investment that offers learners the ambience to learn.
      </Typography>{" "}
      <Typography variant="body2" align="justify" style={{ textIndent: 15 }}>
        Starting out as an English Learning Centre, the college attracted a
        number of professionals and students likewise. The seamless interaction,
        has made the students get to ‘lace the right attitude-change and
        practical skills as key concepts of learning’.This belief has also seen
        the college grow from a mere English Language center to fully accredited
        institution of higher offering Undergraduate, Diploma and Certificate
        courses in four departments namely:{" "}
      </Typography>
      <List>
        <ListItem dense className="py-1 my-1">
          1. School of Business and Economics
        </ListItem>
        <ListItem dense className="py-1 my-1">
          2. School of Hospitality and Tourism
        </ListItem>
        <ListItem dense className="py-1 my-1">
          3.Schools of Languages{" "}
        </ListItem>
        <ListItem dense className="py-1 my-1">
          4. School of Humanities and Social Sciences.{" "}
        </ListItem>
      </List>{" "}
      <Typography
        variant="body2"
        align="justify"
        className="mb-3"
        style={{ textIndent: 15 }}
      >
        {" "}
        Our transformation has been informed by the need to maintain academic
        relevance and also standout as center of research which offers the
        community solutions through analysis of the strengths, weaknesses,
        opportunities and threats of our system.
      </Typography>
      <Divider />
    </Paper>
  );
};

const Mission = () => {
  return (
    <Paper className="p-3  mx-20 my-5 sm:w-full mx-auto p-4  my-2 md:mx-auto p-4 my-2">
      <Typography variant="h5" align="center">
        Mission and vision
      </Typography>
      <Typography
        variant="body2"
        className="mb-3"
        align="justify"
        style={{ textIndent: 15 }}
      >
        Eastern College’s mandate is to produce leaders and professionals in
        science and entrepreneurship through knowledge creation, dissemination
        and application of social-economic development. This we seek to do by
        being a premier College in education, training, research, innovation and
        community outreach for sustainable development.
      </Typography>
      <Divider />
    </Paper>
  );
};

const Policy = () => {
  return (
    <Paper className=" p-3 mx-20 my-5 sm:w-full mx-auto p-4 my-2 md:mx-auto p-4 my-2">
      <Typography variant="h5" align="center">
        Policy Statement
      </Typography>
      <Typography
        variant="body2"
        className="mb-3"
        align="justify"
        style={{ textIndent: 15 }}
      >
        The College is fully registered and recognized by the Ministry of Higher
        Education of Somalia Federal Government{" "}
        <i> (Under Registration No. WWHTS/XAG/0028/08/2019)</i>. Competent
        lecturers who are approved by the Ministry of Higher Education, with
        internationally acceptable certifications. <br />
        <q className="text-center">
          <b>
            We believe in Quality, We work on Quality {"& "}We deliver Quality.
          </b>{" "}
        </q>
      </Typography>
      <Divider />
    </Paper>
  );
};

const CoreValues = () => {
  return (
    <Paper className="lg:p-3  mx-20 my-5 sm:w-full mx-auto p4 my-2 md:mx-auto p-4 my-2">
      <Typography variant="h5" align="center">
        Core Values
      </Typography>
      <Typography
        variant="body1"
        className=""
        align="justify"
        style={{ textIndent: 15 }}
      >
        At Eastern College, we are committed to living out core values that
        influence our actions and practices. These values form the basis for
        leadership and management practices and guide the behavior of all our
        staff.{" "}
      </Typography>
      <Typography
        variant="body1"
        className=""
        align="justify"
        style={{ textIndent: 15 }}
      >
        {" "}
        The College’s core values include the following and embrace all critical
        areas of our operations:
      </Typography>
      <List>
        <ListItem dense className="text-justify my-1 py-2 ">
          <b>Integrity</b>: We aim to espouse transparency and integrity in our
          actions and conduct
        </ListItem>
        <ListItem dense className="text-justify my-1 py-2 ">
          <b>Innovativeness</b>: Embracing change and continuous improvement.
        </ListItem>
        <ListItem dense className="text-justify my-1 py-2 ">
          <b>Customer satisfaction</b> : We aim to deliver quality services to
          our customers and to honour our commitments.
        </ListItem>
        <ListItem dense className="text-justify my-1 py-2 ">
          <b>Competitiveness</b>: We are committed to global visibility and
          competitiveness in our academic pursuits.
        </ListItem>
        <ListItem dense className="text-justify my-1 py-2 ">
          <b>Equity</b>: Fairness and equal opportunities to all.
        </ListItem>

        <ListItem dense className="text-justify my-1 py-2 ">
          <b>Responsiveness</b>: We will exercise awareness to the needs of our
          stakeholders.
        </ListItem>
      </List>

      <Divider />
    </Paper>
  );
};
