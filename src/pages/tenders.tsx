import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SEO from "../components/seo";
import Layout from "../components/layout";
import {
  Box,
  Table,
  TableCell,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Chip,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { rootState, fetchData } from "../redux/reducer";
import * as actions from "../redux/updatesReducer/actions";
function Tenders(): React.ReactNode {
  const [spinner, setSpinner] = React.useState(false);
  const [err, setErr] = React.useState("");
  const tendersurl = "./server/index.php?fetchtenders=true";

  const dispatch = useDispatch();
  const { tenders } = useSelector((state: rootState) => ({
    tenders: state.updates.tenders,
  }));
  React.useEffect(() => {
    if (!!!tenders.length)
      fetchData(tendersurl, dispatch, setSpinner, setErr, actions.addTenders);
  }, []);

  return (
    <Layout siteTitle="tenders">
      <SEO title="Tenders" meta="Home" lang="en" />
      <Box
        className="rounded sm: mx-auto my-2 p-2 md:mx-10 my-3  p-3 lg:mx-20 my-2 p-4"
        style={{ background: "#ddd" }}
      >
        <Typography
          align="center"
          className="border-b border-green-500 mb-3"
          variant="h6"
        >
          Tender Notices {new Date().getFullYear()}
        </Typography>
        {!!tenders.length ? (
          <TendersTable tenders={tenders.slice(0, 10)} />
        ) : spinner ? (
          <div className="text-center p-2 mt-4">
            <CircularProgress />
          </div>
        ) : (
          <p className="font-bold">There are no tenders at the moment</p>
        )}
      </Box>
    </Layout>
  );
}
export default Tenders;
type Tender = {
  id?: number;
  title?: string;
  status?: boolean;
  deadline?: Date;
  file?: string;
};

const TendersTable: React.FC<{ tenders: Tender[] }> = ({ tenders = [] }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Deadline</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Download</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tenders.map((tender, i) => (
            <TenderList key={tender.id} index={i} {...tender} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
type Index = { index: number };
const TenderList = ({
  index,
  title,
  deadline,
  status,
  file,
}: Tender & Index): JSX.Element => (
  <TableRow>
    <TableCell>{index + 1}</TableCell>
    <TableCell>{title}</TableCell>
    <TableCell>{deadline}</TableCell>
    <TableCell>
      {status ? (
        <Chip label="Active" className="bg-green-500 text-white" />
      ) : (
        <Chip label="closed" color="secondary" />
      )}
    </TableCell>
    <TableCell>
      <Button
        component="a"
        variant="contained"
        href={file}
        target="_blank"
        color="primary"
      >
        Download
      </Button>
    </TableCell>
  </TableRow>
);
/*  
    
    !DOCTYPE html >
<html lang="en">
<head>
    <?php require_once 'views/includes/header.inc.php'; ?>    
    <link rel="stylesheet" href="/views/assets/owlj/owl.carousel.min.css">
    <link rel="stylesheet" href="/views/assets/owlj/owl.theme.default.min.css">
  
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
                    <th>Tender Title</th>
                    <th>Deadline</th>
                    <th>Status</th>
                    <th>Downloads</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    
                        <?php 
                            $i = 0;
                            foreach($this->tenders as $row) {
                                $i++;                            
                        ?>
                        <tr>
                            <td> <?php echo $i; ?> </td>
                            <td> <?php echo $row['tc_title']; ?> </td>
                            <td> <?php echo $row['tc_expiry']; ?> </td>
                            <td class="text-success"> <?php echo 'Active'; ?> </td>
                            <td>
                                <a href='/views/assets/uploads/<?php echo $row['tc_file']; ?>' target='_blank' download class='btn btn-block btn-success'>
                                    <i class='fa fa-download'> Download</i>
                                </a> 
                            </td>
                            <td>
                                <a href='#' rel='<?php echo $row['tc_ID']; ?>' data-toggle='modal' class='btn btn-block btn-success apply'>
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
                url : '/index/applytender',
                type : 'post',
                contentType : false,
                processData : false,
                data : new FormData(this),
                success : function(response) {
                    if (response == 'success')
                        swal('', "Application received successfully.", 'success');
                    else
                        swal('', response, 'error');
                }
            });
            e.preventDefault();
        });
    })
</script>*/
