import React from "react";
import { Link } from "gatsby";
import { useSelector, useDispatch } from "react-redux";
import {
  Typography,
  Paper,
  Table,
  TableContainer,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  Button,
  CircularProgress,
  Chip,
} from "@material-ui/core";
import Layout from "../components/layout";
import { rootState, fetchData } from "../redux/reducer";
import * as actions from "../redux/updatesReducer/actions";
import { Pagination } from "@material-ui/lab";

type Careers = {
  title?: string;
  file?: string;
  id?: string;
  uploaded?: Date;
  deadline?: Date;
  status?: boolean;
};
type Index = { index: number };
function Vacancies(): React.ReactNode {
  const [spinner, setSpinner] = React.useState(false);
  const [err, setErr] = React.useState("");
  const [current, setCurrent] = React.useState(0);

  const postsurl = "https://jsonplaceholder.typicode.com/posts";

  const dispatch = useDispatch();
  const { careers } = useSelector((state: rootState) => ({
    careers: state.updates.careers,
  }));
  const perpage = careers.length > 10 ? 10 : careers.length;
  const pages = Math.ceil(careers.length / perpage);
  const start = current * perpage;
  const end = current * perpage + perpage;
  const handleChange = (event: React.ChangeEvent<unknown>, p: number) =>
    setCurrent(p - 1);
  React.useEffect(() => {
    if (!!!careers.length)
      fetchData(postsurl, dispatch, setSpinner, setErr, actions.addCareers);
  }, []);

  return (
    <Layout siteTitle="Vacancies">
      <Paper
        style={{ background: "#ccc" }}
        className=" mx-3 sm:mx-5 my-2 p-2 md:mx-10 p-3 my-2 lg:mx-20 p-4 my-2"
      >
        <Typography
          variant="h6"
          className="border-b border-green-500"
          align="center"
        >
          Vacancies
        </Typography>
        {!!careers.length ? (
          <>
            <VacanciesTable careers={careers.slice(start, end)} start={start} />
            <span>
              {" "}
              page <b>{current + 1}</b> of {pages}
            </span>
            <Pagination
              count={pages}
              onChange={handleChange}
              className="mx-auto text-center"
              color="secondary"
              showFirstButton={true}
              showLastButton={true}
              defaultPage={current}
              page={current + 1}
            />
          </>
        ) : spinner ? (
          <div className="text-center my-2 p-2">
            <CircularProgress />
          </div>
        ) : (
          <Typography variant="body1" align="center">
            {err}
          </Typography>
        )}
      </Paper>
    </Layout>
  );
}
export default Vacancies;
const VacanciesTable: React.FC<{ careers: Careers[]; start: number }> = ({
  careers = [],
  start = 0,
}) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Job title</TableCell>
            <TableCell>Uploaded</TableCell>
            <TableCell>Deadline</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Download</TableCell>
            <TableCell>Apply</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {careers.map((career: Careers, i: number) => (
            <VacancyList key={career.id} {...career} index={i + start} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const VacancyList = ({
  index,
  title,
  uploaded,
  deadline,
  status,
  file,
}: Careers & Index) => {
  return (
    <TableRow>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{new Date().toDateString()}</TableCell>
      <TableCell>{new Date("2020", "11", "25").toDateString()}</TableCell>
      <TableCell>
        {status ? (
          <Chip color="primary" size="small" label="closed" />
        ) : (
          <Chip color="secondary" size="small" label="closed" />
        )}
      </TableCell>
      <TableCell>
        <Button
          href={file}
          size="small"
          target="_blank"
          variant="contained"
          color="primary"
          component="a"
        >
          Download
        </Button>
      </TableCell>
      <TableCell>
        <Button size="small" variant="outlined" color="primary">
          {" "}
          <Link to={"/apply-online"}>Apply</Link>
        </Button>
      </TableCell>
    </TableRow>
  );
};
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
    <section class="container-fluid">
        <div class="container table-responsive">
            <table class="table table-hover ">
                <thead>
                    <th>No</th>
                    <th>Job Title</th>
                    <th>Uploaded</th>
                    <th>Deadline</th>
                    <th>Status</th>
                    <th>Downloads</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    
                        <?php 
                            $i = 0;
                            foreach($this->vacancies as $row) {
                                $i++;                            
                        ?>
                        <tr>
                            <td> <?php echo $i; ?> </td>
                            <td> <?php echo $row['jc_title']; ?> </td>
                            <td> <?php echo date('Y-m-d', $row['jc_date']); ?> </td>
                            <td> <?php echo $row['jc_expiry']; ?> </td>
                            <td class="text-success"> <?php echo 'Active'; ?> </td>
                            <td>
                                <?php if (!empty($row['jc_file'])) { ?>
                                <a href='/views/assets/uploads/<?php echo $row['jc_file']; ?>' target='_blank' download class='btn btn-block btn-success'>
                                    <i class='fa fa-download'> Download</i>
                                </a> 
                                <?php } ?>
                            </td>
                            <td>
                                <a href='#' rel='<?php echo $row['jc_ID']; ?>' data-toggle='modal' class='btn btn-block btn-success apply'>
                                    <i class='fa fa-upload'> Apply</i>
                                </a> 
                            </td>
                        </tr>

                            <?php } ?>
                    
                </tbody>
            </table>
            <div class="container shadow alert" id="application_form">
                <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-6">
                        <form action="" id="applic_form" class="hidden">
                            <h4>Application form</h4>
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" name="name" class="form-control">
                                <input type="hidden" name="form_id" class="form_id form-control" value="">
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="text" name="email" class="form-control">
                            </div>
                            <div class="form-group">
                                <label>Files (a zipped file all the required files from the downloads)</label>
                                <input type="file" name="file" class="form-control">
                            </div>
                            <div class="form-group">
                                <input type="submit" class="form-control btn-primary">
                            </div>
                        </form>
                    </div>
                    <div class="col-md-3"></div>
                </div>               
            </div>
        </div>
    </section>

    <!---------------------------X--end of mission---X------------> 
</body>
<!-------------------------footer----------------------------->
<footer>
    <?php require_once 'views/includes/footer.inc.php'; ?>
</footer>
</html>
<script>
    $(function(){
        $('.apply').click(function(e){
            e.preventDefault();
            var j_id = $(this).attr('rel'); 
            $('.form_id').val(j_id);
            $('form').removeClass('hidden');
            location.href='#application_form';          
        })

        $('#applic_form').submit(function(e){
            
            $.ajax({
                url : '/index/applyjob',
                type : 'post',
                contentType : false,
                processData : false,
                data : new FormData(this),
                success : function(response) {
                    if (response == 'success')
                        swal('', "Application received successfully. We'll get in touch soon.", 'success');
                    else
                        swal('', response, 'error');
                }
            });
            e.preventDefault();
        });
    })
</script> */
