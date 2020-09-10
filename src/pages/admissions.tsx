import React from "react";
import { Link } from "gatsby";
import {
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  Table,
  TableContainer,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  Chip,
  IconButton,
} from "@material-ui/core";
import Calendar from "@material-ui/icons/CalendarToday";
import ListIcon from "@material-ui/icons/List";
import Policy from "@material-ui/icons/Policy";
import Layout from "../components/layout";
import SEO from "../components/seo";

function Admissions(): React.ReactNode {
  const [current, setCurrent] = React.useState(0);
  const handleAd = (id: number) => {
    setCurrent(id);
  };
  return (
    <Layout siteTitle="Admissions">
      <SEO
        title="Admissions"
        lang="en"
        meta="Admission guidelines, policies and calendar"
      />
      <Box className="my-1 p-1">
        <Box
          role="tab"
          className="  lg:flex  flex-row justify-around items-center md:flex flex-row sm:flex flex-row justify-center leading-tight py-0   bg-blue-900 text-white"
        >
          <Typography
            onClick={() => handleAd(0)}
            className={` pt-2 px-2   mx-auto ${
              current === 0 ? "bg-yellow-500" : ""
            } cursor-pointer hover:border-b border-yellow-500 `}
          >
            <IconButton>
              <Policy htmlColor="#fff" fontSize="small" />
            </IconButton>
            Policy Principles
          </Typography>
          <Typography
            onClick={() => handleAd(1)}
            data-policy={1}
            className={`  pt-2 px-2  cursor-pointer mx-auto ${
              current === 1 ? "bg-yellow-500" : ""
            }`}
          >
            <IconButton>
              <ListIcon htmlColor="#fff" fontSize="small" />
            </IconButton>
            General Provisions
          </Typography>
          <Typography
            onClick={() => handleAd(2)}
            className={` pt-2 px-2  cursor-pointer mx-auto transition-all 1s ease-linear 1s ${
              current === 2 ? "bg-yellow-500" : ""
            }`}
          >
            <IconButton>
              <Calendar htmlColor="#fff" fontSize="small" />
            </IconButton>
            College Calendar
          </Typography>
        </Box>
        {!!!current ? (
          <PolicyPrinciples />
        ) : current < 2 ? (
          <GeneralProvisions />
        ) : (
          <CollegeCalendar />
        )}
      </Box>
    </Layout>
  );
}
export default Admissions;

const PolicyPrinciples = () => {
  return (
    <Paper className=" p-2 lg:mx-20 sm:mx-2 md:mx-10">
      <Typography
        variant="h6"
        className="border-b border-green-500"
        align="center"
      >
        <IconButton>
          <Policy />
        </IconButton>
        Policy Principles
      </Typography>
      <List>
        <ListItem selected dense className="my-2 py-2">
          {" "}
          1. Eastern College aims to admit applicants who are likely to succeed
          in the courses offered.
        </ListItem>
        <ListItem selected dense className="my-2 py-2">
          {" "}
          2. Admissions decisions will be fair, equitable, consistent,
          transparent and as objective as possible.
        </ListItem>
        <ListItem selected dense className="my-2 py-2">
          {" "}
          3. All applicants to Eastern College are to be assessed using clearly
          defined procedures based on these principles.
        </ListItem>
        <ListItem selected dense className="my-2 py-2">
          {" "}
          4. Eastern College is committed to social inclusion and to providing
          access for groups who are under-represented in higher education.
        </ListItem>
      </List>
    </Paper>
  );
};

const GeneralProvisions = () => {
  return (
    <Paper className="p-2  lg:mx-20 sm:mx-2 md:mx-10">
      <Typography
        variant="h6"
        className="border-b border-green-500"
        align="center"
      >
        <IconButton>
          <ListIcon />
        </IconButton>
        General Provisions
      </Typography>
      <Typography className="p-2 mx-2" align="justify">
        {" "}
        To be admitted to a course at Eastern College an applicant must:{" "}
      </Typography>
      <List>
        <ListItem dense className="my-1 p-1">
          1. Satisfy general and academic entry requirements as defined in the
          Admissions Guidelines.
        </ListItem>
        <ListItem dense className="my-1 p-1">
          2. Satisfy English language proficiency requirements applicable to the
          relevant course, and as outlined in the Admissions Guidelines.{" "}
        </ListItem>
        <ListItem dense className="my-1 p-1">
          {" "}
          3. Lodge an application form for admission or apply online via the
          Eastern College website by the closing date, with all specified
          supporting documentation;
        </ListItem>
        <ListItem dense className="my-1 p-1">
          4. Be selected for admission to the course.
        </ListItem>
        <ListItem dense className="my-1 p-1">
          {" "}
          5. Accept an offer of admission and submit the associated acceptance
          agreement.
        </ListItem>
        <ListItem>6. Pay the required tuition fees.</ListItem>
      </List>
    </Paper>
  );
};

const CollegeCalendar = () => {
  return (
    <Paper className="p-2  lg:mx-20 sm:mx-2 md:mx-10">
      <Typography
        variant="h6"
        className="border-b border-green-500"
        align="center"
      >
        <IconButton className="my-auto">
          <Calendar />
        </IconButton>
        College Calendar
      </Typography>
      <Typography className="p-2 text-center" variant="body1">
        EC has three four-month semesters:Intake Dates
      </Typography>
      <TableContainer>
        <Table className="px-4">
          <TableHead>
            <TableRow>
              <TableCell>Semester</TableCell>
              <TableCell> Session</TableCell>
              <TableCell> Intake</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>February</TableCell>
              <TableCell>February-May</TableCell>
              <TableCell>
                {" "}
                <Chip label="Open" size="small" color="primary" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>June</TableCell>
              <TableCell>June-September</TableCell>
              <TableCell>
                {" "}
                <Chip label="Closed" size="small" color="secondary" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>October</TableCell>
              <TableCell>October-January</TableCell>
              <TableCell>
                {" "}
                <Chip label="Open" size="small" color="primary" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
