function openNav() {
  document.getElementById("mySidenav").style.width = "28%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

$('.legExt').on('click', function() {
  $(this).html('<iframe width="180" height="130" src="https://www.youtube.com/embed/8Jqof7z3QYM" frameborder="0" allowfullscreen="true"></iframe>')
  .addClass('active');
});
$('.calfExt').on('click', function() {
  $(this).html('<iframe width="180" height="130" src="https://www.youtube.com/embed/8Jqof7z3QYM" frameborder="0" allowfullscreen="true"></iframe>')
  .addClass('active');
});
$('.tricepPress').on('click', function() {
  $(this).html('<iframe width="180" height="130" src="https://www.youtube.com/embed/4W31U8tTVAg" frameborder="0" allowfullscreen="true"></iframe>')
  .addClass('active');
});
$('.hammerStrength').on('click', function() {
  $(this).html('<iframe width="180" height="130" src="https://www.youtube.com/embed/gy-_QDUgGi4" frameborder="0" allowfullscreen="true"></iframe>')
  .addClass('active');
});
$('.shoulderPress').on('click', function() {
  $(this).html('<iframe width="180" height="130" src="https://www.youtube.com/embed/l-Z7z0nA-Rs" frameborder="0" allowfullscreen="true"></iframe>')
  .addClass('active');
});
$('.backExt').on('click', function() {
  $(this).html('<iframe width="180" height="130" src="https://www.youtube.com/embed/YrBgyPSajvU" frameborder="0" allowfullscreen="true"></iframe>')
  .addClass('active');
});
$('.cableTwist').on('click', function() {
  $(this).html('<iframe width="180" height="130" src="https://www.youtube.com/embed/zQJKfN7BU-c" frameborder="0" allowfullscreen="true"></iframe>')
  .addClass('active');
});
