$(document).ready(function() {
    if(localStorage.getItem("name")){
      $('#welcome').text("Welcome Back " + localStorage.getItem("name"));
    }

    $("#logout").click(function(){
    	localStorage.clear();
    	window.location = 'index.html';
    })
});
