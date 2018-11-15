 $(document).ready(function() {
        if(localStorage.getItem('remember') == "true"){
          console.log("saved");
          $('#profile').text("My Account");
        } else {
          console.log("unsaved");
          localStorage.clear();  
        }
});
      
$("#tuto").click(function(){
  if(localStorage.getItem('remember') == "true"){
    window.location = "tutorials.html";
  } else {
    window.alert("Please Log In First!");
  }
});

$("#buddies").click(function(){
  if(localStorage.getItem('remember') == "true"){
    window.location = "buddies.html";
  } else {
    window.alert("Please Log In First!");
  }
});

$("#moti").click(function(){
  if(localStorage.getItem('remember') == "true"){
    window.location = "motivation.html";
  } else {
    window.alert("Please Log In First!");
  }
});

$("#login").click(function(){
  if(localStorage.getItem('remember') == "true"){
    window.location = "account.html";
  } else {
    window.location = "login.html";
  }
});

