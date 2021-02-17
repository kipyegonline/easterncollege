import React from "react";
import { Link } from "gatsby";
import Pagination from "@material-ui/lab/Pagination";
import {
  Box,
  Button,
  CircularProgress,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TableBody,
  ButtonGroup,
} from "@material-ui/core";
import AdminLayout, { UseModal } from "../adminLayout";

import {
  ArrowRight,
  Delete,
  Error,
  More,
  SchoolOutlined,
} from "@material-ui/icons";

export default function Courses(): JSX.Element {
  const [spinner, setSpinner] = React.useState(false);
  const [courses, setCourses] = React.useState([]);
  const [course, setCourse] = React.useState({});
  const [current, setCurrent] = React.useState(0);
  const [active, setActive] = React.useState(-1);

  const perpage = courses.length > 9 ? 10 : courses.length;
  const pages = Math.ceil(courses.length / perpage);
  const start = current * perpage,
    end = current * perpage + perpage;
  const handlePage = (e: React.ChangeEvent<unknown>, p: number) =>
    setCurrent(p - 1);
  const fetchCourses = async (id = 0) => {
    try {
      setCourses([]);
      setSpinner(true);

      const res = await fetch(
        `../../server/index.php?fetchcourses&courseId=${id}`
      );
      const data = await res.json();
      if (Array.isArray(data) && !!data.length) {
        setCourses(data);
      } else {
        throw new ReferenceError("No courses found");
      }
    } catch (error) {
      setSpinner(false);
      console.log("fetchcourses", error);
    }
  };
  const sendCourse = id => {
    setCourse(courses.find(course => course.id === id));
  };

  const handleDelete = (id: number) => {
    if (confirm("Delete course")) {
      fetch(`../../server/index.php?deletecourse=true&courseId=${id}`)
        .then(res => setCourses(courses.filter(item => item.id !== id)))
        .catch(error => console.log("delete course", error));
    }
  };
  const handleActive = (id: number) => {
    setActive(id);
    fetchCourses(id + 1);
  };
  React.useEffect(() => {
    fetchCourses();
    // setTimeout(() => setCourses(Rcourses), 3000);
  }, []);

  const Spinner = () => (
    <Box className="p-4 my-4 mx-auto text-center">
      <CircularProgress color="secondary" size="3rem" />
      <Typography>Loading courses</Typography>
    </Box>
  );
  const ErrEl = (
    <Box className="p-2">
      <Typography className="text-red-500 text-center">
        {" "}
        <Error />
        No courses found
      </Typography>
    </Box>
  );

  return (
    <AdminLayout>
      {course.id !== undefined && <Course course={course} />}

      {!!courses.length ? (
        <Box>
          <Btns state={active} handleActive={handleActive} />
          <Typography variant="h6" align="center">
            {courses.length} courses
          </Typography>
          <CoursesTable
            courses={courses.slice(start, end)}
            getCourse={sendCourse}
            index={start}
            sendDelete={handleDelete}
          />
          {courses.length > 9 && (
            <Pagination
              count={pages}
              page={current + 1}
              defaultPage={current + 1}
              color="primary"
              onChange={handlePage}
            />
          )}
        </Box>
      ) : spinner ? (
        <Spinner />
      ) : (
        <>
          <Btns state={active} handleActive={handleActive} />
          {ErrEl}
        </>
      )}
      <Link to="/admin/courses/add-course" className="text-blue-500">
        <ArrowRight /> Add Course
      </Link>
    </AdminLayout>
  );
}

const CoursesTable = ({
  index = 0,
  courses = [],
  getCourse = f => f,
  sendDelete = f => f,
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
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((item, i) => (
            <CourseTable
              key={i}
              {...item}
              index={i + index}
              handleDelete={() => sendDelete(item.id)}
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
  id,
  coursename,
  coursecode,
  level,
  period,
  des,
  handleDelete,
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
        color="primary"
        variant="contained"
        size="small"
        onClick={handleMore}
      >
        More
      </Button>
    </TableCell>
    <TableCell>
      <Button
        startIcon={<Delete />}
        color="secondary"
        variant="contained"
        size="small"
        onClick={handleDelete}
      >
        Delete
      </Button>
    </TableCell>
  </TableRow>
);
export const Course = ({ course }) => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => setOpen(false);
  React.useEffect(() => {
    setOpen(!!course.id);
  }, [course]);
  return (
    <UseModal title={course.coursename} open={open} handleClick={handleClick}>
      <Typography variant="body1">{course.des}</Typography>
    </UseModal>
  );
};

export const Btns = ({ state, handleActive = f => f }) => {
  const schools = [
    "School Of Languages",
    "School Of Business And Economics",
    " School Of Hospitality Management",
    "School Of Humanities And Social Sciences",
  ];
  return (
    <ButtonGroup className=" flex flex-row mb-3">
      {schools.map((item, index) => (
        <Button
          startIcon={<SchoolOutlined />}
          variant="contained"
          key={index}
          size="small"
          style={{ margin: 5 }}
          onClick={() => handleActive(index)}
          color={state === index ? "secondary" : "primary"}
        >
          {item}
        </Button>
      ))}
    </ButtonGroup>
  );
};
