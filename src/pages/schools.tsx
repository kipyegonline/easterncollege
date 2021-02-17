import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "gatsby";
import {
  CircularProgress,
  Paper,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  AccordionActions,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import ErrorIcon from "@material-ui/icons/Error";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rootState, fetchData } from "../redux/reducer";
import * as actions from "../redux/updatesReducer/actions";
import { Btns, Course as CourseModal } from "./admin/courses/index";
import { Error, More } from "@material-ui/icons";

function Courses(): React.ReactNode {
  const [course, setCourse] = React.useState({});
  const [spinner, setSpinner] = React.useState(false);
  const [loaded, setLoaded] = React.useState(-1);
  const [errmsg, setError] = React.useState("");
  const [active, setActive] = React.useState(-1);

  const dispatch = useDispatch();

  const { courses } = useSelector((state: rootState) => ({
    courses: state.updates.courses,
  }));
  const fetchCourses = async (id = 0) => {
    //empty the array
    dispatch(actions.addCourses([]));
    const coursesurl = `../server/index.php?fetchcourses&courseId=${id}`;
    fetchData(coursesurl, dispatch, setSpinner, setError, actions.addCourses);
  };

  const handleActive = (id: number) => {
    setLoaded(id);
    fetchCourses(id + 1);
  };
  const getCourse = (id: number) => {
    setActive(id);
    setCourse(courses.find(course => course.id === id));
  };
  React.useEffect(() => {
    /*const coursesurl = `../server/index.php?fetchcourses&courseId=${0}`;
    if (!!!courses.length) {
      fetchData(coursesurl, dispatch, setSpinner, setError, actions.addCourses);
    }*/
  }, []);
  console.log("cour", courses);
  return (
    <Layout siteTitle="Courses">
      <SEO
        title="Courses"
        description="Eastern College has 4 schools"
        lang="en"
        meta=""
      />
      <Paper className="rounded shadow sm:mx-auto p-2 my-2 md:mx-10 p-3 my-3 lg:mx-20 my-4 p-4">
        {!!courses.length ? (
          <>
            {course.id !== undefined && <CourseModal course={course} />}
            <Btns state={loaded} handleActive={handleActive} />
            <CoursesWrapper
              courses={courses}
              getCourse={getCourse}
              active={active}
            />
          </>
        ) : spinner ? (
          <Box className="text-center my-5 p-4">
            <CircularProgress size="3rem" value={50} />
            <span className="ml-5">Loading courses</span>
          </Box>
        ) : (
          <Box>
            <Btns state={loaded} handleActive={handleActive} />
            <Typography variant="body1" className="mt-4">
              <Error color="secondary" /> There are no courses at the
              moment..Try again later.
            </Typography>
          </Box>
        )}
      </Paper>
    </Layout>
  );
}
export default Courses;

const CoursesWrapper = ({
  courses = [],
  getCourse = f => f,
  index = 0,
  active = -1,
}) => {
  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Code</TableCell>
            <TableCell>Level</TableCell>
            <TableCell>Period</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((item, i) => (
            <CourseTable
              key={i}
              {...item}
              index={i + index}
              active={active}
              handleMore={() => getCourse(item.id)}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const CourseTable = ({
  index,
  active,
  id,
  coursename,
  coursecode,
  level,
  period,
  des,

  handleMore,
}) => (
  <TableRow>
    <TableCell>{index + 1}.</TableCell>
    <TableCell>{coursename}</TableCell>
    <TableCell>{coursecode}</TableCell>
    <TableCell>{level}</TableCell>
    <TableCell>{period}</TableCell>
    <TableCell>
      {" "}
      <Button
        endIcon={<More />}
        color={active === id ? "secondary" : "primary"}
        variant="contained"
        size="small"
        onClick={handleMore}
      >
        More
      </Button>
    </TableCell>
  </TableRow>
);

const useFetch = (url: string) => {
  const [data, setData] = React.useState([]);
  const [spinner, setSpinner] = React.useState(false);
  const [errmsg, setError] = React.useState("");
  const fetchData = url => {
    fetch(url)
      .then(response => response.json())
      .then(json => setData(json))
      .then(() => setSpinner(false))
      .catch(error => {
        setSpinner(false);
        setError(error.message);
      });
  };
  React.useEffect(() => {
    if (!url) return;
    setSpinner(true);
    setTimeout(() => fetchData(url), 3000);
  }, []);
  return { data, spinner, errmsg };
};
type Oct = {
  url: string;
  Spinner?: React.ReactElement;
  Success: (data: any) => JSX.Element;
  error?: (errmsg: string) => void;
};
const October = ({
  url,
  Success,
  Spinner = (
    <div className="text-center my-3 p-2">
      <CircularProgress size="3rem" />
    </div>
  ),
  error = errmsg => (
    <div className="my-3">
      <Alert icon={<ErrorIcon />} variant="filled" severity="error">
        Something went wrong...{errmsg}{" "}
      </Alert>
    </div>
  ),
}: Oct) => {
  const { data, spinner, errmsg } = useFetch(url);
  if (spinner) return Spinner;
  if (!!errmsg) return error(errmsg);
  console.log("Status message:", data, spinner, errmsg);
  if (data) return Success({ data });
};

const Success = ({ data }) => (
  <ul>
    {data.slice(0, 10).map((item, index) => (
      <li key={index}>
        {index + 1}. {item.title}
      </li>
    ))}
  </ul>
);

const Rcourses = [...Array(32)].map((item, i) => ({
  id: i + 1,
  coursename: "Media and Comms",
  coursecode: 302,
  level: "Degree",
  period: "4 years",
  des: "Journalism and connunication practioners",
}));
