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

// Gesture Recognition in the gesture_area div

// Handling the mouse swipes
downX = 0;
downY = 0;

navDownX = 0;

$('#gesture_area').mousedown(function (e) {
  downX = e.pageX;
  downY = e.pageY;
  $('#gesture_output').val('Mouse Down');
});

$('#gesture_area_up_down').mousedown(function (e) {
  downX = e.pageX;
  downY = e.pageY;
  $('#gesture_output').val('Mouse Down');
});

$('#gesture_area').mouseup(function (e) {
  upX = e.pageX;
  upY = e.pageY;

  output = '';

  if (upX < downX) {
    output = 'Swipe Left';
  } else if (upX > downX) {
    output = 'Swipe Right';
  } else if (upX == downX) {
    output = 'Mouse Up';
  }

  $('#gesture_output').val(output);
});

$('#gesture_area_up_down').mouseup(function (e) {
  upX = e.pageX;
  upY = e.pageY;

  output = '';

  if (upY < downY) {
    output = 'Swipe Up';
  } else if (upY > downY) {
    output = 'Swipe Down';
  } else if (upY == downY) {
    output = 'Mouse Up';
  }

  $('#gesture_output').val(output);
});

$('#gesture_nav').mousedown(function (e) {
  navDownX = e.pageX;
});

$('#gesture_nav').mouseup(function (e) {
  navUpX = e.pageX;

  output = 0;

  tabs = ['dial_bar', 'contact_bar', 'add_contact_bar', 'gesture_bar'];

  if (navUpX < navDownX) {
    output = -1;
    console.log('swipe left');
  } else if (navUpX > navDownX) {
    output = 1;
    console.log('swipe right');
  } else if (navUpX == navDownX) {
    output = 0;
  }

  currentTabIndex += output;
  console.log('currentTabIndex after swipe = ' + currentTabIndex);

  if (currentTabIndex < 0) {
    currentTabIndex = 3;
  } else if (currentTabIndex > 3) {
    currentTabIndex = 0;
  }

  selectTab(tabIds[currentTabIndex]);

});