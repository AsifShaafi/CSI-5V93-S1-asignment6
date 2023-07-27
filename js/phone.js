$(document).ready(function () {
  $('#content_dialer').show();
  $('#content_list').hide();
  $('#content_add').hide();
  $('#test_gesture').hide();
});

currentTabIndex = 0;
tabIds = ['dial_bar', 'contact_bar', 'add_contact_bar', 'gesture_bar'];

function selectTab(buttonId) {
  console.log('selectTab(' + buttonId + ')');

  // hide all tabs
  $('#content_dialer').hide();
  $('#content_list').hide();
  $('#content_add').hide();
  $('#test_gesture').hide();

  if (buttonId == 'dial_bar') {
    $('#content_dialer').show();
  } else if (buttonId == 'contact_bar') {
    $('#content_list').show();
  } else if (buttonId == 'add_contact_bar') {
    $('#content_add').show();
  } else if (buttonId == 'gesture_bar') {
    $('#test_gesture').show();
  }

  // change color of clicked button and reset others
  $('#' + buttonId).css('background-color', '#e6e6e6');
  for (i = 0; i < tabIds.length; i++) {
    if (tabIds[i] != buttonId) {
      $('#' + tabIds[i]).css('background-color', 'white');
    }
  }

  // update currentTabIndex
  for (i = 0; i < tabIds.length; i++) {
    if (tabIds[i] == buttonId) {
      currentTabIndex = i;
    }
  }

  console.log('currentTabIndex = ' + currentTabIndex);
}

$('#dial_bar').click(() => selectTab(tabIds[0]));

$('#contact_bar').click(() => selectTab(tabIds[1]));

$('#add_contact_bar').click(() => selectTab(tabIds[2]));

$('#gesture_bar').click(() => selectTab(tabIds[3]));

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
