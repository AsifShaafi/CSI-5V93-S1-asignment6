$(document).ready(function(){
  $('#content_dialer').show();
  $('#content_list').hide();
  $('#content_add').hide();
});

$('#dial_bar').click(function(){
  $('#content_dialer').show();
  $('#content_list').hide();
  $('#content_add').hide();

  // change color of clicked button and reset others
  $(this).css('background-color', '#e6e6e6');
  $('#contact_bar').css('background-color', 'white');
  $('#add_contact_bar').css('background-color', 'white');
});


$('#contact_bar').click(function () {
  $('#content_dialer').hide();
  $('#content_list').show();
  $('#content_add').hide();
  // change color of clicked button and reset others
  $(this).css('background-color', '#e6e6e6');
  $('#dial_bar').css('background-color', 'white');
  $('#add_contact_bar').css('background-color', 'white');
});


$('#add_contact_bar').click(function () {
  $('#content_dialer').hide();
  $('#content_list').hide();
  $('#content_add').show();
  // change color of clicked button and reset others
  $(this).css('background-color', '#e6e6e6');
  $('#dial_bar').css('background-color', 'white');
  $('#contact_bar').css('background-color', 'white');
});

var count = 0;

$('.digit').on('click', function () {
  var num = $(this).clone().children().remove().end().text();
  if (count < 11) {
    $('#output').append('<span>' + num.trim() + '</span>');

    count++;
  }
});

$('.clear-button').on('click', function () {
  $('#output span:last-child').remove();
  count--;
});

// $('#contact-form-submit-button').on('click', function () {
//   alert('Contact added!');
//   $('#name').val('');
//   $('#email').val('');
//   $('#phone').val('');
// });

$('#contact-form-clear-button').on('click', function () {
  $('#name').val('');
  $('#email').val('');
  $('#phone').val('');
});
