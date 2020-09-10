import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  Card,
  Grid,
  CardHeader,
  CardMedia,
  Paper,
  ListItem,
  List,
  CardContent,
  IconButton,
  Divider,
} from "@material-ui/core";
import Arrow from "@material-ui/icons/NavigateNext";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { EasternContacts } from "./contact-us";
import { Socials } from "../components/ui/navbar";

const image: string = require("../../public/images/ec_random_1596306732.jpeg");
const principal: string = require("../../public/images/ec_random_1597490926.jpeg");

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function CampusLife(): React.ReactNode {
  return (
    <Layout siteTitle="Campus life">
      <SEO title="Campus life" meta="Eastern College" />
      <Typography
        variant="h4"
        align="center"
        className="text-blue-800 font-bold mb-2 ml-2 pl-3 py-1 "
      >
        Campus Life at Eastern College
      </Typography>
      <img
        src={image}
        style={{ height: 400, width: "100%" }}
        alt="Eastern students"
      />
      <Box>
        <Grid container alignItems="flex-start" justify="space-evenly">
          <Grid item xs={12} md={3} lg={3}>
            <Card>
              <CardMedia
                component="img"
                className="pl-2 py-1 my-1"
                image={principal}
                alt="Principal"
              />
              <CardHeader
                subheader={
                  <Typography variant="body1" align="center">
                    Principal
                  </Typography>
                }
                title={
                  <Typography variant="body1" align="center">
                    Dr. Nur Ali Diriye
                  </Typography>
                }
                className="py-1 my-1"
              />
              <Divider />
              <CardContent>
                <EasternContacts />
                <Socials classes="flex flex-row justify-around" />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            <CampusTabs />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
export default CampusLife;

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function CampusTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (
    event: React.ChangeEvent<HTMLElement>,
    newValue: number
  ) => {
    console.log(newValue, event.target as HTMLElement);
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar
        style={{ background: "rgba(42, 67,101,1)", color: "#fff" }}
        position="static"
        color="transparent"
        className="bg-blue-900  flex flex-col mb-3"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Eastern college campus life"
          className="flex flex-col"
        >
          <Tab label="Communication desk" {...a11yProps(0)} />
          <Tab label="Campus Facilities" {...a11yProps(1)} />
          <Tab label="Student Services" {...a11yProps(2)} />
          <Tab label="Community Services" {...a11yProps(3)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <CommunicationDesk />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CampusFacilities />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <StudentServices />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <CommunityServices />
      </TabPanel>
    </div>
  );
}

const CommunicationDesk = () => {
  return (
    <Paper id="communication-desk" className="mx-auto p-4 ">
      <Typography
        align="center"
        variant="h6"
        className="text-center font-bold border-b mb-3  border-green-500"
      >
        {" "}
        Message from Dr. Nur Ali Diriye
      </Typography>

      <Typography
        align="justify"
        style={{ textIndent: 16 }}
        className="p-1 mb-2"
        variant="body1"
      >
        {" "}
        I feel humbled to welcome everyone to Eastern College, Mogadishu
        Somalia.
      </Typography>

      <Typography
        align="justify"
        style={{ textIndent: 16 }}
        className="p-1 mb-2"
        variant="body1"
      >
        As a team, we remain committed to achieving become a centre of academic
        excellence in the region. This will be achieved through our commitment
        to the college's stated vision and mission of serving the students and
        society around us through research, education, scholarship, training
        outreach and consultancy. Ours is to get to this level through a
        consultative approach with all the stakeholders involved.
      </Typography>
      <Typography
        align="justify"
        style={{ textIndent: 16 }}
        className="p-1 mb-2"
        variant="body1"
      >
        In our commitment to academic excellence, we commit to to being
        accountable in all that we do as a college to everyone. The college is
        run by a Board of Directors, who are responsible for making managerial
        decisions of the college. The college director sits in the board as
        secretary and represents the represents the college as well.
        <br />
        Additionally, the director is;
      </Typography>
      <List className="text-blue-800">
        <ListItem dense selected className="my-1 py-1">
          <IconButton>
            <Arrow />
          </IconButton>
          The executive academic and administrative head of the college and, as
          such, is responsible to the Board of Directors for maintaining and
          promoting the efficiency and good order of the college. In this
          respect, the director may take intervention measures pending Board of
          Directors' decision.
        </ListItem>
        <ListItem dense selected className="my-1 py-1">
          <IconButton>
            <Arrow />
          </IconButton>
          A member of every Committee established by the Board of Director
        </ListItem>
        <ListItem dense selected className="my-1 py-1">
          <IconButton>
            <Arrow />
          </IconButton>
          The overall academic and administrative head of the college and is the
          accounting officer of the college.
        </ListItem>
        <ListItem dense selected className="my-1 py-1">
          <IconButton>
            <Arrow />
          </IconButton>
          Responsible for policy matters, planning, and coordination, public
          relations, fund raising and general development of the college.
        </ListItem>
        <ListItem dense selected className="my-1 py-1">
          <IconButton>
            <Arrow />
          </IconButton>
          Any other duties and responsibilities assigned by the Board of
          Directors from time to time
        </ListItem>
      </List>

      <Typography
        style={{ textIndent: 16 }}
        align="justify"
        className="p-1 mb-2"
        variant="body1"
      >
        Finally, the college is A CORRUPTION FREE ZONE which emphasizes on
        QUALITY in all the services we offer in and out of our learning
        premises.
      </Typography>
    </Paper>
  );
};
const CampusFacilities = () => {
  return (
    <Paper id="campus-facilities" className="mx-auto p-4 ">
      <Typography
        align="justify"
        style={{ textIndent: 16 }}
        className="p-1 mb-2"
        variant="body1"
      >
        When we started, we set out to be a unique institution of learning which
        offers the best learning experience to our students and environment that
        facilitates the learning sessions.
      </Typography>
      <Typography
        align="justify"
        style={{ textIndent: 16 }}
        className="p-1 mb-2"
        variant="body1"
      >
        Staying true to our promise, we have a tranquil environment which is set
        some distance away from the town centre. This offers the students a
        relaxed environment to study and practice what they have learnt. Our
        classrooms are fitted with ultra modern learning facilities which
        includes both audio and audio visual aids.
      </Typography>
      <Typography
        align="justify"
        style={{ textIndent: 16 }}
        className="p-1 mb-2"
        variant="body1"
      >
        The college's library is currently fitted with course books enough to
        facilitate the entire student population in putting to practice what is
        learnt in class. The library, just like the classes, is also fitted
        woith both audio and ausio visual learning aids. The course books and
        reference books in our library are also up to date and therefore the
        students are guaranteed to learn using some of the latest resource.
      </Typography>
    </Paper>
  );
};
const StudentServices = () => {
  return (
    <Paper id="student-services" className="mx-auto p-4 mb-8">
      <Typography
        align="center"
        variant="h6"
        className="border-b border-green-500 pt-2 "
      >
        {" "}
        Student Work Progress
      </Typography>

      <Typography
        align="justify"
        style={{ textIndent: 16 }}
        className="p-1 mb-2"
        variant="body1"
      >
        The mission of the college is to enable the students gain academic and
        real world experience while at college. It is for this reason that the
        student's are constantly exposed to live webinars and meet ups to
        improve their capacity.
      </Typography>
      <Typography
        align="justify"
        style={{ textIndent: 16 }}
        className="p-1 mb-2"
        variant="body1"
      >
        {" "}
        Additionally, the college is in partnership with a number of
        institutions locally and globally to ensure that the students also get
        to be trained on other technical and professional skills.{" "}
      </Typography>

      <Typography
        align="justify"
        style={{ textIndent: 16 }}
        className="p-1 mb-2"
        variant="body1"
      >
        Each student is therefore advised to check our online{" "}
        <b>notice board </b>
        to ensure they do not miss any opportunity.
      </Typography>
      <Typography
        align="center"
        variant="h6"
        className="border-b border-green-500 pt-2 mb-2"
      >
        Security Services{" "}
      </Typography>
      <Typography
        align="justify"
        style={{ textIndent: 16 }}
        className="p-1"
        variant="body1"
      >
        The school provides a secure environment for learning, research and
        other college programmes.
      </Typography>
    </Paper>
  );
};
const CommunityServices = () => {
  return (
    <Paper id="community-outreach" className="mx-auto p-4 mb-8">
      <List>
        <ListItem divider className="text-justify" selected>
          {" "}
          <b className="mr-3">Correspondence</b> Eastern College will endeavor
          to help the community around the college with more extensive network
          of collaboration in education and learning.Our partnership will be one
          of being there for each other.
        </ListItem>
        <ListItem divider className="text-justify" selected>
          {" "}
          <b className="mr-3">Partner Voice</b> Eastern College will help
          community based activities that address a genuine need, especially the
          less fortunate and in times of uncertainty.
        </ListItem>
        <ListItem divider className="text-justify" selected>
          {" "}
          <b className="mr-3">Coordinated effort:</b> Eastern College will make
          quality network based help the growth of the community around the
          college.
        </ListItem>
        <ListItem divider className="text-justify" selected>
          {" "}
          <b className="mr-3">Responsibility </b> The objectives of the
          college's administration ventures will be unmistakably characterized
          and each accomplice's jobs and obligations explained.
        </ListItem>
      </List>
    </Paper>
  );
};
