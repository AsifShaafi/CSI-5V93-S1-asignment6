$(document).ready(function () {
  $('#content_dialer').show();
  $('#content_list').hide();
  $('#content_add').hide();
});

$('#dial_bar').click(function () {
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
  let lastVal = $('#contact_output_text').val();
  console.log(lastVal);
  if (count < 11) {
    count++;
    $('#contact_output_text').val(lastVal + num.trim());
  }
});

$('.clear-button').on('click', function () {
  count = 0;
  $('#contact_output_text').val('');
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

$('#dial-button').on('click', function () {
  let lastVal = $('#contact_output_text').val();
  if (lastVal.length <= 0) {
    alert('Please enter a phone number!');
  } else {
    alert('Calling ' + lastVal + '...');
  }
});
