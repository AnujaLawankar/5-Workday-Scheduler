// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


var today = $('#currentDay');
const counter = 0;


$(function () {





  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


  displayDate();
  displaycolor();
  // displayText();


});


function displayDate() {

  var currentDate = dayjs().format('dddd, MMMM D');
  today.text(currentDate);


}

function displaycolor() {

  var currenthour = dayjs().format('HH');
  //var currenthour = 13;
  const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  for (var x = 0; x < hours.length; x++) {


    var counter = hours[x];
    console.log(counter);
    console.log('current time' + currenthour);

    if (currenthour == counter) {



      $("#hour-" + counter).addClass("present");

      console.log('red');


    }
    else if (currenthour < counter) {


      $("#hour-" + counter).addClass("future");
      console.log('green');


    } else if (currenthour > counter) {


      $("#hour-" + counter).addClass("past");
      console.log("grey");

    }

  }


}




// Add click listener to each save button
$('.saveBtn').on('click', function () {
  // Get the id of the containing time block
  const timeid = $(this).closest('.time-block').attr('id');
  // Get the user input from the textarea
  const textInput = $(this).siblings('.description').val();
  // Save the user input in local storage using the id as the key
  localStorage.setItem(timeid, textInput);
});

// Load saved data from local storage on page load
$('.time-block').each(function () {
  const id = $(this).attr('id');
  const textsave = localStorage.getItem(id);
  if (textsave) {
    $(this).find('.description').val(textsave);
  }
});


