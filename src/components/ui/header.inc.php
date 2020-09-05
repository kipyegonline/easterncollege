<meta charset="utf-8">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<title><?php echo $this->title; ?></title>
<link rel="stylesheet" href="/views/assets/main.css?<?php echo random_int(100, 1000); ?>">
<link rel="stylesheet" href="/views/assets/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="icon" type="image/ico" href="/views/assets/uploads/ico.png" />

<link href="css/css-zoom.css" rel="stylesheet">
<!--link href="css/css-font-awesome.min.css" rel="stylesheet"-->
<!--link href="/views/assets/css/css-materialize.css" rel="stylesheet"-->
<link href="/views/assets/css/css-style.css" rel="stylesheet">
<link href="/views/assets/css/css-style-mob.css" rel="stylesheet">


<?php date_default_timezone_set("Africa/Mogadishu"); ?>
<script>
    var current_url = window.location.href;
    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", "/index/new/" + current_url, false);
    xhReq.send(null);
    var serverResponse = xhReq.responseText;
</script>

