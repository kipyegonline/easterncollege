import React from "react";
import { v4 } from "uuid";
//import { useQuery } from "react-query";
import { Link } from "gatsby";
import Carousel from "nuka-carousel";
import SlickSlider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
import Announce from "@material-ui/icons/Announcement";
import Event from "@material-ui/icons/Event";
import ListEmoji from "@material-ui/icons/List";
import ArrowNext from "@material-ui/icons/NavigateNext";
import FormatList from "@material-ui/icons/FormatListBulleted";
import {
  Typography,
  AppBar,
  Grid,
  Paper,
  Divider,
  List,
  IconButton,
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Card,
  CardHeader,
  CardContent,
  CircularProgress,
} from "@material-ui/core";
import {
  SchoolRounded as SchoolOutlined,
  LibraryBooks,
  People,
  Public,
  FindInPage,
  ArrowRight,
  School,
  ArrowLeft,
} from "@material-ui/icons";
import { rootState, fetchData } from "../redux/reducer";
import Layout from "../components/layout";
import * as actions from "../redux/updatesReducer/actions";
import SEO from "../components/seo";
import { courses } from "./schools";
import Slider, { settings } from "../components/carousel";
import { Pagination } from "@material-ui/lab";

const cover = require("../images/bernard-hermant-AKHh5Vie5AU-unsplash.jpg");
const partner1 = require("../images/partner1.jpeg");
const partner2 = require("../images/partner2.jpeg");
const partner3 = require("../images/partner3.jpeg");
const partner4 = require("../images/partner4.png");
const logomedium = require("../images/logomedium.png");

type TheList = {
  title: string;
  id: number;
  date: string;
  counter: number;
  Icon?: any;
  path: string;
  handleClick?: (title: string) => void;
};

type Notice = {
  item: string;
  component: React.ReactElement;
  Icon?: any;
};

const IndexPage: React.FC = (): JSX.Element => {
  const [postSpinner, setPspinner] = React.useState(false);
  const [errmsg, setErrmsg] = React.useState("");

  const dispatch = useDispatch();
  const noticesurl = "./server/index.php?fetchnotices=true";
  const newsurl = "./server/index.php?fetchnews=true";
  const eventsurl = "./server/index.php?fetchevents=true";
  const { news, events, notices } = useSelector((state: rootState) => ({
    news: state.updates.news,
    events: state.updates.events,
    notices: state.updates.notices,
  }));

  React.useEffect(() => {
    if (!!!news.length || !!!events.length || !!!notices.length) {
      fetchData(
        noticesurl,
        dispatch,
        setPspinner,
        setErrmsg,
        actions.addNotices
      );
      fetchData(eventsurl, dispatch, setPspinner, setErrmsg, actions.addEvents);
      fetchData(newsurl, dispatch, setPspinner, setErrmsg, actions.addNews);
      // fetchData(postsurl, dispatch, setPspinner, setErrmsg, actions.addTenders);
      //fetchData(postsurl, dispatch, setPspinner, setErrmsg, actions.addCareers);
      dispatch(actions.addCourses(courses));
    }
  }, []);

  return (
    <Layout siteTitle="Home">
      <SEO
        lang="en"
        meta="Home"
        title="Home"
        description="Center of Excellence"
      />
      <Slider />
      <Typography
        variant="h5"
        className="text-white bg-blue-900 py-4 leading-tight  mb-2  text-center md:py-2 sm:py-1"
      >
        Welcome to Eastern College, Somalia
      </Typography>
      <div style={{ backgroundImage: `url(${cover})` }} className="bg-fixed">
        <Divider />
        <WelcomeNote />

        <Grid container justify="center" alignItems="flex-start">
          <Grid item lg={3} md={3} xs={12}>
            <CardOne />
          </Grid>
          <Grid item lg={3} md={3} xs={12}>
            <CardTwo />
          </Grid>
          <Grid item lg={3} md={3} xs={12}>
            <CardThree />
          </Grid>
          <Grid item lg={3} md={3} xs={12}>
            <CardFour />
          </Grid>
        </Grid>
        {/*collaborations */}
        <Grid
          container
          justify="center"
          className="mx-20 mb-5"
          spacing={4}
          alignItems="center"
        >
          <Grid
            item
            lg={6}
            xs={12}
            md={6}
            style={{
              background: "#fff",
              margin: "16px 0px",
            }}
            className=" m-4  p-2 "
          >
            <Typography
              align="center"
              variant="h6"
              className="border-b border-green-500"
            >
              Our Programmes
            </Typography>
            <img src={logomedium} className="p-2 mx-auto my-2" alt="Logo" />
            <Programmes courses={courses} />
          </Grid>
          <Grid
            item
            lg={6}
            xs={12}
            md={6}
            className="my-3 mx-20 p-2 mb-4 "
            style={{
              background: "#fff",
              maxHeight: 310,

              maxWidth: (function () {
                return document.documentElement.clientWidth <= 480 ? 360 : 600;
              })(),
            }}
          >
            <Typography
              align="center"
              variant="h6"
              className="border-b border-green-500"
            >
              Our Collaborations
            </Typography>
            <Collaborations />
          </Grid>
        </Grid>
        <Paper>
          <ApplyNow />
        </Paper>
        <Paper>
          <Grid container justify="center" alignItems="flex-start">
            <Grid item xs={12} md={4} lg={4}>
              {/* This is a render prop component */}
              {!!notices.length && (
                <Notice
                  item="Notices"
                  component={
                    <RenderList
                      spinner={postSpinner}
                      data={notices}
                      errmessage={errmsg}
                      Lista={(item, indexa) => (
                        <TheList
                          key={indexa}
                          counter={indexa}
                          {...item}
                          Icon={ListEmoji}
                          path={`/notice?post-${item.id}-${item.title
                            .split(" ")
                            .join("-")}`}
                        />
                      )}
                    />
                  }
                  Icon={Announce}
                />
              )}
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              {!!events.length && (
                <Notice
                  item="Upcoming events"
                  component={
                    <RenderList
                      spinner={postSpinner}
                      data={events}
                      errmessage={errmsg}
                      Lista={(item, indexb) => (
                        <TheList
                          key={indexb}
                          counter={indexb}
                          {...item}
                          Icon={ListEmoji}
                          path={`/event?${item.title
                            .split(" ")
                            .join("-")}&post=${item.id}`}
                        />
                      )}
                    />
                  }
                  Icon={Event}
                />
              )}
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              {!!news.length && (
                <Notice
                  item="News"
                  component={
                    <RenderList
                      spinner={postSpinner}
                      errmessage={errmsg}
                      data={news}
                      Lista={(item, indexc) => (
                        <TheList
                          key={indexc}
                          counter={indexc}
                          {...item}
                          Icon={ListEmoji}
                          path={`/post?${item.title
                            .split(" ")
                            .join("-")}&post=${item.id}`}
                        />
                      )}
                    />
                  }
                  Icon={Announce}
                />
              )}
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Layout>
  );
};

export default IndexPage;

const Intro: React.FC = () => {
  return (
    <Box>
      <WelcomeNote />
    </Box>
  );
};

const Notice = ({ item, component, Icon }: Notice) => {
  return (
    <Card className="py-1 mx-2 " raised>
      <CardHeader
        className="text-center rounded text-white  bg-blue-700"
        title={
          <Typography>
            <Icon htmlColor="white" className="mr-2" />

            {item}
          </Typography>
        }
      />
      <CardContent>{component}</CardContent>
    </Card>
  );
};

type Render = {
  data: any[];
  spinner: boolean;
  errmessage: string;
  Icon?: any;
  Lista: (item: TheList, index: number) => JSX.Element;
};

export const RenderList: React.FC<Render> = ({
  data = [],
  errmessage,
  spinner,
  Lista = <p>List component</p>,
}) => {
  const [current, setCurrent] = React.useState(0);
  const perpage = data.length > 10 ? 10 : data.length;
  const pages = Math.ceil(data.length / perpage);
  const start = current * perpage;
  const end = current * perpage + perpage;
  const handleChange = (e: React.ChangeEvent<unknown>, p: number) =>
    setCurrent(p - 1);
  //pending state
  if (spinner) {
    return (
      <div className="text-center mx-auto">
        <CircularProgress color="primary" size="3rem" />
      </div>
    );
  }
  //rejected state
  if (!!!data.length)
    return <Typography color="secondary">{errmessage}</Typography>;
  //resolved state
  return (
    <div>
      <List>
        {data
          .slice(start, end)
          .map((item, index) => Lista(item, start + index))}
      </List>
      {data.length > 10 ? (
        <Pagination
          count={pages}
          variant="outlined"
          shape="rounded"
          page={current + 1}
          onChange={handleChange}
          color="secondary"
          defaultPage={current}
        />
      ) : null}
    </div>
  );
};

const TheList = ({
  title,
  date,
  Icon = Announce,
  counter,
  path,
  handleClick = f => f,
}: TheList) => (
  <ListItem divider dense button onClick={() => handleClick(title)}>
    <ListItemIcon>
      <Icon />
    </ListItemIcon>
    <ListItemText
      primary={`${counter + 1}. ${title.slice(0, 40)}...`}
      secondary={date}
    />
    <Link to={path || "/404"} className="text-blue-500">
      View
    </Link>
  </ListItem>
);

const WelcomeNote = () => (
  <Paper className=" mx-0 my-2 p-4 sm:mx-3 p-2 " style={{ background: "#fff" }}>
    <Typography variant="body1" className="mb-2 p-1 rounded">
      Eastern College is a premier institution of learning, growth and
      empowerment based in Mogadishu,Somalia.
    </Typography>

    <Typography variant="body1" className="mb-2 p-1" style={{ textIndent: 16 }}>
      {" "}
      With Somalia opening up to the rest of the world, Eastern College was
      founded in 2018 to help improve the English language skills capacity for
      the student and working class population in Mogadishu, Somalia.
      Thereafter, the college has grown to gain full accreditation by the
      Ministry of Education, Culture {"&"} Higher Education as an institution of
      higher learning and offers a variety of professional courses which range
      from Certificate, Diploma and Undergraduate degree.
    </Typography>
  </Paper>
);

const ApplyNow = () => {
  return (
    <AppBar
      position="relative"
      className="py-2 px-0 my-4 w-6/7 z-30 mx-0 sm:mx-auto sm:my-2 "
      style={{ background: "#fff", color: "black" }}
    >
      <Typography variant="h6" className="text-center capitalize">
        Education You Want should meet the Attention it Deserves.{" "}
      </Typography>
      <Typography variant="body1" className="text-center my-0">
        Apply for full-time and evening courses for February,June and October{" "}
        {new Date().getFullYear()} intakes. We believe in quality,We work on
        quality & we deliver on quality.
      </Typography>
      <Button
        startIcon={<School />}
        style={{ maxWidth: 200, margin: ".5rem auto" }}
        variant="contained"
        color="primary"
      >
        <Link to="apply-online">Apply ONLINE</Link>
      </Button>
    </AppBar>
  );
};

const CardOne = () => (
  <Card className="p-3 mx-2">
    <div className="text-center">
      <SchoolOutlined color="primary" />
    </div>
    <Typography
      variant="h6"
      align="center"
      className="border-b  border-green-500"
    >
      Quality Education
    </Typography>
    <Typography className="mt-3 p-2" variant="body2" style={{ textIndent: 16 }}>
      Eastern college is committed to quality education through teaching,
      training offered through a variety of professional courses that follows a
      balanced approach to topics, language development and skills work.
    </Typography>
    <Divider orientation="vertical" />
  </Card>
);
const CardTwo = () => (
  <Card className="p-3 mx-2">
    <div className="text-center">
      <LibraryBooks color="primary" />
    </div>
    <Typography variant="h6" className="border-b font-bold  border-green-500">
      Research & Development
    </Typography>
    <Typography className="mt-3 p-2" variant="body2" style={{ textIndent: 16 }}>
      we believe in giving our students content that is a result of extensive
      research that has been tested locally and globally. It follows a balanced
      approach to topics, language development and skills work.
    </Typography>
  </Card>
);

const CardThree = () => (
  <Card className="p-3 mx-2">
    <div className="text-center ">
      <Public color="primary" />
    </div>
    <Typography
      variant="h6"
      align="center"
      className="border-b  border-green-500"
    >
      Partnerships{" "}
    </Typography>
    <Typography className="mt-3 p-2" variant="body2" style={{ textIndent: 16 }}>
      Eastern college offers learning experience to its students that meets both
      the local and international standards. This we do by relevant and quality
      partnership with both local and international institutions of learning.
    </Typography>
  </Card>
);
const CardFour = () => (
  <Card className="p-3 mx-2">
    <div className="text-center">
      <People color="primary" />
    </div>
    <Typography
      variant="h6"
      align="center"
      className="border-b  border-green-500"
    >
      Community Outreach
    </Typography>
    <Typography className="mt-3 p-2" variant="body2" style={{ textIndent: 16 }}>
      Eastern College endeavors to help the community around the college with
      more extensive network of collaboration in education and learning.This in
      turn will produce leaders and professionals in entrepreneurship.
    </Typography>
  </Card>
);
const Collaborations = () => {
  const [current, setCurrent] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    setHeight(300);
  }, []);
  return (
    <div
      style={{
        height: 600,
        padding: 10,
        margin: "0 auto",
      }}
    >
      <SlickSlider {...settings}>
        <img src={partner1} alt="partner 2" />
        <img src={partner2} alt="partner 2" />
        <img src={partner3} alt="partner 3" />
        <img src={partner4} alt="partner 4" />
        <Typography>Partners</Typography>
      </SlickSlider>
    </div>
  );
};
type Course = { course: string; id: number; level: string; des: string };
type Courses = { school: string; des: string; courses: Course[] };

const Programmes: React.FC<{ courses: Courses[] }> = ({ courses = [] }) => {
  return (
    <Card>
      <List>
        {courses.map((course, index) => (
          <ListItem key={index} dense button className="py-2 my-2">
            <ListItemIcon>
              <ArrowNext />
            </ListItemIcon>
            <Link to="/schools">{course.school}</Link>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

function metricsCheck() {
  const aDay = 6e4 * 60 * 24;

  let lastVisit: string | any =
    globalThis.window && (localStorage.getItem("lastVisit") as any); //track time
  let uuid: string | any =
    globalThis.window && (localStorage.getItem("uservisit") as any); // track user

  if (lastVisit && uuid) {
    if (Date.now() - Number(lastVisit) > aDay) recordMetrics(0, uuid);
  } else {
    lastVisit = Date.now();
    uuid = v4();
    //set time and user ID for browser
    globalThis.window && localStorage.setItem("lastVisit", lastVisit);
    globalThis.window && localStorage.setItem("uservisit", uuid);
    recordMetrics(1, uuid);
  }
}

function recordMetrics(id = 0, uuid: string) {
  fetch(`./server/index.php?recordmetrics=true&lastvisit=${id}&uuid=${uuid}`);
}
if (globalThis.window) {
  window.addEventListener("load", function () {
    setTimeout(metricsCheck, 5000);
  });
}
