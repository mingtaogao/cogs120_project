$(document).ready(function() {
    $('#login').on('click', function() {
      localStorage.setItem("name", document.getElementById('uname').value);
      localStorage.setItem("remember", document.getElementById('remember').checked);
      window.location.replace("../account.html");
    });
});
