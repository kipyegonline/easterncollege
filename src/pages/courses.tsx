import React from "react"
import Layout from "../components/layout"

function Courses(): React.ReactNode {
  return (
    <Layout siteTitle="Courses">
      <p>Courses</p>
    </Layout>
  )
}
export default Courses

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
