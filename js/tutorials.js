$('#video').on('click', function() {
  $(this).html('<iframe width="560" height="315" src="https://www.youtube.com/embed/8Jqof7z3QYM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
  .addClass('active');
});
