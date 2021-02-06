import React from "react";
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
} from "@material-ui/core";
import AdminLayout from "../adminLayout";

import { Delete, Error, More } from "@material-ui/icons";

export default function Courses(): JSX.Element {
  const [spinner, setSpinner] = React.useState(false);
  const [courses, setCourses] = React.useState([]);
  const [course, setCourse] = React.useState({});

  const fetchCourses = async (id = 0) => {
    try {
      setSpinner(true);
      const res = await fetch(
        `../../server/index.php?fetchcourses&courseId=${id}`
      );
      const data = await res.json();
      if (Array.isArray(data) || !!data.length) {
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
    console.log(course);
  };

  const handleDelete = (id: number) => {
    if (confirm("Delete course")) {
      fetch(`../../server/index.php?deletecourse=true&courseId=${id}`)
        .then(res => setCourses(courses.filter(item => item.id !== id)))
        .catch(error => console.log("delete course", error));
    }
  };

  React.useEffect(() => {
    fetchCourses();
    //setTimeout(() => setCourses(Rcourses), 3000);
  }, []);

  const Spinner = () => (
    <Box className="p-4 my-4 mx-auto text-center">
      <CircularProgress color="secondary" size="3rem" />
      <Typography>Loading courses</Typography>
    </Box>
  );
  const ErrEl = (
    <Box>
      <Typography className="text-red-500 text-center">
        {" "}
        <Error />
        No courses found
      </Typography>
    </Box>
  );
  return (
    <AdminLayout>
      {!!courses.length ? (
        <Box>
          <Typography variant="h6" align="center">
            {courses.length} courses
          </Typography>
          <CoursesTable
            courses={courses}
            getCourse={sendCourse}
            sendDelete={handleDelete}
          />
        </Box>
      ) : spinner ? (
        <Spinner />
      ) : (
        ErrEl
      )}
    </AdminLayout>
  );
}

const CoursesTable = ({
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
              index={i}
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
const Rcourses = [...Array(32)].map((item, i) => ({
  id: i + 1,
  coursename: "Media and Comms",
  coursecode: 302,
  level: "Degree",
  period: "4 years",
  des: "Journalism and connunication practioners",
}));
