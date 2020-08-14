// GIVEN I am using a daily planner to create a schedule

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist
//=======================================================================



$(document).ready(function () {

//====== sets current day + time  =============
$("#currentDay").text(moment().format("LLLL"));
// console.log(moment().format('LLLL'));


// ======== retrieve data from local storage ==============

$('[data-block="8"]').find("textArea").val(localStorage.getItem("8"));
$('[data-block="9"]').find("textArea").val(localStorage.getItem("9"));
$('[data-block="10"]').find("textArea").val(localStorage.getItem("10"));
$('[data-block="11"]').find("textArea").val(localStorage.getItem("11"));
$('[data-block="12"]').find("textArea").val(localStorage.getItem("12"));
$('[data-block="13"]').find("textArea").val(localStorage.getItem("13"));
$('[data-block="14"]').find("textArea").val(localStorage.getItem("14"));
$('[data-block="15"]').find("textArea").val(localStorage.getItem("15"));
$('[data-block="16"]').find("textArea").val(localStorage.getItem("16"));
$('[data-block="17"]').find("textArea").val(localStorage.getItem("17"));



//======   change background color dependent of current time   ============




console.log(moment().format("LT"));
var currentTime = moment().hours();
// console.log(currentHour);
// console.log(currentTime);



    $(".timeBlock").each(function () {
        var timeBlockEl = parseInt($(this).data("block"));
        console.log(timeBlockEl)
        

        if (timeBlockEl < currentTime) {
            $(this).find(".text-block").removeClass("present future").addClass("past");

        } else if (timeBlockEl === currentTime) {
            $(this).find(".text-block").removeClass("past future").addClass("present");

        } else if (timeBlockEl > currentTime) {
            $(this).find(".text-block").removeClass("past present").addClass("future");
        }
    });
    

//==== save values to local storage using saveBtn ====

$(".saveBtn").on("click", function() {
console.log("save button clicked")
var key = $(this).parent().data("block");
var value = $(this).parent().find(".textArea").val();
localStorage.setItem(key, value);
    
});


});