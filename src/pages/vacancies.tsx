import React from "react"
import Layout from "../components/layout"

function Vacancies(): React.ReactNode {
  return (
    <Layout siteTitle="Vacancies">
      <p>Vacancies</p>
    </Layout>
  )
}
export default Vacancies

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
