$(document).ready(function () {

  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); // use of moment.js
  
  // assign save button and local storage
  $(".saveBtn").on("click", function () {

      console.log(this);
      var text = $(this).siblings(".description").val(); 
      var time = $(this).parent().attr("id"); 

      //set items in local storage.
      localStorage.setItem(time, text);
  })
  // Loads saved data from local storage
  $("#H8 .description").val(localStorage.getItem("H8"));
  $("#H9 .description").val(localStorage.getItem("H9"));
  $("#H10 .description").val(localStorage.getItem("H10"));
  $("#H11 .description").val(localStorage.getItem("H11"));
  $("#H12 .description").val(localStorage.getItem("H12"));
  $("#H13 .description").val(localStorage.getItem("H13"));
  $("#H14 .description").val(localStorage.getItem("H14"));
  $("#H15 .description").val(localStorage.getItem("H15"));
  $("#H16 .description").val(localStorage.getItem("H16"));
  $("#H17 .description").val(localStorage.getItem("H17"));

  function hourSwitch() {

      var currentHour = moment().hour(); // moment.js

      $(".time-block").each(function () {
          var blockHour = parseInt($(this).attr("id").split("hour")[1]);
          console.log( blockHour, currentHour)

          // Changes classes based on time see css for past, present, and future styles
          if (blockHour < currentHour) {
              $(this).addClass("past");
              $(this).removeClass("future");
              $(this).removeClass("present");
          }
          else if (blockHour === currentHour) {
              $(this).removeClass("past");
              $(this).addClass("present");
              $(this).removeClass("future");
          }
          else {
              $(this).removeClass("present");
              $(this).removeClass("past");
              $(this).addClass("future");
          }
      })
  }
  hourSwitch();
})