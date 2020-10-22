import React from "react";
import { Link } from "gatsby";
import {
  CircularProgress,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
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
import { courses } from "./schools";
function Courses(): React.ReactNode {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setLoaded(!loaded), 2000);
  }, []);

  return (
    <Layout siteTitle="Courses">
      <SEO
        title="Courses"
        description="Eastern College has 4 schools"
        lang="en"
        meta=""
      />
      <Paper className="rounded shadow sm:mx-auto p-2 my-2 md:mx-10 p-3 my-3 lg:mx-20 my-4 p-4">
        {!loaded ? (
          <div className="text-center my-5 p-4">
            <CircularProgress size="5rem" value={50} />
            <span className="ml-5">Loading courses</span>
          </div>
        ) : (
          <CoursesWrapper courses={courses} />
        )}
      </Paper>
    </Layout>
  );
}
export default Courses;

const CoursesWrapper = ({ courses = [] }) => {
  return (
    <Box>
      {courses.map((course, index) => (
        <div key={index}>
          <Typography
            style={{ fontWeight: 500 }}
            className="text-center capitalize  border-b border-green-500"
          >
            {index + 1}. {course.school}
          </Typography>

          <ShowCourses course={course.courses} key={index} />
        </div>
      ))}
    </Box>
  );
};
const ShowCourses = ({ course = [] }) => {
  const [selected, setSelected] = React.useState(
    "English as Second Language (ESL)"
  );
  const handleChange = (course: string) => {
    // if someone wants to close the current accordion
    course === selected ? setSelected("") : setSelected(course);
  };

  return (
    <>
      {!!course.length ? (
        course.map((item, index) => (
          <div className="p-3 m-2" key={index}>
            <Accordion
              expanded={item.course === selected}
              onChange={() => handleChange(item.course)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id={item.course}
                className="bg-gray-600"
              >
                <Typography style={{ fontWeight: 400 }} className="font-bold">
                  {index + 1}. {item.course}
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{ background: "#ccc" }}>
                <div>
                  <Typography variant="subtitle1">
                    Period:{" "}
                    <b>
                      {item.level.toLowerCase() === "certificate"
                        ? "4 Months"
                        : "18 months"}
                    </b>
                  </Typography>
                  <Typography>
                    Intakes: <b> January,June and October </b>
                  </Typography>
                  <Typography
                    variant="body1"
                    align="justify"
                    style={{ textIndent: 16 }}
                  >
                    {item.des}
                  </Typography>
                </div>
                <div>
                  <AccordionActions>
                    <Button
                      color="primary"
                      variant="contained"
                      size="small"
                      className="rounded block"
                    >
                      <Link to="/apply-online">Apply</Link>
                    </Button>
                  </AccordionActions>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        ))
      ) : (
        <Typography className=" p-2 text-red-500 text-center">
          Coming soon
        </Typography>
      )}
    </>
  );
};

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
/*
< !DOCTYPE html >
<html lang="en">
<head>
    <?php require_once 'views/includes/header.inc.php'; ?>  
      
</head>
<body>
    <!-------------------------header----------------------------->
    <header>
        <?php require_once 'views/includes/navbar.inc.php'; ?>
    </header>
    <!-------------------------body-----------------------------> 
    <div align='center'>
            <?php
                if (isset($_SESSION['loggedIn'])) { if ($_SESSION['role'] == 'Admin') { 
                ?>
                    <form enctype="multipart/form-data" action='' method='post' style='background:black;'>
                        <input class='' type='file' name='file_home' accept='image/*'>
                        <input class='' type='submit' name='submit_file' value='Submit file'>
                    </form>
            <?php }} ?>
    </div>
    <div class="bg_image_universal" id="courses_img" style="background-image: url(/views/assets/uploads/<?php echo $this->mainPic; ?>);"></div>
    <h3 class="text-center shadow blend_text alert table-responsive">Select school to see its courses
        <select name="" class="select_course">
            <option value="" hidden>Select Faculty</option>
            <?php 
                foreach ($this->courses as $row) {
            ?>
            <option value="<?php echo $row['so_ID']; ?>"><?php echo $row['so_name']; ?></option>
            <?php } ?>
        </select>
    </h3>  
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <div class="shadow">
                        <div class="dd table-responsive">
                        <table class="table table-hover ">
                <thead>
                    <th>No</th>
                    <th>Code</th>
                    <th>Course Name</th>
                    <th>Duration</th>
                    <th>Intake</th>
                    <th>Description</th>
                    <th>Action</th>
                </thead>
                <tbody id="courses">  
                </tbody>
            </table>
                        </div>
                    </div>
                </div>
                <div class="col-md-1"></div>
            </div>
        </div>
    </div> 

    <!---------------------------X--end of mission---X------------> 
</body>
<!-------------------------footer----------------------------->
<footer>
    <?php require_once 'views/includes/footer.inc.php'; ?>
</footer>
</html>
<script>
    $(function(){
        getText("courses_img", "courses_img", "courses_imgtextarea");
        
        $('.select_course').change(function(){
        var id = $(this).val();
            $.ajax({
                url : '/index/fetchcourses',
                type : 'post',
                data : {course_name:id},
                success : function(data) {
                    $('#courses').html(data);
                }
            })
        });
       
    })
</script>
<?php if (empty($editor)) { ?>
<script>
    $(function(){
        $("#courses_img_form").submit(function(e){
        e.preventDefault(); 
        var formData = new FormData(document.querySelector('#courses_img_form'));
        var content = CKEDITOR.instances.courses_imgtextarea.getData();
        formData.append("updateThisValue", content);
        formData.append("whereThisValue", "courses_img");
      
            updateText(formData);
            getText("courses_img", "courses_img", "courses_imgtextarea");
        });
    });
</script>
<?php } ?>

            */
