$(document).ready(function() {
    if(localStorage.getItem("uname")){
      $('#welcome').text("Welcome Back " + localStorage.getItem("name"));
    }
});
