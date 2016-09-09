//Question 1
$('a:contains("eal")').css('color','red');

//Question 2
$('a').click(function(event) {
  $(this).fadeOut(5000);
  return false
});



