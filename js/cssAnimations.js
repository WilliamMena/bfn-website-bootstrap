$(document).ready(function() {
  $('#box1').css('opacity', 0);

  $('#box1').waypoint(function() {
    $('#box1').addClass('animated fadeInUp')
  }, { offset: '50%'});

  $('#box2').css('opacity', 0);

  $('#box2').waypoint(function() {
    $('#box2').addClass('animated fadeInUp')
  }, { offset: '40%'});

  $('#box3').css('opacity', 0);

  $('#box3').waypoint(function() {
    $('#box3').addClass('animated fadeInUp')
  }, { offset: '30%'});








})
