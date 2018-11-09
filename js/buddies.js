var x = document.getElementById("location");

function getLocation() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPeople(){
  $(".container").addClass("active");
}

function showPosition(position) {
    x.innerHTML = "You are at: UCSD RIMAC Gym.";
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
