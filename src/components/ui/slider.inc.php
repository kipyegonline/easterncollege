<section>
          <?php
                if (isset($_SESSION['loggedIn'])) { if ($_SESSION['role'] == 'Admin') { 
                ?>
                    <div class='card alert' style='width: 40%'>
                        <h5 class='text-center'>Add a slide image</h5>
                        <form enctype="multipart/form-data" action='' method='post'>
                            <input class='form-control' type='file' name='file_home' accept='image/*'><br>
                             <input class='form-control' type='text' name='tex_disp' placeholder='a short text/description'><br>
                            <input class='form-control btn-success' type='submit' name='submit_files_home' value='Submit slide image'>
                        </form>
                   
                    <div class="btn btn-danger mt-3"> 
                        <a href="#deletefiles" data-toggle="modal" class="<?php echo $editor;?> white_text"> <i class="fa fa-trash  " ></i> Delete slider files</a>
                    </div> </div>
                    
            <?php }} ?>
        <div class="containerddd">
             <div class="owl_main_slider owl-carousel owl-theme maq_mb">
                 
                  <?php foreach ($this->homefiles as $row) {
                       $path = getenv('DOCUMENT_ROOT') . '/views/assets/compressed/';
                       $path2 = getenv('DOCUMENT_ROOT') . '/views/assets/uploads/';
                       
                       if (file_exists($path2 . $row['cont_image'])) {
                           $file = "/views/assets/uploads/" . $row['cont_image'];
                       } else {
                           $file = "/views/assets/compressed/" . $row['cont_image'];
                       }
                  ?>
                  <div class="item">
                       <div class="card img_card_conts ">
                            <img src="<?php echo $file ?>" alt="slider images" class="card-img-top animate" >
                            <?php if (!empty($row['content'])) { ?>
                            <div class='card-text text_disp'><p><?php echo $row['content']; ?></p></div>
                            <?php } ?>
                       </div>
                       
                  </div>
                  <?php  } ?>
                  
             </div>
          </div>


     
     <marquee class="maq-style">
          <strong>
               FULL-TIME AND EVENING COURSES FOR FEBRUARY, JUNE AND OCTOBER <?php echo date('Y'); ?>
               INTAKE. <a style="color:green" href="/index/courses">CLICK HERE TO SEE COURSES</a>    |    FULL-TIME AND EVENING COMPETENCY BASED COURSES
               FOR SEPTEMBER 2020 INTAKE
               <a style="color:green" href="/index/campus-life"> CLICK HERE TO SEE LIFE AT EASTERN COLLEGE</a>
          </strong>
     </marquee>
</section>