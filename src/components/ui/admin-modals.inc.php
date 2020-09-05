<!-----------------------modal add new category----------------->
<div class="modal fade" id="addNewCategory" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header blend">
        <h5 class="modal-title" id="addNew-Category">Add new category</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body" align='left'>
                <div class="container">
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-8">
                            <form action="" method="post" id="add_new_category">
                                <div id="addnewcat_reply"></div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-12 mb-3">
                                            <label>Category Name</label>
                                            <input type="text" class="inputCategory form-control" required name="inputCategory">
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <label>Category Image (optional)</label>
                                            <input type="file" class="inputImg form-control" name="inputImg" accept="image/*">
                                        </div>
                                    </div>
                                </div>    
                                <div class="form-group" align='right'>                        
                                    <button type="submit" class="form-control btn btn-primary submit">Submit</button>
                                </div>                
                            </form>
                        </div>
                        <div class="col-md-2"></div>
                    </div>
                </div>
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<!--------------------jobs------------------------>
<div class="modal fade" id="addnewjob" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header blend">
        <h5 class="modal-title">A new vacancy</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body" align='left'>
                <div class="container">
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-8">
                            <form action="" method="post" id="job_application_form">
                                <div id="addnewcat_reply"></div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-12 mb-3">
                                            <label>Title</label>
                                            <input type="text" class="job_title form-control" required name="job_title" placeholder='Lecturer position'>
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <label>Apply by</label>
                                            <input type="date" class="apply_by form-control" name="apply_by" required >
                                        </div>
                                        <div class="col-md-12">
                                            <label>additional files (pdf)</label>
                                            <input type="file" class="pdf_info form-control" name="pdf_info" accept=".pdf">
                                        </div>
                                        <div class="col-md-12">
                                            <label>Job description</label>
                                            <textarea type="text" class="job_desc form-control" name="job_desc" id="job_desc"></textarea>
                                        </div>
                                    </div>
                                </div>    
                                <div class="form-group" align='right'>                        
                                    <button type="submit" class="form-control btn btn-primary submit">Submit</button>
                                </div>                
                            </form>
                        </div>
                        <div class="col-md-2"></div>
                    </div>
                </div>
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<!----------------------------notices--------------------------->
<div class="modal fade" id="addnewnotice" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header blend">
        <h5 class="modal-title">A new notice</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body" align='left'>
                <div class="container">
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-8">
                            <form action="" method="post" id="notice_form">
                                <div id="addnewcat_reply"></div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-12 mb-3">
                                            <label>Title</label>
                                            <input type="text" class="_title form-control" required name="_title" >
                                        </div>
                                        <div class="col-md-12">
                                            <label>additional files </label>
                                            <input type="file" class="image form-control" name="image" >
                                        </div>
                                        <div class="col-md-12">
                                            <label>Content</label>
                                            <textarea type="text" class="content form-control" rows="5" name="content" id="content"></textarea>
                                        </div>
                                    </div>
                                </div>    
                                <div class="form-group" align='right'>                        
                                    <button type="submit" class="form-control btn btn-primary submit">Submit</button>
                                </div>                
                            </form>
                        </div>
                        <div class="col-md-2"></div>
                    </div>
                </div>
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<!---------------------------------------tenders---------------------------------->
<div class="modal fade" id="addnewtender" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header blend">
        <h5 class="modal-title">A new tender</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body" align='left'>
                <div class="container">
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-8">
                            <form action="" method="post" id="tender_application_form">
                                <div id="addnewcat_reply"></div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-12 mb-3">
                                            <label>Title</label>
                                            <input type="text" class="job_title form-control" required name="job_title">
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <label>Apply by</label>
                                            <input type="date" class="apply_by form-control" name="apply_by" required >
                                        </div>
                                        <div class="col-md-12">
                                            <label>Tender files (pdf)</label>
                                            <input type="file" class="pdf_info form-control" name="pdf_info" required>
                                        </div>
                                    </div>
                                </div>    
                                <div class="form-group" align='right'>                        
                                    <button type="submit" class="form-control btn btn-primary submit">Submit</button>
                                </div>                
                            </form>
                        </div>
                        <div class="col-md-2"></div>
                    </div>
                </div>
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<!------------------------------------downloads----------------------------------->
<div class="modal fade" id="addnewdownload" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header blend">
        <h5 class="modal-title">A new tender</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body" align='left'>
                <div class="container">
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-8">
                            <form action="" method="post" id="downloads_form">
                                <div id="addnewcat_reply"></div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-12 mb-3">
                                            <label>Title</label>
                                            <input type="text" class="title form-control" required name="title" placeholder="Example: Third year fee structure">
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <label>Target</label>
                                            <input type="text" class="target form-control" name="target" placeholder="Example: School of languages">
                                        </div>
                                        <div class="col-md-12">
                                            <label>Download file (can be any type)</label>
                                            <input type="file" class="file form-control" name="file" required>
                                        </div>
                                    </div>
                                </div>    
                                <div class="form-group" align='right'>                        
                                    <button type="submit" class="form-control btn btn-primary submit">Submit</button>
                                </div>                
                            </form>
                        </div>
                        <div class="col-md-2"></div>
                    </div>
                </div>
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<!--------------------------------------events-------------------->
<div class="modal fade" id="addnewevent" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header blend">
        <h5 class="modal-title">A new tender</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body" align='left'>
                <div class="container">
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-8">
                            <form action="" method="post" id="event_form">
                                <div id="addnewcat_reply"></div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-12 mb-3">
                                            <label>Title</label>
                                            <input type="text" class="e_title form-control" required name="e_title" placeholder='Fourth graduation'>
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <label>Event date</label>
                                            <input type="date" class="e_date form-control" name="e_date" required >
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <label>Event theme</label>
                                            <input type="text" class="theme form-control" name="theme" required placeholder="Competence Based Training for Sustainable Development" >
                                        </div>
                                        <div class="col-md-12">
                                            <label>Event file (image)</label>
                                            <input type="file" class="image form-control" name="image" required>
                                        </div>
                                    </div>
                                </div>    
                                <div class="form-group" align='right'>                        
                                    <button type="submit" class="form-control btn btn-primary submit">Submit</button>
                                </div>                
                            </form>
                        </div>
                        <div class="col-md-2"></div>
                    </div>
                </div>
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<!-----------------------add a product roq sub category ----------------------->
<div class="modal fade" id="morefor_roq_modal" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content">
      <div class="modal-header blend">
        <h5 class="modal-title">Sub Product  Modal</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body" align='left'>
          <form action="" method="post" id="pro_roq_form">           
              <div class="form-group"> 
                  <label class="initial">Customer roq subject</label>
                  <input type="text" class="post_title form-control" readonly>
              </div> 
              <div class="form-group"> 
                  <label class="initial">Customer description</label>
                  <textarea type="text" class="post_desc form-control" readonly></textarea>
              </div>  
              <div class="form-group" align='right'>                        
                  <button type="submit" class="btn btn-primary submit">Submit</button>
              </div> <hr>
              <div class="container">
                <div class="row">
                  <div class="col-md-3 mb-2">
                    <div class="card alert">
                      <h6>Step 1 : Received</h6>
                      <div class="box">
                        <textarea name="Step1" class="form-control"> No action here</textarea>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 mb-2">
                    <div class="card alert">
                      <h6>Step 2 : Payment</h6>
                      <div class="box">
                        <textarea name="Step2" class="form-control"></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 mb-2">
                    <div class="card alert">
                      <h6>Step 3 : Delivery</h6>
                      <div class="box">
                        <textarea name="Step3" class="form-control"></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 mb-2">
                    <div class="card alert">
                      <h6>Step 4 : Evidence</h6>
                      <div class="box">
                        <input type="file" name="evidence_file[]" class="form-control" multiple>
                      </div>
                    </div>
                  </div>
                </div>                
              </div>               
          </form>
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<!------------------------------faculties-------------------->
<div class="modal fade" id="addnewfaculty" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header blend">
        <h5 class="modal-title">A new Faculty</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body" align='left'>
                <div class="container">
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-8">
                            <form action="" method="post" id="fac_form">
                                <div id="addnewcat_reply"></div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-md-12 mb-3">
                                            <label>Faculty name</label>
                                            <input type="text" class="title form-control" required name="title">
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <label>Code (optional)</label>
                                            <input type="text" class="code form-control" name="code" required >
                                        </div>
                                    </div>
                                </div>    
                                <div class="form-group" align='right'>                        
                                    <button type="submit" class="form-control btn btn-primary submit">Submit</button>
                                </div>                
                            </form>
                        </div>
                        <div class="col-md-2"></div>
                    </div>
                </div>
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
