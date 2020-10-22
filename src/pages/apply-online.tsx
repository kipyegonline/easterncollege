import {
  Card,
  CircularProgress,
  FormControl,
  Input,
  Button,
  InputLabel,
  Typography,
} from "@material-ui/core";
import React from "react";
import CancelIcon from "@material-ui/icons/Error";
import Layout from "../components/layout";

function ApplyOnline(): React.ReactNode {
  const [isLoaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => setLoaded(true), 3000);
  }, []);
  return (
    <Layout siteTitle="Apply Online">
      {isLoaded ? (
        <div className="text-center my-4 p-4 h-full">
          <Typography className="text-center py-4 my-4">
            <CancelIcon color="secondary" /> The form is currently unavailable.
            <b> Check back soon</b>
          </Typography>
        </div>
      ) : (
        <div className="text-center my-4 p-4">
          <CircularProgress size="3rem" />
          <p>Preparing application form...</p>
        </div>
      )}
    </Layout>
  );
}
export default ApplyOnline;

const useInput = (initialValue: any) => {
  const [value, setValue] = React.useState(initialValue);
  return [
    { value, onChange: e => setValue(e.target.value) },
    () => setValue(initialValue),
  ];
};

const ApplicationForm = () => {
  const [name, setName] = useInput("");
  const [email, setEmail] = useInput("");
  const [course, setCourse] = useInput("");
  const [spinner, setSpinner] = React.useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    console.log(name.value, email.value, course.value);
    setSpinner(true);
    setTimeout(() => {
      setName();
      setEmail();
      setCourse();
      setSpinner(false);
    }, 5000);
  };
  return (
    <Card>
      <form onSubmit={handleSubmit} style={{ width: 500, padding: 20 }}>
        <FormControl className="block w-full">
          <InputLabel>Name</InputLabel>
          <Input type="text" fullWidth {...name} />
        </FormControl>

        <FormControl className="block w-full">
          <InputLabel>Email</InputLabel>
          <Input type="email" fullWidth {...email} />
        </FormControl>
        <FormControl className="block w-full my-2">
          <InputLabel>Course</InputLabel>
          <Input type="text" {...course} />
        </FormControl>
        <div className="my-2 text-center">
          {spinner && <CircularProgress size="2rem" />}
        </div>
        <Button
          className="block mt-3 rounded w-full"
          color="primary"
          variant="contained"
          startIcon={<CancelIcon size="small" />}
          type="submit"
        >
          Apply
        </Button>
      </form>
    </Card>
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
        <div class="container">            
            <div class="container shadow alert" id="application_form">
                <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-6">
                        <form action="" id="applic_form" class="">
                            <h4>Online application form</h4>
                            <div class="form-group">
                                <label>Course (contact us <a href="/contact-us" class="tex_underline">here</a> if you need guidance)</label>
                                <select type="text" name="course" class="form-control">
                                    <option value="" hidden>Please select course</option>
                                    <?php 
                                        foreach ($this->courses as $row) {                                        
                                    ?>
                                    <option value="<?php echo $row['c_ID'];?>"><?php echo $row['c_name'];?></option>
                                    <?php } ?>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" name="name" class="form-control">
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="text" name="email" class="form-control">
                            </div>
                            <div class="form-group">
                                <label>Phone</label>
                                <input type="text" name="phone" class="form-control">
                            </div>
                            <div class="form-group">
                                <label>Special notes</label>
                                <textarea type="text" name="notes" rows="5" class="form-control"></textarea>
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

        $('#applic_form').submit(function(e){
            
            $.ajax({
                url : '/index/applycourse',
                type : 'post',
                data : $(this).serialize(),
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
                </script> </div>


*/
