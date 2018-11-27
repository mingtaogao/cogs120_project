$(document).ready(function() {
  localStorage.setItem("account", true);
  localStorage.setItem("tutorial", false);
  if(localStorage.getItem("submitted")) {
    document.getElementById("recommend").style.display = 'block';
    $("#questionary").hide();
    $("#recommend").show();
  }
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
