$(document).ready(function() {
    $('#login').on('click', function() {
      localStorage.setItem("name", document.getElementById('uname').value);
      window.location.replace("../account.html");
    });
});
