$(document).ready(function() {
    if(localStorage.getItem("name")){
      $('#welcome').text("Welcome Back " + localStorage.getItem("name"));
    }

    $("#logout").click(function(){
    	localStorage.clear();
    	window.location = 'index.html';
    })
});

function openNav() {
  document.getElementById("mySidenav").style.width = "28%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}