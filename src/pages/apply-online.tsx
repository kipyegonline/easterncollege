import React from "react"
import Layout from "../components/layout"

function ApplyOnline(): React.ReactNode {
  return (
    <Layout siteTitle="Apply Online">
      <p>AApply 0nline</p>{" "}
    </Layout>
  )
}
export default ApplyOnline

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
