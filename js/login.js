$(document).ready(function() {
    if(localStorage.getItem("name")){
      $('p').text(localStorage.getItem("name"));
    }

    $('#login').on('click', function() {
    localStorage.setItem("name", document.getElementById('#text').value);
    $('p').text(localStorage.getItem("name"));});
});
// // var name = localStorage.getItem('uname');
// // if (name) {
// //     $("#myName").html(name);
// // }
// var name = document.getElementById('#uname').value;
// function store() {
//     localStorage.setItem('uname', name);
//     displayName();
// }
//
// function displayName(){
//    var myname = document.getElementById('#myName');
//    var name = localStorage.getItem(uname);
//    $("#myname").html(name);
// }
//
//   // // use localStorage to store your name
//   // $("#Login").click(function() {
//   //   var newName = localStorage.getItem('uname');
//   //   if (newName) {
//   //     $("#myName").html(newName);
//   //     localStorage.setItem('uname', newName);
//   //   }
//   // });
