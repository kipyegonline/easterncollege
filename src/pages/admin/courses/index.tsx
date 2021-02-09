import {
  Typography,
  Box,
  Button,
  TextField,
  Grid,
  Select,
  MenuItem,
} from "@material-ui/core";
import React from "react";
import axios from "axios";
import { Link } from "gatsby";
import AdminLayout, { SchoolList } from "../adminLayout";
import { FormInput, Spinner } from "../../contact-us";
import { Add, ArrowRight } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";

export default function Courses() {
  const [schools, setSchools] = React.useState<
    { id: number; school: string }[]
  >([]);
  const form = React.useRef<HTMLFormElement | null>(null!);
  const [spinner, setSpinner] = React.useState(false);
  const [success, setSuccess] = React.useState("");
  const [errmsg, setError] = React.useState("");
  const [courseName, setCourseName] = React.useState("");
  const [courseCode, setCourseCode] = React.useState("");
  const [school, setSchool] = React.useState(0);
  const [level, setLevel] = React.useState("");
  const [period, setPeriod] = React.useState("");
  const [intakes, setIntakes] = React.useState("");
  const [des, setDes] = React.useState("");

  const sendValue = (name: string, value: string) => {
    const setState = eval("set" + name);
    setState(value);
  };
  const fetchSchools = async (
    callback: (data: { id: number; school: string }[]) => void
  ) => {
    try {
      const res = await fetch(`../../server/index.php?fetchschools`);
      const data = await res.json();

      if (Array.isArray(data) || !!data.length) {
        callback(data);
      } else {
        throw new Error("No courses found");
      }
    } catch (error) {
      console.log("fetchcourses", error);
    }
  };
  React.useEffect(() => {
    fetchSchools(setSchools);
    setTimeout(() => setSchools(schoolys), 3000);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(school, typeof school);
    if (!courseName.trim().length) {
      setError("Enter course name");
      setTimeout(() => setError(""), 3000);
    } else if (!courseCode.trim().length) {
      setError("Enter course code");
      setTimeout(() => setError(""), 3000);
    } else if (school < 1) {
      setError("Kindly select school");
      setTimeout(() => setError(""), 3000);
    } else if (!level.trim().length) {
      setError("Enter course level");
      setTimeout(() => setError(""), 3000);
    } else if (!period.trim().length) {
      setError("Enter course period");
      setTimeout(() => setError(""), 3000);
    } else if (!intakes.trim().length) {
      setError("Enter course intakes");
      setTimeout(() => setError(""), 3000);
    } else if (!des.trim().length) {
      setError("Kindly provide a brief description of the course.");
      setTimeout(() => setError(""), 3000);
    } else if (
      courseName.length > 5 &&
      courseCode.length > 0 &&
      school > 0 &&
      level.length > 5 &&
      period.length > 5 &&
      intakes.length > 5 &&
      des.length > 5
    ) {
      //send to server
      setError("");
      setSpinner(true);
      const payload = {
        courseName,
        courseCode,
        school,
        level,
        period,
        intakes,
        des,
        addedBy: 1,
      };

      axios
        .post("../../server/index.php?addcourses=true", payload)
        .then(res => {
          const { data } = res;
          if (data.status === 200) {
            setSpinner(false);

            setSuccess(data.msg);
            setCourseCode("");
            setCourseName("");

            setLevel("");
            setPeriod("");
            setIntakes("");
            setDes("");
            if (form.current) form.current.reset();
            setTimeout(() => setSuccess(""), 4000);
          } else {
            throw new Error(data.msg);
          }
        })
        .catch(error => setError(error.message))
        .finally(() => {
          setSpinner(false);
          setError("");
        });
    } else {
      setError("Something went wrong...Ensure all fields have values.");
      console.log(
        courseName.length > 5,
        courseCode.length > 0,
        school > 0,
        level.length > 5,
        period.length > 5,
        intakes.length > 5,
        des.length > 5
      );
      setTimeout(() => setError(""), 3000);
    }
  };

  return (
    <AdminLayout>
      <Box>
        <form
          style={{
            maxWidth: 800,
            padding: 20,
            border: "1px solid #ddd",
            background: "#dddd",
          }}
          onSubmit={handleSubmit}
          ref={form}
        >
          <Box>
            <Typography align="center" variant="h6">
              Add Course Information
            </Typography>
          </Box>

          <Grid container spacing={3} justify="space-between">
            <Grid item xs={12} md={6} lg={6}>
              <FormInput
                label="1. Course name"
                type="text"
                getValue={sendValue}
                name="CourseName"
              />
              <FormInput
                label="2. Course code"
                type="text"
                getValue={sendValue}
                name="CourseCode"
              />

              <FormInput
                label="4. Level (certificate,diploma,degree)"
                type="text"
                getValue={sendValue}
                name="Level"
              />
              {!!schools.length && (
                <SchoolList
                  schools={schools}
                  school={school}
                  sendValue={setSchool}
                />
              )}
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <FormInput
                label="5. Period"
                type="text"
                getValue={sendValue}
                name="Period"
              />
              <FormInput
                label="6. Intakes"
                type="text"
                getValue={sendValue}
                name="Intakes"
              />

              <TextField
                label="7. Description"
                multiline
                variant="filled"
                fullWidth
                style={{ display: "block", width: "100%" }}
                rows={4}
                type="text"
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setDes((e.target as HTMLTextAreaElement).value)
                }
                name="Des"
              />
              <Box>
                {spinner && <Spinner />}
                {!!success && (
                  <Alert severity="success" className="my-2" variant="filled">
                    <Typography variant="body2">{success}</Typography>
                  </Alert>
                )}
                {!!errmsg && (
                  <Alert severity="error" className="my-2" variant="filled">
                    <Typography variant="body2">{errmsg}</Typography>
                  </Alert>
                )}
              </Box>
              <Button
                className="my-4"
                style={{ width: "100%", marginTop: 15 }}
                color="primary"
                variant="contained"
                type="submit"
                disabled={spinner}
                endIcon={<Add />}
              >
                {spinner ? "Adding course" : "Add Course"}
              </Button>
            </Grid>
          </Grid>
        </form>
        <div>
          <Link to="/admin/courses/courses" className="text-blue-600">
            {" "}
            <ArrowRight /> View all courses..
          </Link>
        </div>
      </Box>
    </AdminLayout>
  );
}
const schoolys = [
  { id: 1, school: "law" },
  { id: 2, school: "Medicine" },
  { id: 3, school: "Education" },
];
