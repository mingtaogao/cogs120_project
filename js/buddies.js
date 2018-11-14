var x = document.getElementById("location");

var postContent = [
  {'profilePic': 'images/avatar1.jpg', 'name': 'Ming', 'startTime':'9:30', 'endTime':'10:30', 'index':1},
  {'profilePic': 'images/avatar2.jpeg', 'name': 'James', 'startTime':'9:50', 'endTime':'11:00', 'index':2},
  {'profilePic': 'images/avatar3.jpg', 'name': 'Lucia', 'startTime':'10:00', 'endTime':'11:45', 'index':3},
  {'profilePic': 'images/avatar4.jpg', 'name': 'Sofia', 'startTime':'10:05', 'endTime':'11:30', 'index':4},
  {'profilePic': 'images/avatar5.jpeg', 'name': 'Steven', 'startTime':'10:15', 'endTime':'12:00', 'index':5},
]

$(document).ready(function() {
  console.log('hello world');

  //Disable the make post button
  document.getElementById("post").disabled = true;

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

  $("#post").click(function(){
      $("#postForm").toggle();
  });

  $("#submit").click(function(){
    localStorage.setItem("name", document.getElementById('name').value);
    localStorage.setItem("startTime", document.getElementById('startTime').value);
    localStorage.setItem("endTime", document.getElementById('endTime').value);
    var name = localStorage.getItem("name");
    var startTime = localStorage.getItem("startTime");
    var endTime = localStorage.getItem("endTime");
    postContent.unshift({'profilePic': 'images/avatar6.png', 'name': name, 'startTime': startTime, 'endTime': endTime});
    var html = template(postContent[0]);
    parentDiv.prepend(html);
    $(".container").addClass("active");
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
  document.getElementById("post").disabled = false;
}

function showPosition(position) {
    x.innerHTML = "You are at: UCSD RIMAC Gym.";
}

function makePost(){
    localStorage.setItem("name", document.getElementById('name').value);
    localStorage.setItem("startTime", document.getElementById('startTime').value);
    localStorage.setItem("endTime", document.getElementById('endTime').value);
}


function openForm() {
    document.getElementById("myForm").style.display = "block";
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function openForm1() {
    document.getElementById("myForm1").style.display = "block";
}

function closeForm1() {
    document.getElementById("myForm1").style.display = "none";
}
function openForm2() {
    document.getElementById("myForm2").style.display = "block";
}

function closeForm2() {
    document.getElementById("myForm2").style.display = "none";
}
function openForm3() {
    document.getElementById("myForm3").style.display = "block";
}

function closeForm3() {
    document.getElementById("myForm3").style.display = "none";
}
function openForm4() {
    document.getElementById("myForm4").style.display = "block";
}

function closeForm4() {
    document.getElementById("myForm4").style.display = "none";
}
function openForm5() {
    document.getElementById("myForm5").style.display = "block";
}

function closeForm5() {
    document.getElementById("myForm5").style.display = "none";
}
