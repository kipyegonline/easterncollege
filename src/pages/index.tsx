import React from "react";

//import { useQuery } from "react-query";
import { Link } from "gatsby";
import Carousel from "nuka-carousel";
import { useSelector, useDispatch } from "react-redux";
import Announce from "@material-ui/icons/Announcement";
import Event from "@material-ui/icons/Event";
import ListEmoji from "@material-ui/icons/List";
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
  ArrowLeft,
} from "@material-ui/icons";
import { rootState, fetchData } from "../redux/reducer";
import Layout from "../components/layout";
import * as actions from "../redux/updatesReducer/actions";
import SEO from "../components/seo";
import Slider from "../components/carousel";
const cover = require("../images/bernard-hermant-AKHh5Vie5AU-unsplash.jpg");
const partner1 = require("../images/partner1.jpeg");
const partner2 = require("../images/partner2.jpeg");
const partner3 = require("../images/partner3.jpeg");
const partner4 = require("../images/partner4.png");
const logomedium = require("../images/logomedium.png");

const IndexPage: React.FC = (): JSX.Element => {
  const [postSpinner, setPspinner] = React.useState(false);
  const [errmsg, setErrmsg] = React.useState("");

  const dispatch = useDispatch();
  const postsurl = "https://jsonplaceholder.typicode.com/posts";
  const { news, events, notices } = useSelector((state: rootState) => ({
    news: state.updates.news,
    events: state.updates.events,
    notices: state.updates.notices,
  }));

  React.useEffect(() => {
    if (!!!news.length || !!!events.length || !!!notices.length) {
      fetchData(postsurl, dispatch, setPspinner, setErrmsg, actions.addNotices);
      fetchData(postsurl, dispatch, setPspinner, setErrmsg, actions.addEvents);
      fetchData(postsurl, dispatch, setPspinner, setErrmsg, actions.addNews);
      // fetchData(postsurl, dispatch, setPspinner, setErrmsg, actions.addTenders);
      //fetchData(postsurl, dispatch, setPspinner, setErrmsg, actions.addCareers);
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
        <Intro />

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
        <Grid container justify="center" spacing={4} alignItems="center">
          <Grid
            item
            lg={6}
            xs={12}
            md={6}
            style={{ background: "#fff", margin: "25px 0" }}
            className="m-3 p-2 "
          >
            <Typography
              align="center"
              variant="h6"
              className="border-b border-green-500"
            >
              Our Programmes
            </Typography>
            <img src={logomedium} className="p-2 mx-auto my-2" alt="Logo" />
            <Programmes />
          </Grid>
          <Grid
            item
            lg={6}
            xs={12}
            md={6}
            className="m-3 p-2  md:mx-10 lg:mx-20 "
            style={{
              background: "#fff",
              maxHeight: 300,

              maxWidth: 600,
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

        <ApplyNow />
        <Grid container justify="center" alignItems="flex-start">
          <Grid item xs={12} md={4} lg={4}>
            <Notice
              item="Notices"
              component={
                <RenderList
                  spinner={postSpinner}
                  data={notices}
                  errmessage={errmsg}
                  pathname="/notice?note="
                />
              }
              Icon={Announce}
            />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Notice
              item="Upcoming events"
              component={
                <RenderList
                  spinner={postSpinner}
                  data={events}
                  Icon={FormatList}
                  errmessage={errmsg}
                  pathname="/event?upcoming="
                />
              }
              Icon={Event}
            />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Notice
              item="News"
              component={
                <RenderList
                  spinner={postSpinner}
                  data={news}
                  errmessage={errmsg}
                  pathname="/post?news="
                />
              }
              Icon={Announce}
            />
          </Grid>
        </Grid>
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
type Notice = {
  item: string;
  component: React.ReactElement;
  Icon?: any;
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
  pathname: string;
};
export const RenderList: React.FC<Render> = ({
  data = [],
  spinner = false,
  errmessage = "",
  Icon = ListEmoji,
  pathname = "",
}) => {
  if (spinner) {
    return (
      <div className="text-center mx-auto">
        <CircularProgress color="primary" size="3rem" />
      </div>
    );
  }
  if (!!!data.length)
    return <Typography color="secondary">{errmessage}</Typography>;
  return (
    <List>
      {data.slice(0, 5).map((item, index) => (
        <TheList
          key={item.id}
          index={index}
          title={item.title.slice(0, 20)}
          date={item.body.slice(0, 50)}
          Icon={Icon}
          path={
            !!pathname
              ? `${pathname}${item.title.split(" ").join("-")}-${item.id}`
              : `${item.title.split(" ").join("-")}`
          }
        />
      ))}
    </List>
  );
};
type TheList = {
  title: string;
  date: string;
  index: number;
  Icon?: any;
  path: string;
  handleClick?: (title: string) => void;
};
const TheList = ({
  title,
  date,
  Icon,
  index,
  path,
  handleClick = f => f,
}: TheList) => (
  <ListItem divider dense button onClick={() => handleClick(title)}>
    <ListItemIcon>
      <Icon />
    </ListItemIcon>
    <ListItemText primary={`${index + 1}. ${title}`} secondary={date} />
    <Link to={path} className="text-blue-500">
      View
    </Link>
  </ListItem>
);

const WelcomeNote = () => (
  <Paper className=" mx-3 my-2 p-4 sm:mx-3 p-2 " style={{ background: "#fff" }}>
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
      className="p-2 my-2 rounded z-30 mx-3"
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
  const Next = () => (
    <IconButton
      disabled={!!(current >= 4)}
      onClick={() => (current >= 4 ? setCurrent(0) : setCurrent(current + 1))}
    >
      <ArrowRight fontSize="large" />
    </IconButton>
  );
  const Previous = () => (
    <IconButton
      disabled={!!(current <= 0)}
      onClick={() => (current <= 0 ? setCurrent(0) : setCurrent(current - 1))}
    >
      <ArrowLeft fontSize="large" />
    </IconButton>
  );
  return (
    <div style={{ height: 300, padding: 16 }}>
      <Carousel
        autoplay
        autoplayInterval={2000}
        autoGenerateStyleTag={true}
        enableKeyboardControls={true}
        wrapAround
        initialSlideHeight={300}
        easing="easeInOutBounce"
        slideIndex={current}
        afterSlide={slideIndex => setCurrent(slideIndex)}
        renderCenterLeftControls={Previous}
        renderCenterRightControls={Next}
        renderTopCenterControls={({ currentSlide }) => (
          <div>Slide: {currentSlide}</div>
        )}
      >
        <img
          src={partner1}
          className="object-contain"
          alt="partner 1"
          height={300}
        />
        <img
          src={partner2}
          className="object-fill"
          alt="partner 2"
          height={300}
        />
        <img
          src={partner3}
          className="object-fill"
          alt="partner 3"
          height={300}
        />
        <img
          src={partner4}
          className="object-fill"
          alt="partner 4"
          height={300}
        />
      </Carousel>
    </div>
  );
};

const Programmes = () => {
  return (
    <Card>
      <List>
        <ListItem dense button className="py-2 my-2">
          <ListItemIcon>
            <List />
          </ListItemIcon>
          <Link to="/schools">School of Languages</Link>
        </ListItem>
        <ListItem dense button className="py-2 my-2">
          <ListItemIcon>
            <List />
          </ListItemIcon>
          <Link to="/schools">School of Business and Economics</Link>
        </ListItem>
        <ListItem dense button className="py-2 my-2">
          <ListItemIcon>
            <List />
          </ListItemIcon>
          <Link to="/schools"> School of Hospitality and Tourism</Link>
        </ListItem>
        <ListItem dense button className="py-2 my-2">
          <ListItemIcon>
            <List />
          </ListItemIcon>
          <Link to="/schools"> School of Humanities and Social Sciences.</Link>
        </ListItem>
      </List>
    </Card>
  );
};
