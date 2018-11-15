$(document).ready(function() {
    $('#login').on('click', function() {
      localStorage.setItem("name", document.getElementById('uname').value);
      localStorage.setItem("remember", document.getElementById('remember').checked);
      if (localStorage.getItem('remember') == "false"){
      	window.alert("If you go back to home page, you will be automatically logged out!");
      }
      window.location.replace("account.html");
    });
});
