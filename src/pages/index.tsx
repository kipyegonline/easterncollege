import React from "react";
import axios from "axios";
import { Link } from "gatsby";
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
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Card,
  CardHeader,
  CardContent,
  CircularProgress,
} from "@material-ui/core";
import { rootState } from "../redux/reducer";
import Layout from "../components/layout";
import * as actions from "../redux/updatesReducer/actions";
import SEO from "../components/seo";
import Carousel from "../components/carousel";

const IndexPage: React.FC = (): JSX.Element => {
  const [postSpinner, setPspinner] = React.useState(false);
  const [errmsg, setErrmsg] = React.useState("");
  const { news, events, notices } = useSelector((state: rootState) => ({
    news: state.updates.news,
    events: state.updates.events,
    notices: state.updates.notices,
  }));
  const dispatch = useDispatch();
  const postsurl = "https://jsonplaceholder.typicode.com/posts";

  const fetchData = async (url: string, callback) => {
    try {
      setPspinner(true);
      const { data } = await axios.get(url);
      if (!!!data) {
        throw new Error("No data!");
      } else {
        setTimeout(() => {
          setPspinner(false);
          dispatch(callback(data));
        }, 2000);
      }
    } catch (error) {
      setPspinner(false);
      setErrmsg(error.message);
      console.log(error.message);
    }
  };
  React.useEffect(() => {
    if (!!!news.length || !!!events.length || !!!notices.length) {
      fetchData(postsurl, actions.addNotices);
      fetchData(postsurl, actions.addEvents);
      fetchData(postsurl, actions.addNews);
    }
  }, []);

  return (
    <Layout siteTitle="Home">
      <SEO lang="en" meta="Home" title="Home" />
      <Carousel />
      <Typography
        variant="h5"
        className="text-white bg-blue-900 py-3 leading-tight  mb-2  text-center md:py-2 sm:py-1"
      >
        Welcome to Eastern College, Somalia
      </Typography>
      <Divider />
      <Intro />
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
    <Card className="py-1 mx-2 ">
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
        <CircularProgress color="primary" />
      </div>
    );
  }
  if (!!!data.length) return <Typography>{errmessage}</Typography>;
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
  <Paper className="my-3 p-3" elevation={10}>
    <Typography variant="body1" className="mb-2 p-1 rounded">
      Eastern College is a premier institution of learning, growth and
      empowerment based in Mogadishu,Somalia.
    </Typography>

    <Typography variant="body1" className="mb-2 p-1">
      {" "}
      With Somalia opening up to the rest of the world, Eastern College was
      founded in 2018 to help improve the English language skills capacity for
      the student and working class population in Mogadishu, Somalia.
      Thereafter, the college has grown to gain full accreditation by the
      Ministry of Education, Culture {"&"} Higher Education as an institution of
      higher learning and offers a variety of professional courses which range
      from Certificate, Diploma and Undergraduate degree.
    </Typography>

    <Typography variant="body1" className="mb-2 p-1">
      {" "}
      As believers of quality education, we have always insited on offering our
      students a learning experience that is a result of research adn has been
      tested to meet both the local and international standards. This we do by
      relevant and quality partnership with both local and international
      institutions of learning because we are founded on the belief that the{" "}
      <q>
        {" "}
        <b>EDUCATION YOU WANT should meet THE ATTENTION IT DESERVES. </b>
      </q>
    </Typography>
  </Paper>
);
