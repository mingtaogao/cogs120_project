var x = document.getElementById("location");

var postContent = [
  {'profilePic': 'images/avatar1.jpg', 'name': 'Ming', 'startTime':'9:30', 'endTime':'10:30', 'index':1},
  {'profilePic': 'images/avatar2.jpeg', 'name': 'James', 'startTime':'9:50', 'endTime':'11:00', 'index':2},
  {'profilePic': 'images/avatar3.jpg', 'name': 'Lucia', 'startTime':'10:00', 'endTime':'11:45', 'index':3},
  {'profilePic': 'images/avatar4.jpg', 'name': 'Sofia', 'startTime':'10:05', 'endTime':'11:30', 'index':4},
  {'profilePic': 'images/avatar5.jpeg', 'name': 'Steven', 'startTime':'10:15', 'endTime':'12:00', 'index':5},
]

var allowPost = 1;

$(document).ready(function() {
  console.log('hello world');

  // compile the template
  var source   = $("#entry-template").html();
  var template = Handlebars.compile(source);
  var parentDiv = $("#templatedPosts");

  // now iterate through the complexData list and keep appending:
  for (var i = 0; i < postContent.length; i++) {
    var curData = postContent[i];
    var curHtml = template(curData);
    parentDiv.append(curHtml);
  }
  

  $("#submit").click(function(){
    localStorage.setItem("name", document.getElementById('name').value);
    localStorage.setItem("startTime", document.getElementById('startTime').value);
    localStorage.setItem("endTime", document.getElementById('endTime').value);
    var name = localStorage.getItem("name");
    var startTime = localStorage.getItem("startTime");
    var endTime = localStorage.getItem("endTime");
    postContent.unshift({'profilePic': 'images/avatar6.png', 'name': name, 'startTime': startTime, 'endTime': endTime, 'index': postContent.length + 1});
    var html = template(postContent[0]);
    parentDiv.prepend(html);
    document.getElementById('chat').setAttribute('onclick', 'deletePost(postContent.length)');
    document.getElementById('chat').innerText="Delete"
    $(".container").addClass("active");
    $("#postForm").hide();
    allowPost = 2;
  });


  $(".send").click(function(){
    window.alert("Your Message Has Been Sent!");
  });
});

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPeople(){
  $(".container").addClass("active");
  allowPost = 0;
}

$('#post').click(function() {
  if (allowPost == 1) {
    window.alert("Get your current location then make your post!");
  } else if (allowPost == 2){
    window.alert("You have already made a post!");
  } else {
     $("#postForm").toggle();
  }
 });

function showPosition(position) {
    x.innerHTML = "You are at: UCSD RIMAC Gym.";
}

function makePost(){
    localStorage.setItem("name", document.getElementById('name').value);
    localStorage.setItem("startTime", document.getElementById('startTime').value);
    localStorage.setItem("endTime", document.getElementById('endTime').value);
}

function openForm(num) {
    $("#myForm" + num).show();
}

function closeForm(num) {
    $("#myForm" + num).hide();
}

function deletePost(num) {
  postContent.splice(num - 6, 1);
  $(".container" + num).remove();
  allowPost = 0;
}

