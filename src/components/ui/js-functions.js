
// a get data function
function getText(getThisValue, id, id2){
    $.ajax({
        url : "/index/getText",
        method : "post",
        data : {getThisValue:getThisValue},
        beforeSend : function() {
            $("#" + id).html("<span class='rotate rotate_larger' align='center'> <i class='fa fa-spinner'></i> </span>");
        },
        success : function(data){
           $("#" + id2).val(data);
           $("#" + id).html(data);
          
         //
        }
    })
}
function getfiles(getThisValue, id){
    $.ajax({
        url : "/index/getFiles",
        method : "post",
        data : {whereThisValue:getThisValue},
        beforeSend : function() {
            $("#" + id).html("<span class='rotate rotate_larger' align='center'> <i class='fa fa-spinner'></i> </span>");
        },
        success : function(data){
           $("#" + id).html(data);
         //
        }
    })
}

// an uodate data function

function updateText(formData) {    
    $.ajax({
        url : "/index/updateText",
        method : "post",
        contentType : false,
        processData : false,
        catch : false,
        data : formData,
        beforeSend : function() {
            $(".submit").html("<span class='rotate' align='center'> <i class='fa fa-spinner'></i> </span>");
        },
        success : function(data){
            $(".submit").html("Submit");
            setTimeout(() => {
                swal('', data, 'success');
            }, 5000);
        }
    })    
}
// an update data function with txt editor

function updateText2(updateThisValue, whereThisValue) {    
    $.ajax({
        url : "/index/updateText",
        method : "post",
        data : {updateThisValue:updateThisValue, whereThisValue:whereThisValue},
        beforeSend : function() {
            $(".submit").html("<span class='rotate' align='center'> <i class='fa fa-spinner'></i> </span>");
        },
        success : function(data){
            $(".submit").html("Submit");
            setTimeout(() => {
                swal('', data, 'success');
            }, 5000);
        }
    })    
}

//returns social media link ids
function getLink(link_name, id2){
    $.ajax({
        url : "/index/getLinks",
        method : "post",
        data : {link_name:link_name},
        success : function(data){
           //$("#" + id1).html(data);
           $("#" + id2).val(data);
          
         //switch
         switch (link_name) {
             case "Facebook":
                 $("#fbLink").html("<a href='" + data +"'> <i class='fa fa-facebook-f'></i> </a>");
                 break; 
                 case "Twitter":
                 $("#twLink").html("<a href='" + data +"'> <i class='fa fa-twitter'></i> </a>");
                 break;
                 case "Youtube":
                 $("#ytLink").html("<a href='" + data +"'> <i class='fa fa-youtube'></i> </a>");
                 break;
                 case "Instagram":
                 $("#igLink").html("<a href='" + data +"'> <i class='fa fa-instagram'></i> </a>");
                 break;
                 case "Whatsapp":
                 $("#whLink").html("<a href='" + data +"'> <i class='fa fa-whatsapp'></i> </a>");
                 break;        
             default:
                 break;
         }
        }
    })
}

//load comments
function loadComments(comment_number){
    $.ajax({
        url : "/media/loadComments",
        method : "post",
        data : {comment_number:comment_number},
        beforeSend : function() {
            $(".submit").html("<span class='rotate' align='center'> <i class='fa fa-spinner'></i> </span>");
        },
        success : function(data){
           $("#CommentsID").html(data);
           
        }
    })
}

// get categories
function getServiceCategory() {    
    $.ajax({
        url : "/index/getServiceCategory",
        beforeSend : function() {
            $(".submit").html("<span class='rotate' align='center'> <i class='fa fa-spinner'></i> </span>");
        },
        success : function(data){
            $('#serviceCategory').html(data);
        }
    })      
}

function count_live(target, end, c_name) {
    var val = 0;
    setInterval(() => {
        if ((val < target) ) {

            if (c_name == 'happy') {
                val += 11;
            } else {
                val++;
            }
            
            $('.' + c_name).text(val);
        } else {
            clearInterval();
            $('.' + c_name).text(end);
        }
    }, 10);
}

donate();
function donate() {
    $('.donate_money').click(function(){
        location.href='/donate';
    });   
}

// views 
function post_view(_id, c_id) {
    $.ajax({
        url : '/index/post_view',
        type : 'post',
        data : {post_id:_id, c_id:c_id}
    });  
}
function forum_view(_id) {
    $.ajax({
        url : '/forum/forum_view',
        type : 'post',
        data : {post_ID:_id}
    });  
}

// get comments
function getComments(count, postID) {
    $.ajax({
        url : "/forum/loadComments",
        method : "post",
        data : {comment_number:count, postID:postID},
        success : function(data){
            $("#CommentsID").html(data);
        
        }
    });

}
// for comments review
function review_comment(c_id) {
    $.ajax({
        url : "/forum/delComment",
        method : "post",
        data : {comment_ID:c_id},
        success : function(data){
            swal('', data, 'info');
            setTimeout(() => {
                swal.close();                            
            }, 1500);
        }
    });
}
// toggling post likes
function like_Post(postID) {
    $.ajax({
        url : "/forum/delLikes",
        method : "post",
        data : {post_ID:postID},
        success : function(data){
            if (data == 'You need to login to react on this post') {
                swal('', data, 'error');
                $('.like_toggle').toggleClass('like_status');
            } else   
                $('.likes').text(data);
        }
    });     
}

$('.fa-bars').click(function() {
    $('.ed-mob-menu').show()
});

function validate_session() {
      $.ajax({
        url : "/forum/edit_mode",
        success: function(d) {
            if (d != '') {
                 $('body').html(d);
            }
         
        }
    }); 
}
